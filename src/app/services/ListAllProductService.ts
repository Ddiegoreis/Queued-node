import { getCustomRepository } from 'typeorm'

import ProductRepository from '../repositories/ProductRepository'

class ListAllProductService {
	async execute() {
		const productsRepository = getCustomRepository(ProductRepository)

		const products = await productsRepository.find()

		return products
	}
}

export default new ListAllProductService()
