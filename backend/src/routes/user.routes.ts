import { Request, Response, Router } from 'express';
import { User } from '../schema/User.schema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {secret} from '../config/auth.json';


const userRouter = Router();

userRouter.get('/users', async (req: Request, res:Response): Promise<Response> => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    }
    catch(err){
        return res.status(500).json({msg: "Internal server error"});
    }
});

userRouter.post('/register', async (req: Request, res: Response): Promise<Response> => {
    const {email, name, password} = req.body
    try {
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({error: "User already exists with this email address"});
        }
        await User.create({email, name, password});        

        return res.status(201).json({msg: "User created successfully"});
    }
    catch (err) {
        return res.status(500).json({msg: "Internal server error"});
    }
});

userRouter.post('/login', async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try{
        if(!email){
            return res.status(400).json({error: "Email not provided"});
        }
        if(!password){
            return res.status(400).json({error: "Password not provided"});
        }

        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.status(400).json({error: "User doesn't exists"});
        }

        const isMatch: boolean = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token:string = jwt.sign({_id: user._id, email: user.email}, secret);
            user.password = "";
            return res.status(200).header('authorization', token).json({token: token, user: user});
        }
        return res.status(403).json({error: "Wrong password"});
    }
    catch (err){
        return res.status(500).json({error: err});
    }
});

export { userRouter }