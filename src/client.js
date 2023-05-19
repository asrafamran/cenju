// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { shippingClient } from './services/shipping/shipping.shared.js'

import { homeClient } from './services/home/home.shared.js'

import { promotionsClient } from './services/promotions/promotions.shared.js'

import { cartClient } from './services/cart/cart.shared.js'

import { reviewsClient } from './services/reviews/reviews.shared.js'

import { inventoryClient } from './services/inventory/inventory.shared.js'

import { transactionsClient } from './services/transactions/transactions.shared.js'

import { ordersClient } from './services/orders/orders.shared.js'

import { productsClient } from './services/products/products.shared.js'

import { userClient } from './services/users/users.shared.js'

/**
 * Returns a  client for the cenju app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = (connection, authenticationOptions = {}) => {
  const client = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(userClient)

  client.configure(productsClient)

  client.configure(ordersClient)

  client.configure(transactionsClient)

  client.configure(inventoryClient)

  client.configure(reviewsClient)

  client.configure(cartClient)

  client.configure(promotionsClient)

  client.configure(homeClient)

  client.configure(shippingClient)

  return client
}
