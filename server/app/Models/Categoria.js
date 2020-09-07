'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
  static boot () {
    super.boot()
  }
    
  etapas() {
    return this.hasMany('App/Models/Etapa');
  }
}

module.exports = Categoria
