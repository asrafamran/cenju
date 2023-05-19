export const inventoryPath = 'inventory'

export const inventoryMethods = ['find', 'get', 'create', 'patch', 'remove']

export const inventoryClient = (client) => {
  const connection = client.get('connection')

  client.use(inventoryPath, connection.service(inventoryPath), {
    methods: inventoryMethods
  })
}
