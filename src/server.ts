import express , { Application , Request , Response , NextFunction } from 'express';
import path from 'path';

const app = express();

const add = ( a: number , b: number ) => a + b;

app.get( '/' , ( req: Request , res: Response , next : NextFunction ) => {
    res.status( 200 ).send('hey');
});

app.listen( 5000 , ( ) => console.log('serer started'));
