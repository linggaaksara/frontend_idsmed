'use strict'

class TodoController {
    index({request, response, view}){
        return view.render('crud.index')
    }

    page2({request, response, view}){
        return view.render('crud.page2')
    }

    page3({request, response, view}){
        return view.render('crud.page3')
    }

    page4({request, response, view}){
        return view.render('crud.page4')
    }

    page5({request, response, view}){
        return view.render('crud.page5')
    }

    home({request, response, view}){
        return view.render('crud.home')
    }

    login({request, response, view}){
        return view.render('crud.login')
    }
}

module.exports = TodoController