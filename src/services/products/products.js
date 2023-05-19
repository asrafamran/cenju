// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  productsDataValidator,
  productsPatchValidator,
  productsQueryValidator,
  productsResolver,
  productsExternalResolver,
  productsDataResolver,
  productsPatchResolver,
  productsQueryResolver
} from './products.schema.js'
import base64ImageConverter from '../../hooks/base-64-image-converter.cjs'
import { ProductsService, getOptions } from './products.class.js'
import { productsPath, productsMethods } from './products.shared.js'

export * from './products.class.js'
export * from './products.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const products = (app) => {
  // Register our service on the Feathers application
  app.use(productsPath, new ProductsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: productsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(productsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(productsExternalResolver),
        schemaHooks.resolveResult(productsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(productsQueryValidator),
        schemaHooks.resolveQuery(productsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(productsDataValidator),
        schemaHooks.resolveData(productsDataResolver),
        async (context) => {
          const image = context.data.image

          if (image) {
            // Convert the image to Base64
            const base64Image = await base64ImageConverter(image)

            // Set the image property to the Base64 image string
            context.data.image = base64Image
          }
        }
      ],
      patch: [
        schemaHooks.validateData(productsPatchValidator),
        schemaHooks.resolveData(productsPatchResolver),
        async (context) => {
          const imagePath = context.data.image // Assuming `image` property represents the image file path

          if (imagePath) {
            // Convert the image to Base64
            const base64Image = await base64ImageConverter(imagePath)

            // Set the image property to the Base64 image string
            context.data.image = base64Image
          }
        }
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
