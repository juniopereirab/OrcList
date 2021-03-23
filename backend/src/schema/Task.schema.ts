import { Document, Schema, model } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    timer?: number;
}

const taskSchema = new Schema <ITask> ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    timer: {
        type: Number,
        required: false,
        default: 30
    }
});

export const Task = model<ITask>("Task", taskSchema);