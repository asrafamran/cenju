// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  inventoryDataValidator,
  inventoryPatchValidator,
  inventoryQueryValidator,
  inventoryResolver,
  inventoryExternalResolver,
  inventoryDataResolver,
  inventoryPatchResolver,
  inventoryQueryResolver
} from './inventory.schema.js'
import { InventoryService, getOptions } from './inventory.class.js'
import { inventoryPath, inventoryMethods } from './inventory.shared.js'

export * from './inventory.class.js'
export * from './inventory.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const inventory = (app) => {
  // Register our service on the Feathers application
  app.use(inventoryPath, new InventoryService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: inventoryMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(inventoryPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(inventoryExternalResolver),
        schemaHooks.resolveResult(inventoryResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(inventoryQueryValidator),
        schemaHooks.resolveQuery(inventoryQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(inventoryDataValidator),
        schemaHooks.resolveData(inventoryDataResolver)
      ],
      patch: [
        schemaHooks.validateData(inventoryPatchValidator),
        schemaHooks.resolveData(inventoryPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
