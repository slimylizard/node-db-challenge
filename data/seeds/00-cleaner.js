const cleaner = require('knex-cleaner');
exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate',
    ignoreTables: ['knex_migration', 'knex_migration_lock'],
  }); 
};
