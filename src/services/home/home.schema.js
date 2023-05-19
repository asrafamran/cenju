// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const homeSchema = {
  $id: 'Home',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' }
  }
}
export const homeValidator = getValidator(homeSchema, dataValidator)
export const homeResolver = resolve({})

export const homeExternalResolver = resolve({})

// Schema for creating new data
export const homeDataSchema = {
  $id: 'HomeData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...homeSchema.properties
  }
}
export const homeDataValidator = getValidator(homeDataSchema, dataValidator)
export const homeDataResolver = resolve({})

// Schema for updating existing data
export const homePatchSchema = {
  $id: 'HomePatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...homeSchema.properties
  }
}
export const homePatchValidator = getValidator(homePatchSchema, dataValidator)
export const homePatchResolver = resolve({})

// Schema for allowed query properties
export const homeQuerySchema = {
  $id: 'HomeQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(homeSchema.properties)
  }
}
export const homeQueryValidator = getValidator(homeQuerySchema, queryValidator)
export const homeQueryResolver = resolve({})
