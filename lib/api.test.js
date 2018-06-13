import Api from './api'

describe('# Api',()=>{
  const api = new Api()
  it('Instantiate Api object', ()=>{
    
    expect(typeof api.host).toBe('string')
    expect(api.users instanceof Array).toBe(true)
    
  })
  it('Server is ready', () => {
    const res = api.serverReady()
    return res.then(res => {
      expect(res.status).toBe(200)
    })
  })
  it('Fetch users', () => {
    const res = api.fetchUsers();
    expect(res instanceof Promise).toBe(true)

    // Return promise to do the assertions after resolved
    return res.then( data => {
      expect(typeof data.length).toBe('number')
    })
  })
})