'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'TodoController.login').as('Todo.login')
Route.get('/kedua', 'TodoController.page2').as('Todo.page2')
Route.get('/ketiga', 'TodoController.page3').as('Todo.page3')
Route.get('/keempat', 'TodoController.page4').as('Todo.page4')
Route.get('/kelima', 'TodoController.page5').as('Todo.page5')
Route.get('/home', 'TodoController.home').as('Todo.home')
Route.get('/index', 'TodoController.index').as('Todo.index')