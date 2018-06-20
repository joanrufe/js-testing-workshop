import {Router} from './router'
import $ from 'jquery'

describe('Router', () => {
  // Arrange app container
  $('body').html('<div class="widget-container"></div>')
  const container = $('.widget-container')

  it('Create instance or Router',()=>{
    // Act
    const router = new Router(container)
    // Assert
    expect(router.view).not.toBe(undefined)
    expect(router.view.length).toBeGreaterThan(0)
  })

  it('Attach a controller correcly',()=>{
    // Arrange
    const router = new Router(container)

    // Act
    router.addRoute('/posts', 'Blog',()=>{})
    const indexTitle = router.routes.findIndex(item => item.routeTitle == 'Blog')
    const indexHash = router.routes.findIndex(item => item.routeHash == '/posts')
  
    // Assert 
    expect(indexHash).toBeGreaterThanOrEqual(0)
    expect(indexTitle).toBeGreaterThanOrEqual(0)
  })
  
  it('Attached controller executed when route match',()=>{
    // Arrange
    const sampleController = jest.fn();

    // Act
    const router = new Router(container)
    router.addRoute('/', 'Home', sampleController)
    router.handleRoute() // Will launch default controller "/"

    // Assert
    expect(sampleController).toBeCalled()
  })

  it('Promise as a controller is resolved', ()=>{
    // Arrange
    const samplePromise = jest.fn().mockImplementation(() => Promise.resolve('x'));

    // Act
    const router = new Router(container)
    router.addRoute('/', 'Home', samplePromise)
    router.handleRoute()

    // Assert
    expect(samplePromise).toBeCalled()
  })

  it('Controller renders and execute default route /',()=>{
    // Arrange
    const router = new Router(container)
    router.addRoute('/', 'Home', ()=> `<p id="home_content"></p>`)

    // Act
    router.handleRoute()
    const $homeQuery = $('#home_content')

    // Assert
    expect($homeQuery.length).toBe(1)
  })
})
