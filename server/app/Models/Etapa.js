'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Etapa extends Model {
  static boot () {
    super.boot()
  }
}

module.exports = Etapa
