/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('packages', function (table) {
    table.uuid('id').primary();
    table.string('title').notNullable().unique();
    table.string('summary').notNullable();
    table.bigint('price').notNullable();
    table.text('description').notNullable();
    table.string('image').notNullable();
    table
      .dateTime('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
  await knex.schema.createTable('packages_detail', function (table) {
    table.uuid('id');
    table.string('title_package').references('title').inTable('packages');
    table.string('title_product').references('title').inTable('products');
    table
      .dateTime('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('packages');
  await knex.schema.dropSchemaIfExists('packages_detail');
};
