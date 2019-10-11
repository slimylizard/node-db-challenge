
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resource').truncate()
    .then(() => knex('projects').truncate())
    .then(() => knex('resources').truncate())
    .then(() => knex('tasks').truncate())
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Project 1', project_description: 'this is the first one', completed: false},
        {id: 2, project_name: 'Next Project', project_description: 'this is the second one', completed: false},
        {id: 3, project_name: '3rd Project', project_description: 'this is the last project', completed: false}
      ]);
    })
    .then(function () {
      return knex('resources').insert([
        {id: 1, resource_name: 'Ruler', resource_description: 'use this to mesure anything'},
        {id: 2, resource_name: 'Internet', resource_description: 'use this to look up anything'},
        {id: 3, resource_name: 'Paper', resource_description: 'used to plan out your project'}
      ])
    })
    .then(function () {
      return knex('tasks').insert([
        {id: 1, task_description: 'buy your rescources', notes: 'here is a note', completed: false, project_id: 1},
        {id: 2, task_description: 'buy your house', notes: 'here is a note', completed: false, project_id: 1},
        {id: 3, task_description: 'eat your breakfast', notes: 'here is a note', completed: false, project_id: 2},
        {id: 4, task_description: 'buy your rescources', notes: 'here is a note', completed: false, project_id: 3}
      ])
    })
    .then(function () {
      return knex('project_resource').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 1, resource_id: 2},
        {project_id: 2, resource_id: 3},
        {project_id: 3, resource_id: 2}
      ])
    })
};
