// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const inventorySchema = {
  $id: 'Inventory',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'productId', 'quantity'],
  properties: {
    _id: ObjectIdSchema(),
    productId: ObjectIdSchema(),
    quantity: { type: 'number' }
  }
};
export const inventoryValidator = getValidator(inventorySchema, dataValidator)
export const inventoryResolver = resolve({})

export const inventoryExternalResolver = resolve({})

// Schema for creating new data
export const inventoryDataSchema = {
  $id: 'InventoryData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...inventorySchema.properties
  }
}
export const inventoryDataValidator = getValidator(inventoryDataSchema, dataValidator)
export const inventoryDataResolver = resolve({})

// Schema for updating existing data
export const inventoryPatchSchema = {
  $id: 'InventoryPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...inventorySchema.properties
  }
}
export const inventoryPatchValidator = getValidator(inventoryPatchSchema, dataValidator)
export const inventoryPatchResolver = resolve({})

// Schema for allowed query properties
export const inventoryQuerySchema = {
  $id: 'InventoryQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(inventorySchema.properties)
  }
}
export const inventoryQueryValidator = getValidator(inventoryQuerySchema, queryValidator)
export const inventoryQueryResolver = resolve({})
