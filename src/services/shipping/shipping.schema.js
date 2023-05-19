// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const shippingSchema = {
  $id: 'ShippingAddress',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'customerId', 'address', 'city', 'country'],
  properties: {
    _id: ObjectIdSchema(),
    customerId: ObjectIdSchema(),
    address: { type: 'string' },
    city: { type: 'string' },
    country: { type: 'string' }
  }
};
export const shippingValidator = getValidator(shippingSchema, dataValidator)
export const shippingResolver = resolve({})

export const shippingExternalResolver = resolve({})

// Schema for creating new data
export const shippingDataSchema = {
  $id: 'ShippingData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...shippingSchema.properties
  }
}
export const shippingDataValidator = getValidator(shippingDataSchema, dataValidator)
export const shippingDataResolver = resolve({})

// Schema for updating existing data
export const shippingPatchSchema = {
  $id: 'ShippingPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...shippingSchema.properties
  }
}
export const shippingPatchValidator = getValidator(shippingPatchSchema, dataValidator)
export const shippingPatchResolver = resolve({})

// Schema for allowed query properties
export const shippingQuerySchema = {
  $id: 'ShippingQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(shippingSchema.properties)
  }
}
export const shippingQueryValidator = getValidator(shippingQuerySchema, queryValidator)
export const shippingQueryResolver = resolve({})
