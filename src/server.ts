/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express , { Application , Request , Response , NextFunction } from 'express';  
import 'express-async-errors';
import { errorHandler } from './utils/errorHandler';
import { asyncHandler } from './utils/asyncHandler';

const app = express();
const port = process.env._PORT || 5000 ;
const server = require('http').createServer( app );

app.use( express.urlencoded({ extended: true }));
app.use( express.json());

const getUserFromDb = () => {
    console.log('called getuser0');
    return new Promise(() => {
      throw new Error('This is an error');
    });
};

const getUserFromDb1 = async () => {
    console.log('called getuser1');
    return new Promise((resolve, reject) => {
        resolve('data1');
    });
};

const getUserFromDb2 = async () => {
    console.log('called getuser2');
    return new Promise((_, reject) => {
        reject('This is an error from fetching data from a model');
    });
};

const getUserFromDb3 = async () => {
    try {
        const data1 = await getUserFromDb1();
        const data3 = await getUserFromDb2();
        const data2 = await getUserFromDb1();
        return [ data1 , data2 ];
    } 
    catch ( err ) {
        throw new Error( err );
    }
}
 

app.get( '/' , asyncHandler ( async ( req: Request , res: Response , next: NextFunction ) => {
    const data = await getUserFromDb();
    res.status(201).json({ user: data });
}))

 
app.get( '/data' , async ( req: Request , res: Response , next: NextFunction ) => {
    const data = await getUserFromDb3();
    res.status(201).json({ user: data });
});


errorHandler( app );


server.listen( port, ( ) => {
    console.log(`service running on ${ port }`);
});