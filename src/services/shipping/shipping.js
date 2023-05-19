// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  shippingDataValidator,
  shippingPatchValidator,
  shippingQueryValidator,
  shippingResolver,
  shippingExternalResolver,
  shippingDataResolver,
  shippingPatchResolver,
  shippingQueryResolver
} from './shipping.schema.js'
import { ShippingService, getOptions } from './shipping.class.js'
import { shippingPath, shippingMethods } from './shipping.shared.js'

export * from './shipping.class.js'
export * from './shipping.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const shipping = (app) => {
  // Register our service on the Feathers application
  app.use(shippingPath, new ShippingService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: shippingMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(shippingPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(shippingExternalResolver),
        schemaHooks.resolveResult(shippingResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(shippingQueryValidator),
        schemaHooks.resolveQuery(shippingQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(shippingDataValidator),
        schemaHooks.resolveData(shippingDataResolver)
      ],
      patch: [
        schemaHooks.validateData(shippingPatchValidator),
        schemaHooks.resolveData(shippingPatchResolver)
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
