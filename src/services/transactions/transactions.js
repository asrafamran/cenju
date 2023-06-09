// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  transactionsDataValidator,
  transactionsPatchValidator,
  transactionsQueryValidator,
  transactionsResolver,
  transactionsExternalResolver,
  transactionsDataResolver,
  transactionsPatchResolver,
  transactionsQueryResolver
} from './transactions.schema.js'
import { TransactionsService, getOptions } from './transactions.class.js'
import { transactionsPath, transactionsMethods } from './transactions.shared.js'

export * from './transactions.class.js'
export * from './transactions.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const transactions = (app) => {
  // Register our service on the Feathers application
  app.use(transactionsPath, new TransactionsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: transactionsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(transactionsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(transactionsExternalResolver),
        schemaHooks.resolveResult(transactionsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(transactionsQueryValidator),
        schemaHooks.resolveQuery(transactionsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(transactionsDataValidator),
        schemaHooks.resolveData(transactionsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(transactionsPatchValidator),
        schemaHooks.resolveData(transactionsPatchResolver)
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
