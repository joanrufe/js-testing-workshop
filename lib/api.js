import fetch from 'isomorphic-fetch'

export class Api {
  constructor (settings = {host: 'http://localhost:3000'}){
    this.host = settings.host
    this.users = []
  }
  serverReady(){
    return fetch(`${this.host}`)
  }
  fetchUsers(){
    return fetch(`${this.host}/users`)
      .then(res => res.json())
  }
}

export default Api