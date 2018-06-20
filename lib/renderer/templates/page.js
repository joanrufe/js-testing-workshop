const defaults = {
  title: 'My cool website',
  children: '<p>No content</p>',
  menuElems: '<li><a href="#/">Home</a></li>'
}

/**
 * @param settings Arguments for current component
 * @returns String containing rendered component
 */
export default (settings = defaults) => `
  <div class="container col">
    <div class="row">
      <h1>${settings.title || defaults.title}</h1>
    </div>
    <div class="row">
        ${settings.menuElems || defaults.menuElems}
    </div>
    <div class="row view">
      ${settings.children || defaults.children}
    </div>
  </div>
`