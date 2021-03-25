import { ProductController } from "../controllers/product.controller";
import * as express from "express";

export class Routes {
    public app: express.Application;
    public productController: ProductController = new ProductController();

    public routes(app): void {
        app.route('/products')
            .get(this.productController.getProducts)
    }

}