import { Request, Response } from "express";
import { Option } from "../models/option.model";

export class OptionController {
    public async getOptions(req: Request, res: Response){
        Option.findAll<Option>()
            .then((options: Array<Option>) => res.json(options))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getOption (req: Request, res: Response) {
        Option.findOne({ 
            where: { id: req.params.id }
         })
            .then((option: Option) => res.json(option))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }
}