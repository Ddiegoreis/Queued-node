import { getCustomRepository } from 'typeorm'

import ProductRepository from '../repositories/ProductRepository'

interface IProduct {
	nome: string
	vencimento: Date
	quantidade: number
}

class CreateProductService {
	async execute({ nome, vencimento, quantidade }: IProduct) {
		const productsRepository = getCustomRepository(ProductRepository)

		if (!nome) throw new Error('O nome não pode ser vazio')

		if (!vencimento) throw new Error('O vencimento não pode ser vazio')

		const product = productsRepository.create({
			nome,
			vencimento,
			quantidade,
		})

		await productsRepository.save(product)

		return product
	}
}

export default new CreateProductService()
