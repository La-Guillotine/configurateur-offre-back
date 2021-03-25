import { Table, Column, Model, HasMany, PrimaryKey, DataType, BelongsToMany, AutoIncrement } from 'sequelize-typescript';
import { ProductOption } from './product_option.model';
import { Option } from './option.model';

@Table({
    timestamps: false
  })
export class Product extends Model{
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
        type: DataType.TEXT
    })
    description: string;

    @Column({
        type: DataType.DECIMAL(5,2)
    })
    price: number

    @BelongsToMany(() => Option, () => ProductOption)
    options: Option[]

}