export const shippingPath = 'shipping'

export const shippingMethods = ['find', 'get', 'create', 'patch', 'remove']

export const shippingClient = (client) => {
  const connection = client.get('connection')

  client.use(shippingPath, connection.service(shippingPath), {
    methods: shippingMethods
  })
}
