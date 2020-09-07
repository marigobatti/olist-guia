'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.string('nome', 255)
      table.text('descricao').nullable()
      table.integer('order')
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriasSchema
