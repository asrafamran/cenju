import { shipping } from './shipping/shipping.js'

import { home } from './home/home.js'

import { promotions } from './promotions/promotions.js'

import { cart } from './cart/cart.js'

import { reviews } from './reviews/reviews.js'

import { inventory } from './inventory/inventory.js'

import { transactions } from './transactions/transactions.js'

import { orders } from './orders/orders.js'

import { products } from './products/products.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(shipping)

  app.configure(home)

  app.configure(promotions)

  app.configure(cart)

  app.configure(reviews)

  app.configure(inventory)

  app.configure(transactions)

  app.configure(orders)

  app.configure(products)

  app.configure(user)

  // All services will be registered here
}
