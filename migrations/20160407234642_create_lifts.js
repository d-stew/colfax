exports.up = function(knex, Promise) {
  return knex.schema.createTable('lifts', function (table) {
    table.increments();
    table.date('date').notNullable();
    table.string('lift');
    table.integer('reps');
    table.integer('weight');
    table.boolean('PR');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifts');
};
