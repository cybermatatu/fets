'use strict'

class UserController {
  /**
   * Log in a user with email and password
   * @param {*} request
   * @param {*} response
   */
  * login (request, response) {
    const email = request.input('email')
    const password = request.input('password')
    const login = yield request.auth.attempt(email, password)

    if (login) {
      console.log('user has logged in')
      response.send('success')
      return
    }
    console.log('failed to log in')
    response.unauthorized('invalid credentials')
  }

  /**
   * Log out currently logged user
   * @param {*} request
   * @param {*} response
   */
  * logout (request, response) {
    yield request.auth.logout()
    response.send('user logout')
  }
}

module.exports = UserController
