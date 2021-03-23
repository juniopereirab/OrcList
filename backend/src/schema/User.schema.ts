import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    profile_pic?: string;
}

const userSchema = new Schema <IUser> ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    profile_pic: {
        type: String,
        required: false
    }
});

userSchema.pre<IUser>('save', async function pre(next){
    const user = this;
    if(!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
});

userSchema.set('timestamps', true);

export const User = model<IUser>("User", userSchema);