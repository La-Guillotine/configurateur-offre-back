import { Request, Response } from "express";
import { Order } from "../models/order.model";

export class OrderController {
    public async getOrders(req: Request, res: Response){
        Order.findAll<Order>({
            include:[
                Order.associations.product,
                Order.associations.option
            ]
        })
            .then((orders: Array<Order>) => res.json(orders))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getOrder (req: Request, res: Response) {
        Order.findAll({ 
            where: { shoppingcardId: req.params.shoppingcardId },
            include:[
                Order.associations.product,
                Order.associations.option
            ]
         })
            .then((orders: Order[]) => res.json(orders))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addOrder (req: Request, res: Response) {
        Order.create({
            shoppingcardId: req.body.shoppingcardId,
            productId: req.body.productId,
            optionId: req.body.optionId,
         })
            .then((order: Order) => res.json(order))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }
}