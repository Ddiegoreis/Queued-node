import { Request, Response } from 'express'
import Queue from '../lib/Queue'

import CreateProductService from '../services/CreateProductService'
import DeleteProductService from '../services/DeleteProductService'
import ListAllProductService from '../services/ListAllProductService'
import ListExpiringProductService from '../services/ListExpiringProductService'
import UpdateProductService from '../services/UpdateProductService'

class ProductsController {
	async create(request: Request, response: Response) {
		const { nome, vencimento, quantidade } = request.body

		const product = await CreateProductService.execute({
			nome,
			vencimento,
			quantidade,
		})

		return response.json(product)
	}

	async index(request: Request, response: Response) {
		const products = await ListAllProductService.execute()

		return response.json(products)
	}

	async update(request: Request, response: Response) {
		const { id } = request.params
		const { nome, vencimento, quantidade } = request.body

		const product = await UpdateProductService.execute({
			id,
			nome,
			vencimento,
			quantidade,
		})

		response.json(product)
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params

		const product = await DeleteProductService.execute({
			id,
		})

		response.json(product)
	}

	async LlistExpiringProduct(request: Request, response: Response) {
		const products = await ListExpiringProductService.execute()

		await Queue.add('ExpirationMail', { products })

		return response.json(products)
	}
}

export default new ProductsController()
