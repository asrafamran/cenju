export const homePath = 'home'

export const homeMethods = ['find', 'get', 'create', 'patch', 'remove']

export const homeClient = (client) => {
  const connection = client.get('connection')

  client.use(homePath, connection.service(homePath), {
    methods: homeMethods
  })
}
