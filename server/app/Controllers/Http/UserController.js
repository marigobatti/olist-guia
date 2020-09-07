'use strict'

const UserModel = use('App/Models/User')

class UserController {
  async login ({ request, response, auth }) {
    const { email, password } = request.all()

    const user = await UserModel.query().where('email', email).first();
    const access = await auth.attempt(email, password)
    return response.json({ username: user.nome, ...access })
  }
}

module.exports = UserController
