import { Table, Column, Model, HasMany, PrimaryKey, DataType, BelongsToMany } from 'sequelize-typescript';
import { Product } from './product.model';
import { ProductOption } from './product_option.model';

@Table({
    timestamps: false,
    tableName: 'option'
  })
export class Option extends Model{
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true
    })
    id : number;

    @Column({
        type: DataType.STRING(60)
    })
    name: string;

    @Column({
        type: DataType.DECIMAL(5,2)
    })
    price: number

    @BelongsToMany(() => Product, () => ProductOption)
    products: Product[]
}