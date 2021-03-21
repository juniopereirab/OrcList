import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';

import User from '../schemas/User';

const userRoutes = Router();

userRoutes.get('/oi', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({msg: "Deu certo"});
});

userRoutes.get('/users/all', async (_, res: Response): Promise<Response> => {
    try {
        const users = await User.find();
        return res.status(200).send({users});
    } catch (error) {
        return res.status(500).send({msg: "Internal server error"});
    }
});

userRoutes.get('/users/:id', async (req: Request, res: Response): Promise <Response> => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).send({msg: "User not found"});
        }
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({msg: "Internal server error"});
    }
});

userRoutes.post('/register', async (req: Request, res: Response): Promise <Response> => {
    const { email, name, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).send({msg: `The email ${user.email} is already in use`});
        }
        await User.create({
            email,
            name,
            password
        });

        return res.status(200).send({msg: "User created successfully"});
    } catch (error) {
        return res.status(500).send({msg: "Error while creating user"});
    }
});

userRoutes.post('/login', async (req: Request, res: Response): Promise <Response> => {
    const {email, password} = req.body;
    try{
        if(!email){
            return res.status(400).send({msg: "Email is necessary"});
        }
        if(!password){
            return res.status(400).send({msg: "Password is necessary"});
        }

        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).send({msg: "User not found"});
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch){
            const token: string = jwt.sign({
                id: user._id, 
                email: user.email
            },
            process.env.SECRET, {
                expiresIn: 86400
            });

            return res.status(200).header('authorization', token).send({user: user, token: token});
        }

        return res.status(403).send({msg: "Wrong password"});
    } catch (error) {
        return res.status(500).send({msg: "Internal server error"});
    }
})

userRoutes.delete('/users/:id', async (req: Request, res: Response): Promise <Response> => {
    const { id } = req.params;
    try{
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).send({msg: "User not found"});
        }
        return res.status(200).send({msg: "User deleted"});
    } catch (error) {
        return res.status(500).send({msg: "Internal server error"});
    }
});

export default userRoutes;