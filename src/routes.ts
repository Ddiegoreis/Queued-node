import { Router } from 'express'

import ProductsController from './app/controllers/ProductsController'

const routes = Router()

routes.get('/products', ProductsController.index)
routes.get('/products/expiring', ProductsController.LlistExpiringProduct)
routes.post('/products', ProductsController.create)
routes.put('/products/:id', ProductsController.update)
routes.delete('/products/:id', ProductsController.delete)

export default routes
