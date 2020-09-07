'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProgressoSchema extends Schema {
  up () {
    this.create('progressos', (table) => {
      table.increments()
      table.integer('vendedor_id').unsigned().references('id').inTable('users')
      table.integer('etapa_id').unsigned().references('id').inTable('etapas')
      table.boolean('terminou')
      table.timestamps()
    })
  }

  down () {
    this.drop('progressos')
  }
}

module.exports = ProgressoSchema
