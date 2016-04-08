exports.up = function(knex, Promise) {
  return knex.schema.createTable('lifts', function (table) {
    table.increments();
    table.string('user_id').notNullable().unique();
    table.date('date').notNullable();
    table.string('lift').notNullable();
    table.integer('sets');
    table.integer('reps');
    table.integer('weight');
    table.boolean('PR').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifts');
};
