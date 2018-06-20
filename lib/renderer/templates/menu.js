const defaults = {
  routes: [
    {
      routeHash: '/',
      routeTitle: 'Go home'
    }
  ]
}

export default (settings = defaults) => {
  const menuItemsRendered = settings.routes
    .map(route => `<li><a href="#${route.routeHash}">${route.routeTitle}</a></li>`)
    .join('')
  return `<ul class="menu">${menuItemsRendered}</ul>`
}