import { Router , Application , Request , Response , NextFunction } from 'express';
import { asyncHandler } from '../../../utils/asyncHandler';


// / service / scraper / 

const feature_api = Router();

feature_api.get( '/' , asyncHandler ( async ( req: Request , res: Response  ) => {
    res.status(201).send('/ service / example / ');
}));


export default feature_api;