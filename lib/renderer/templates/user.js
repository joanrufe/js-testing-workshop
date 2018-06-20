const defaults = {
  id: 1,
  name: 'Jonh',
  surname: 'doe',
  email: 'doe.jonh@mail.com',
  gender: 'male',
  avatar: 'https://robohash.org/placeatoptiovoluptates.png?size=150x150&set=set1'
}

export default (settings = defaults) => `
  <div class="user">
    <div class="user__avatar"><img src="${settings.avatar}"/></div>
    <div class="user__name">${settings.surname}, ${settings.name}</div>
    <div class="user__email"><a href="mailto:${settings.email}">${settings.email}</a></div>
  </div>
`