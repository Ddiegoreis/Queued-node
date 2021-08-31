import { getCustomRepository } from 'typeorm'

import ProductRepository from '../repositories/ProductRepository'

interface IDeleteProduct {
	id: string
}

class DeleteProductService {
	async execute({ id }: IDeleteProduct) {
		const productsRepository = getCustomRepository(ProductRepository)

		const productExists = await productsRepository.findOne({ id })

		if (!productExists) throw new Error('O produto informado não existe')

		await productsRepository.delete({ id })

		return { message: 'Client deleted.' }
	}
}

export default new DeleteProductService()
