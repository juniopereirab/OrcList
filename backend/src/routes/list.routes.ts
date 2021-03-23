import { Request, Response, Router } from 'express';
import { List } from '../schema/List.schema';
import { User } from '../schema/User.schema';
import { Task } from '../schema/Task.schema';

const listRouter = Router();

listRouter.get('/lists/:ownerId', async (req: Request, res: Response): Promise <Response> => {
    const {ownerId} = req.params;
    try{
        const lists = await List.find({owner: ownerId})
        .populate('tasks', ['title', 'description', 'done'], 'Task')
        .exec();
        
        return res.status(200).json(lists);
    }
    catch(err){
        return res.status(500).json({error: "Internal server error"});
    }
});

listRouter.post('/createList', async (req: Request, res: Response): Promise <Response> => {
    const { title, ownerId } = req.body;
    try {
        const user = await User.findOne({_id: ownerId});
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        await List.create({title, owner: ownerId});

        return res.status(200).json({msg: "List created successfully"});
    }
    catch (err) {
        return res.status(500).json({error: "Internal server error"});
    }
});

listRouter.patch('/addTask', async (req: Request, res: Response): Promise <Response> => {
    const {title, listId, ownerId} = req.body;
    try {
        const user = await User.findOne({_id: ownerId});
        if(!user){
            return res.status(400).json({error: "User does not exists"});
        }
        const list = await List.findOne({_id: listId});
        if(!list){
            return res.status(400).json({error: "List does not exists"});
        }

        const task = await Task.create({title});
        await List.findByIdAndUpdate(listId, { $push: {tasks: task._id}});
        
        return res.status(200).json({msg: "Task created successfully"});
    }
    catch (err) {
        return res.status(500).json({error: "Internal server error"});
    }
});

listRouter.patch('/completeTask/:taskId', async (req: Request, res: Response): Promise <Response> => {
    const {taskId} = req.params;
    try {
        const task = await Task.findOne({_id: taskId});
        if(!task){
            return res.status(400).json({error: "Task not found"});
        }

        await task.updateOne({done: true});
        
        return res.status(200).json({msg: "Task Completed. Well done!"});
    }
    catch (err) {
        return res.status(500).json({error: "Internal server error"});
    }
})



export { listRouter };