import { Request, Response, Router } from 'express';
import { Task } from '../schema/Task.schema';

const taskRouter = Router();

taskRouter.post('/newTask', async (req: Request, res: Response) => {
    const { title } = req.body;
    try{
        const newTask = await Task.create({title});

        return res.status(201).json({newTask});
    }
    catch(err){
        return res.status(400).json({error: err});
    }
});

taskRouter.get('/all', async (req: Request, res: Response) => {
    try{
        const tasks = await Task.find();

        return res.status(200).json({tasks});
    }
    catch(err){
        return res.status(400).json({error: err});
    }
})

export { taskRouter };  