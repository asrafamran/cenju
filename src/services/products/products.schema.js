// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const productsSchema = {
  $id: 'Products',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' }
  }
}
export const productsValidator = getValidator(productsSchema, dataValidator)
export const productsResolver = resolve({})

export const productsExternalResolver = resolve({})

// Schema for creating new data
export const productsDataSchema = {
  $id: 'ProductsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...productsSchema.properties
  }
}
export const productsDataValidator = getValidator(productsDataSchema, dataValidator)
export const productsDataResolver = resolve({})

// Schema for updating existing data
export const productsPatchSchema = {
  $id: 'ProductsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...productsSchema.properties
  }
}
export const productsPatchValidator = getValidator(productsPatchSchema, dataValidator)
export const productsPatchResolver = resolve({})

// Schema for allowed query properties
export const productsQuerySchema = {
  $id: 'ProductsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(productsSchema.properties)
  }
}
export const productsQueryValidator = getValidator(productsQuerySchema, queryValidator)
export const productsQueryResolver = resolve({})
