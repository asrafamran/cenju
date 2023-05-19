export const cartPath = 'cart'

export const cartMethods = ['find', 'get', 'create', 'patch', 'remove']

export const cartClient = (client) => {
  const connection = client.get('connection')

  client.use(cartPath, connection.service(cartPath), {
    methods: cartMethods
  })
}
