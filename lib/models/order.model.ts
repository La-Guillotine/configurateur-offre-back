import { Table, Column, Model, HasMany, PrimaryKey, DataType, BelongsToMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Option } from './option.model';
import { Product } from './product.model';
import { ShoppingCard } from './shoppingcard.model';

@Table({
    timestamps: false,
    tableName: 'order'
  })
export class Order extends Model{

    @PrimaryKey
    @ForeignKey(() => ShoppingCard)
    @Column({
      type: DataType.INTEGER
    })
    shoppingcardId : number;

    @BelongsTo(() => ShoppingCard)
    shoppingcard: ShoppingCard
    
    @PrimaryKey
    @ForeignKey(() => Product)
    @Column({
      type: DataType.INTEGER
    })
    productId : number;

    @BelongsTo(() => Product)
    product: Product

    @PrimaryKey
    @ForeignKey(() => Option)
    @Column({
      type: DataType.INTEGER
    })
    optionId : number;

    @BelongsTo(() => Option)
    option: Option

}