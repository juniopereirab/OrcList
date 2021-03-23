import { Request, response, Response, Router } from 'express';
import { User } from '../schema/User.schema';

const userRouter = Router();

userRouter.get('/users', async (req: Request, res:Response) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    }
    catch(err){
        return res.status(500).json({msg: "Internal server error"});
    }
});

userRouter.post('/newUser', async (req: Request, res: Response) => {
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

export { userRouter }