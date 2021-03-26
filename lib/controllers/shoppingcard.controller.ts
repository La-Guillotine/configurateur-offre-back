import { Request, Response } from "express";
import { ShoppingCard } from "../models/shoppingcard.model";

export class ShoppingcardController {
    public async getShoppingcards(req: Request, res: Response){
        ShoppingCard.findAll<ShoppingCard>()
            .then((shoppingcards: Array<ShoppingCard>) => res.json(shoppingcards))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getShoppingcard (req: Request, res: Response) {
        ShoppingCard.findOne({ 
            where: { id: req.params.id }
         })
            .then((shoppingcard: ShoppingCard) => res.json(shoppingcard))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addShoppingcard (req: Request, res: Response) {
        ShoppingCard.create()
            .then((shoppingCard: ShoppingCard) => res.json(shoppingCard))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }
}