export const ordersPath = 'orders'

export const ordersMethods = ['find', 'get', 'create', 'patch', 'remove']

export const ordersClient = (client) => {
  const connection = client.get('connection')

  client.use(ordersPath, connection.service(ordersPath), {
    methods: ordersMethods
  })
}
