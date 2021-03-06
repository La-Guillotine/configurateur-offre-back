// lib/app.ts
import * as express from "express";
// import * as bodyParser from "body-parser";
import * as cors from 'cors';
import { Routes } from "./config/routes";
import { database } from "./config/database";
import { connected } from "process";
// import * as swaggerUi from 'swagger-ui-express'
// import * as swaggerDocument from '../swagger.js'
// import { checkTokenMiddleware } from "./config/auth"


require('dotenv').config()

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(cors())                                 // Activation de CORS
        this.app.use(express.json())                         // Activation du raw (json)
        this.app.use(express.urlencoded({ extended: true })) // Activation de x-wwww-form-urlencoded
        // this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //Swagger
        //this.app.use(checkTokenMiddleware);                  // Middleware verifiant le token

        this.app.listen(process.env.PORT, () => {
            console.log("Fonctionne sur le port "+process.env.PORT)
        })

        database.authenticate()
        .then(() => console.log('Succesfuly connected to db.'))
        .then(() => console.log(database.models))
    }
}

export default new App().app;