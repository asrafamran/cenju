// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const reviewsSchema = {
  $id: 'Reviews',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'productId', 'customerId', 'rating', 'comment'],
  properties: {
    _id: ObjectIdSchema(),
    productId: ObjectIdSchema(),
    customerId: ObjectIdSchema(),
    rating: { type: 'number' },
    comment: { type: 'string' }
  }
};
export const reviewsValidator = getValidator(reviewsSchema, dataValidator)
export const reviewsResolver = resolve({})

export const reviewsExternalResolver = resolve({})

// Schema for creating new data
export const reviewsDataSchema = {
  $id: 'ReviewsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...reviewsSchema.properties
  }
}
export const reviewsDataValidator = getValidator(reviewsDataSchema, dataValidator)
export const reviewsDataResolver = resolve({})

// Schema for updating existing data
export const reviewsPatchSchema = {
  $id: 'ReviewsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...reviewsSchema.properties
  }
}
export const reviewsPatchValidator = getValidator(reviewsPatchSchema, dataValidator)
export const reviewsPatchResolver = resolve({})

// Schema for allowed query properties
export const reviewsQuerySchema = {
  $id: 'ReviewsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(reviewsSchema.properties)
  }
}
export const reviewsQueryValidator = getValidator(reviewsQuerySchema, queryValidator)
export const reviewsQueryResolver = resolve({})
