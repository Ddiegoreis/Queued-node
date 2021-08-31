import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('products')
class Product {
	@PrimaryGeneratedColumn()
	id: string

	@Column()
	nome: string

	@Column()
	vencimento: Date

	@Column()
	quantidade: number

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}

export default Product
