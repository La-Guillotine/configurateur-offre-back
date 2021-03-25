import { Table, Column, Model, HasMany, PrimaryKey, DataType, BelongsToMany } from 'sequelize-typescript';
import { ProductOption } from './product_option.model';
import { Option } from './option.model';

@Table({
    timestamps: false
  })
export class ShoppingCard extends Model{
    @PrimaryKey
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true
  })
    id : number;

}