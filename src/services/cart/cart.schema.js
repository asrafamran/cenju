// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const cartSchema = {
  $id: 'Cart',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'customerId', 'items'],
  properties: {
    _id: ObjectIdSchema(),
    customerId: ObjectIdSchema(),
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          productId: ObjectIdSchema(),
          quantity: { type: 'number' }
        },
        required: ['productId', 'quantity']
      }
    }
  }
};
export const cartValidator = getValidator(cartSchema, dataValidator)
export const cartResolver = resolve({})

export const cartExternalResolver = resolve({})

// Schema for creating new data
export const cartDataSchema = {
  $id: 'CartData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...cartSchema.properties
  }
}
export const cartDataValidator = getValidator(cartDataSchema, dataValidator)
export const cartDataResolver = resolve({})

// Schema for updating existing data
export const cartPatchSchema = {
  $id: 'CartPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...cartSchema.properties
  }
}
export const cartPatchValidator = getValidator(cartPatchSchema, dataValidator)
export const cartPatchResolver = resolve({})

// Schema for allowed query properties
export const cartQuerySchema = {
  $id: 'CartQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(cartSchema.properties)
  }
}
export const cartQueryValidator = getValidator(cartQuerySchema, queryValidator)
export const cartQueryResolver = resolve({})
