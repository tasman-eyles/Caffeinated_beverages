/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('videos',
    (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('url')
    }
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('videos')
  
};
