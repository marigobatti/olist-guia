'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CategoriaModel = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await CategoriaModel.create({
      nome: 'como o olist funciona',
      order: 1
    })

    await CategoriaModel.create({
      nome: 'primeiros passos',
      order: 2
    })

    await CategoriaModel.create({
      nome: 'cadastro de produtos',
      order: 3
    })

    await CategoriaModel.create({
      nome: 'vendas',
      order: 4
    })

    await CategoriaModel.create({
      nome: 'entrega dos produtos',
      order: 5
    })

    await CategoriaModel.create({
      nome: 'financeiro',
      order: 6
    })

    await CategoriaModel.create({
      nome: 'como fidelizar e manter seu cliente informado',
      order: 7
    })

    await CategoriaModel.create({
      nome: 'estratégias de divulgação',
      order: 8
    })

    await CategoriaModel.create({
      nome: 'estratégia de vendas',
      order: 9
    })
  }
}

module.exports = CategoriaSeeder
