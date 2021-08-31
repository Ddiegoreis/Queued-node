import { createConnection } from 'typeorm'

createConnection().then(() =>
	console.log('Conexão com o banco realizada com sucesso.')
)
