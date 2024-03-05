import { Request,Response } from "express";
import { ExhibitionUserService } from "../../services/user/ExhibitionUserService";

class ExhibitionuserController{
    async handle(req:Request, res:Response) {
        
        const exhibitionUserService = new ExhibitionUserService();

        const user = await exhibitionUserService.execute();

        return res.json(user);
        
    }
}

export { ExhibitionuserController}