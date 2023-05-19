// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  promotionsDataValidator,
  promotionsPatchValidator,
  promotionsQueryValidator,
  promotionsResolver,
  promotionsExternalResolver,
  promotionsDataResolver,
  promotionsPatchResolver,
  promotionsQueryResolver
} from './promotions.schema.js'
import { PromotionsService, getOptions } from './promotions.class.js'
import { promotionsPath, promotionsMethods } from './promotions.shared.js'

export * from './promotions.class.js'
export * from './promotions.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const promotions = (app) => {
  // Register our service on the Feathers application
  app.use(promotionsPath, new PromotionsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: promotionsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(promotionsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(promotionsExternalResolver),
        schemaHooks.resolveResult(promotionsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(promotionsQueryValidator),
        schemaHooks.resolveQuery(promotionsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(promotionsDataValidator),
        schemaHooks.resolveData(promotionsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(promotionsPatchValidator),
        schemaHooks.resolveData(promotionsPatchResolver)
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
