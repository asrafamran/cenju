// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const ordersSchema = {
  $id: 'Orders',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'customerId', 'items', 'status'],
  properties: {
    _id: ObjectIdSchema(),
    customerId: ObjectIdSchema(),
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          productId: ObjectIdSchema(),
          quantity: { type: 'number' },
          price: { type: 'number' },
          discount: { type: 'number' }
        },
        required: ['productId', 'quantity', 'price']
      }
    },
    status: { type: 'string' },
    shippingAddressId: ObjectIdSchema(),
    paymentMethod: { type: 'string' },
    transactionId: { type: 'string' }
  }
};
export const ordersValidator = getValidator(ordersSchema, dataValidator)
export const ordersResolver = resolve({})

export const ordersExternalResolver = resolve({})

// Schema for creating new data
export const ordersDataSchema = {
  $id: 'OrdersData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...ordersSchema.properties
  }
}
export const ordersDataValidator = getValidator(ordersDataSchema, dataValidator)
export const ordersDataResolver = resolve({})

// Schema for updating existing data
export const ordersPatchSchema = {
  $id: 'OrdersPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...ordersSchema.properties
  }
}
export const ordersPatchValidator = getValidator(ordersPatchSchema, dataValidator)
export const ordersPatchResolver = resolve({})

// Schema for allowed query properties
export const ordersQuerySchema = {
  $id: 'OrdersQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(ordersSchema.properties)
  }
}
export const ordersQueryValidator = getValidator(ordersQuerySchema, queryValidator)
export const ordersQueryResolver = resolve({})
