import { getCustomRepository } from 'typeorm'

import Product from '../models/Product'
import ProductRepository from '../repositories/ProductRepository'

interface IUpdateProduct {
	id: string
	nome: string
	vencimento: Date
	quantidade: number
}

class UpdateProductService {
	async execute({ id, nome, vencimento, quantidade }: IUpdateProduct) {
		const productsRepository = getCustomRepository(ProductRepository)

		const productExists = await productsRepository.findOne({ id })

		if (!productExists) throw new Error('O produto informado não existe')

		const product = await productsRepository
			.createQueryBuilder()
			.update(Product)
			.set({ nome, vencimento, quantidade })
			.where('id = :id', { id })
			.execute()

		return product
	}
}

export default new UpdateProductService()
