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
const EtapaModel = use('App/Models/Etapa')

class CategoriaSeeder {
  async run () {
    await EtapaModel.create({
      categoria_id: 2,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 2,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 2
    })

    await EtapaModel.create({
      categoria_id: 2,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 3
    })

    await EtapaModel.create({
      categoria_id: 3,
      nome: 'cadastre seu primeiro produto',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 3,
      nome: 'defina preço e frete: a hora de conquistar vendas',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 2
    })

    await EtapaModel.create({
      categoria_id: 3,
      nome: 'defina estoque: decisivo para a visibilidade',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 3
    })

    await EtapaModel.create({
      categoria_id: 4,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 4,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 2
    })

    await EtapaModel.create({
      categoria_id: 4,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 3
    })

    await EtapaModel.create({
      categoria_id: 4,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 4
    })

    await EtapaModel.create({
      categoria_id: 4,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 5
    })

    await EtapaModel.create({
      categoria_id: 4,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 6
    })

    await EtapaModel.create({
      categoria_id: 5,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 5,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 2
    })

    await EtapaModel.create({
      categoria_id: 5,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 3
    })

    await EtapaModel.create({
      categoria_id: 6,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 6,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 2
    })

    await EtapaModel.create({
      categoria_id: 7,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 8,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 1
    })

    await EtapaModel.create({
      categoria_id: 8,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 2
    })

    await EtapaModel.create({
      categoria_id: 8,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 3
    })

    await EtapaModel.create({
      categoria_id: 8,
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue eu leo consequat iaculis at ut ligula. Nulla lorem tellus, iaculis sed rutrum sit amet, bibendum a enim. Nunc sed tristique sem. Mauris imperdiet mi eu purus auctor consequat.',
      pontuacao: 10,
      order: 4
    })
  }
}

module.exports = CategoriaSeeder
