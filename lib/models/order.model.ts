import { Table, Column, Model, HasMany, PrimaryKey, DataType, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { ProductOption } from './product_option.model';
import { Option } from './option.model';
import { Product } from './product.model';
import { ShoppingCard } from './shoppingcard.model';

@Table({
    timestamps: false
  })
export class Order extends Model{
    @ForeignKey(() => Product)
    @Column({
      type: DataType.INTEGER
    })
    productId : number;

    @ForeignKey(() => Option)
    @Column({
      type: DataType.INTEGER
    })
    optionId : number;

    @ForeignKey(() => ShoppingCard)
    @Column({
      type: DataType.INTEGER
    })
    shoppingcardId : number;

}