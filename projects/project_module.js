const db = require('../data/db.js')

module.exports = {
    findProject, 
    findProjectById,
    findResources,
    findResourceById,
    findTasks,
    findTaskById,
    insertProject,
    insertResource,
    insertTask
}

function findProject() {
    return db('projects');
}
function findProjectById(id) {
    return findProject().where({ id }).first();
}
function findResources() {
    return db('resources')
}
function findResourceById(id) {
    return findResources().where({ id }).first();
}
function findTasks() {
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select([
        'projects.project_name', 
        'projects.project_description',
        'tasks.task_description',
        'tasks.notes',
        'tasks.completed'
    ])
}
function findTaskById(id) {
    return findTasks().where({ id }).first();
}
function insertProject(project) {
    console.log(project)
    return db('projects')
        .insert(project)
}
function insertResource(resource) {
    return db('resources')
        .insert(resource)
}
function insertTask(task) {
    return db('tasks')
        .insert(task)
}