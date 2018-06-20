import Api from './api'

describe('Api',()=>{
  // Arrange
  let postedUserId
  const api = new Api()
  it('Instantiate Api object', ()=>{
    //Assert
    expect(typeof api.host).toBe('string')
    expect(api.host.length).toBeGreaterThan(10)
    expect(api.users instanceof Array).toBe(true)
    
  })
  it('Server is ready', () => {
    // Act
    const res = api.serverReady()
    //Assert
    return res.then(res => { // Return promise to do the assertions after resolved
      expect(res.status).toBe(200)
    })
  })

  it('Fetch users', () => {
    const res = api.fetchUsers();
    // Assert
    expect(res instanceof Promise).toBe(true)
    return res.then( users => {
      expect(typeof users.length).toBe('number')
    })
  })

  it('Get user by id', () => {
    const res = api.getUser(1);
    expect(res instanceof Promise).toBe(true)

    // Return promise to do the assertions after resolved
    return res.then( user => {
      expect(typeof user.id).toBe('number')
      expect(typeof user.name).toBe('string')
      expect(typeof user.surname).toBe('string')
      expect(typeof user.email).toBe('string')
      expect(typeof user.gender).toBe('string')
      expect(typeof user.avatar).toBe('string')
    })
  })
})