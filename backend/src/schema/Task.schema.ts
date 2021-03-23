import { Document, Schema, model } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    done: Boolean;
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
    done: {
        type: Boolean,
        required: false,
        default: false
    },
    timer: {
        type: Number,
        required: false,
        default: 30
    }
});

export const Task = model<ITask>("Task", taskSchema);