import { getCustomRepository } from 'typeorm'

import ProductRepository from '../repositories/ProductRepository'

class ListExpiringProductService {
	async execute() {
		const productsRepository = getCustomRepository(ProductRepository)

		const products = await productsRepository.query(
			`select * ` +
				`from products ` +
				`where ` +
				`DATE_PART('day', vencimento::timestamp - now()::timestamp) <= 7`
		)

		return products
	}
}

export default new ListExpiringProductService()
