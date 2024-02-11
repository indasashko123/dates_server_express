import { NextFunction, Response } from "express";
import { activationService } from "../../services";
import { mainConfig } from "../../../config";
import { ExtendRequest } from "../../../common";

export class ConfirmController {
    

    async confirmEmail(req : ExtendRequest, res : Response, next : NextFunction) {
        try {
            const activationValue = req.params.link;
            await activationService.confirmEmail({link : activationValue});
            return res.redirect(mainConfig.client.host);
        } catch(e) {
            next(e);    
        }
    }
}