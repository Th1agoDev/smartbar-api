import { Request,Response } from "express";
import { ExhibitionUserService } from "../../services/user/ExhibitionUserService";

class ExhibitionuserController{
    async handle(req:Request, res:Response) {
        
        const user_id = req.user_id;
      
        const exhibitionUserService = new ExhibitionUserService();

        const user = await exhibitionUserService.execute(user_id);

        return res.json(user);
        
    }
}

export { ExhibitionuserController}