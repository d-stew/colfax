exports.up = function(knex, Promise) {
  return knex.schema.createTable('lifts', function (table) {
    table.increments();
    table.string('username');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifts');
};
