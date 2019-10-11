const db = require('../data/db.js')

module.exports = {
    findProject, 
    findById,
    findResource,
    findTasks
}

function findProject() {
    return db('projects');
}
function findById(id) {
    return find().where({ id }).first();
}
function findResource() {
    return db('resources')
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
