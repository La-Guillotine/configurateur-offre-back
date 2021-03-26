import { ProductController } from "../controllers/product.controller";
import * as express from "express";
import { OptionController } from "../controllers/option.controller";
import { ShoppingcardController } from "../controllers/shoppingcard.controller";
import { OrderController } from "../controllers/order.controller";

export class Routes {
    public app: express.Application;
    public productController: ProductController = new ProductController();
    public optionController: OptionController = new OptionController();
    public shoppingcardController: ShoppingcardController = new ShoppingcardController();
    public orderController: OrderController = new OrderController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res) => {
                res.send("Bonjour et bienvenue sur notre configurateur d'offre")
            })
        
        // Produits
        app.route('/products')
            .get(this.productController.getProducts)
        app.route('/products/:id')
            .get(this.productController.getProduct)

        // Options
        app.route('/options')
            .get(this.optionController.getOptions)
        app.route('/options/:id')
            .get(this.optionController.getOption)

        // Paniers
        app.route('/shoppingcards')
            .get(this.shoppingcardController.getShoppingcards)
            .post(this.shoppingcardController.addShoppingcard)
        app.route('/shoppingcards/:id')
            .get(this.shoppingcardController.getShoppingcard)

        // Commande
        app.route('/orders')
            .get(this.orderController.getOrders)
            .post(this.orderController.addOrder)
        app.route('/orders/:shoppingcardId')
            .get(this.orderController.getOrder)
    }

}