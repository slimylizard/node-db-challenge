
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name').notNullable();
      tbl.string('project_description')
      tbl.boolean('completed')
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name').notNullable();
      tbl.string('resource_description')
  })  
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_description').notNullable();
      tbl.string('notes')
      tbl.boolean('completed')
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('project_resource', tbl => {
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      tbl.primary(['project_id', 'resource_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resource')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
