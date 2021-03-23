import { Document, Schema, model} from 'mongoose';

interface IList extends Document {
    title: string;
    owner: string;
    tasks: Array<string>;
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