import { Document, Schema, model} from 'mongoose';
import { ITask } from './Task.schema';
import { IUser } from './User.schema';

interface IList extends Document {
    title: string;
    owner: IUser;
    tasks: Array<ITask>;
}

const listSchema = new Schema<IList>({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tasks: {
        type: [Schema.Types.ObjectId],
        ref: "Tasks",
        required: false,
        default: null
    }
});

export const List = model<IList>('List', listSchema);