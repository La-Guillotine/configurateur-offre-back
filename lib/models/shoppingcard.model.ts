import { Table, Column, Model, HasMany, PrimaryKey, DataType, BelongsToMany } from 'sequelize-typescript';
import { Order } from './order.model';

@Table({
    timestamps: false,
    tableName: 'shoppingcard'
  })
export class ShoppingCard extends Model{
    @PrimaryKey
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true
  })
    id : number;

    @HasMany(() => Order)
    orders: Order[]

}