import Router from './router'
import Api from './api'
import {templates} from './renderer/'
import $ from 'jquery'

const api = new Api()
const router = new Router($('.widget-container'))

// ********* App routes ********** //
router.addRoute('/', 'Home', function(){
  return `<p>Frontpage</p>`
})

router.addRoute('/cool', 'Check it!', function(){
  return `<p>This is another cool page</p>`
})

router.addRoute('/users', 'List of users', function(){
  return api.fetchUsers()
    .then(users => `
      <div class"user__list">
        ${users.map( user => templates.user(user)).join('')}
      </div>
    `)
})