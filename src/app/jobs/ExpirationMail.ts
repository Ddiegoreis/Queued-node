import Mail from '../lib/Mail'

export default {
	key: 'ExpirationMail',
	async handle({ data }) {
		const { products } = data

		const html =
			`<h3>Os seguintes produtos irão vencer dentro de 7 dias: </h3>` +
			products.map(
				(product) => ` <p>${product.nome} - ${product.vencimento}</p> `
			) +
			`<p>Consulte o sistema para obter mais informações</p>`

		await Mail.sendMail({
			from: 'Produtos em Vencimento <queue@queuetest.com.br>',
			to: `Admin <admin@queuetest.com.br>`,
			subject: 'Produtos em Vencimento',
			html,
		})
	},
}
