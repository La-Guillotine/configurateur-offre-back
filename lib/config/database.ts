// lib/config/database.ts
import { Option } from "../models/option.model";
import { Order } from "../models/order.model";
import { ProductOption } from "../models/product_option.model";
import { ShoppingCard } from "../models/shoppingcard.model";
import { Sequelize } from "sequelize-typescript";
import { Product } from '../models/product.model';
require('dotenv').config()

export const database = new Sequelize({
    models:[Product, Option, ShoppingCard, ProductOption, Order],
    database :process.env.DB_DATABASE,
    username:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });