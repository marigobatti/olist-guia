'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const UserModel = use('App/Models/User')

class UserSeeder {
  async run () {
    await UserModel.create({
      nome: 'Mariana Gobatti',
      email: 'mariana@teste.com',
      password: '1234'
    })
    
    await UserModel.create({
      nome: 'Isabele Brum',
      email: 'isabele@teste.com',
      password: '1234'
    })

    await UserModel.create({
      nome: 'Amábily',
      email: 'amabily@teste.com',
      password: '1234'
    })

    await UserModel.create({
      nome: 'Paula',
      email: 'paula@teste.com',
      password: '1234'
    })
  }
}

module.exports = UserSeeder
