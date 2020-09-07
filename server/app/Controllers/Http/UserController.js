'use strict'

const UserModel = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async login ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password);
    return response.json(token)
  }
}

module.exports = UserController
