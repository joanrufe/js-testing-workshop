import fetch from 'isomorphic-fetch'

export class Api {
  constructor(settings = {
    host: 'http://localhost:3000'
  }) {
    this.host = settings.host
    this.users = []
  }
  serverReady() {
    return fetch(`${this.host}`)
  }
  fetchUsers() {
    return fetch(`${this.host}/users`)
      .then(res => res.json())
  }
  getUser(id) {
    if (!id) throw new Error('No id provided')
    return fetch(`${this.host}/users/${id}`)
      .then(res => res.json())
  }
  deleteUser(id) {
    if (!id) throw new Error('No id provided')
    return fetch(`${this.host}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
  }
  createUser(user){
    if(!user) throw new Error('No user data provided')
    return fetch(`${this.host}/users`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
  }
}

export default Api