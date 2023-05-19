// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

export const promotionsSchema = {
  $id: 'Promotions',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'productId', 'discountType', 'value', 'expirationDate'],
  properties: {
    _id: ObjectIdSchema(),
    productId: ObjectIdSchema(),
    discountType: { type: 'string' },
    value: { type: 'number' },
    expirationDate: { type: 'string', format: 'date-time' }
  }
};
export const promotionsValidator = getValidator(promotionsSchema, dataValidator)
export const promotionsResolver = resolve({})

export const promotionsExternalResolver = resolve({})

// Schema for creating new data
export const promotionsDataSchema = {
  $id: 'PromotionsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...promotionsSchema.properties
  }
}
export const promotionsDataValidator = getValidator(promotionsDataSchema, dataValidator)
export const promotionsDataResolver = resolve({})

// Schema for updating existing data
export const promotionsPatchSchema = {
  $id: 'PromotionsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...promotionsSchema.properties
  }
}
export const promotionsPatchValidator = getValidator(promotionsPatchSchema, dataValidator)
export const promotionsPatchResolver = resolve({})

// Schema for allowed query properties
export const promotionsQuerySchema = {
  $id: 'PromotionsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(promotionsSchema.properties)
  }
}
export const promotionsQueryValidator = getValidator(promotionsQuerySchema, queryValidator)
export const promotionsQueryResolver = resolve({})
