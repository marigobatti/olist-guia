'use strict'

const UserModel = use('App/Models/User')

class UserController {
  async login ({ request, response, auth }) {
    const { email, password } = request.all()

    const user = await UserModel.query().where('email', email).first();
    const token = await auth.attempt(email, password)
    return response.json({ username: user.nome, token })
  }
}

module.exports = UserController
