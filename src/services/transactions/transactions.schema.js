// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const transactionsSchema = {
  $id: 'Transactions',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' }
  }
}
export const transactionsValidator = getValidator(transactionsSchema, dataValidator)
export const transactionsResolver = resolve({})

export const transactionsExternalResolver = resolve({})

// Schema for creating new data
export const transactionsDataSchema = {
  $id: 'TransactionsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...transactionsSchema.properties
  }
}
export const transactionsDataValidator = getValidator(transactionsDataSchema, dataValidator)
export const transactionsDataResolver = resolve({})

// Schema for updating existing data
export const transactionsPatchSchema = {
  $id: 'TransactionsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...transactionsSchema.properties
  }
}
export const transactionsPatchValidator = getValidator(transactionsPatchSchema, dataValidator)
export const transactionsPatchResolver = resolve({})

// Schema for allowed query properties
export const transactionsQuerySchema = {
  $id: 'TransactionsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(transactionsSchema.properties)
  }
}
export const transactionsQueryValidator = getValidator(transactionsQuerySchema, queryValidator)
export const transactionsQueryResolver = resolve({})
