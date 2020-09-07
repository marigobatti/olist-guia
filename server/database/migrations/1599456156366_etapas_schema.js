'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EtapasSchema extends Schema {
  up () {
    this.create('etapas', (table) => {
      table.increments()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
      table.string('nome', 255)
      table.text('descricao').nullable()
      table.float('pontuacao')
      table.integer('order')
      table.timestamps()
    })
  }

  down () {
    this.drop('etapas')
  }
}

module.exports = EtapasSchema
