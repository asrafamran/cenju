export const promotionsPath = 'promotions'

export const promotionsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const promotionsClient = (client) => {
  const connection = client.get('connection')

  client.use(promotionsPath, connection.service(promotionsPath), {
    methods: promotionsMethods
  })
}
