import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Product } from './product.model';
import { Option } from './option.model';

@Table({
    timestamps: false,
    tableName: 'product_option'
  })
export class ProductOption extends Model{
    @ForeignKey(() => Product)
    @Column({
      type: DataType.INTEGER
    })
    productId: number;

    @ForeignKey(() => Option)
    @Column({
      type: DataType.INTEGER
    })
    optionId: number;

}