import * as templates from '../renderer/templates'
import $ from 'jquery'

/**
 * Router class that attach controllers for url hash
 */
export class Router{
  constructor(elem = $('.widget-container')){
    this.view = elem
    this.routes = []
    // Attach handlers
    window.addEventListener('hashchange', this.handleRoute)
    document.onreadystatechange = this.handleRoute
  }

  /**
   * Attach a route to the router system
   * @param routeHash String
   * @param routeTitle String
   * @param controller Callback or Promise object
   */
  addRoute = (routeHash, routeTitle, controller) => {
    this.routes.push(
      {
        routeHash,
        routeTitle,
        controller
      }
    )
  }

  /**
   * Renders controller with a 'page' layout
   */
  renderPage = controller => {
    if(!controller) return ''
    this.view.html(
      templates.page({
        menuElems: templates.menu({routes: this.routes}),
        children: typeof controller == 'function'? controller() : controller
      })
    )
  }
  /**
   * Take hash from url and check if there is a controller for that
   */
  handleRoute = (e) => {
    const url = location.hash.slice(1) || '/'
    
    const routeIndex = this.routes.findIndex(r => r.routeHash == url)
    const route = this.routes[routeIndex]

    if(route){
      const res = route.controller()
      if(res instanceof Promise){
        res.then(this.renderPage)
      }else{
        this.renderPage(res)
      }
    }
  }
}