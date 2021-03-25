import { Request, Response } from "express";
import { Product } from "../models/product.model";


export class ProductController {

    public async getProducts (req: Request, res: Response) {

        Product.findAll<Product>()
            .then((products: Array<Product>) => res.json(products))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    // public getProduct (req: Request, res: Response) {
    //     Product.findOne({ 
    //         where: { id: req.params.id }
    //      })
    //         .then((product: Product) => res.json(product))
    //         .catch((err: Error) => res.status(500).json(err))
    //     ;
    // }

    // public addProduct (req: Request, res: Response) {
    //     Product.create({ name: req.body.name,brand: req.body.brand })
    //         .then((product: Product) => res.json(product))
    //         .catch((err: Error) => res.status(500).json(err))
    //     ;
    // }

    // public removeProduct (req: Request, res: Response) {
    //     Product.destroy({ where: { id: req.params.id } })
    //         .then((value: number) => res.json(value))
    //         .catch((err: Error) => res.status(500).json(err))
    //     ;
    // }

    // public updateProduct (req: Request, res: Response) {
    //     Product.update({name: req.body.name, brand: req.body.brand},{ where: { id: req.params.id } })
    //         .then(([number,products]: [number,Array<Product>]) => res.json({number,products}))
    //         .catch((err: Error) => res.status(500).json(err))
    //     ;
    // }

    // public updateOrCreateProduct (req: Request, res: Response) {
    //     Product.upsert({id:req.params.id,name: req.body.name, brand: req.body.brand},{ returning:true})
    //         .then(([product,created]: [Product,boolean]) => res.json({product,created}))
    //         .catch((err: Error) => res.status(500).json(err))
    //     ;
    // }

}