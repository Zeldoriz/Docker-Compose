import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.increments('product_id').primary();
    table.string('product_name').notNullable();
    table.string('product_description').notNullable();
    table.decimal('product_price', 10, 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('products');
}
