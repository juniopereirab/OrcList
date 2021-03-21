import { model, Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document { 
    name: string;
    email: string;
    profile_pic: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 72
    },
    profile_pic: {
        type: String,
        required: false
    }
});

userSchema.pre<IUser>('save', async function pre(next){
    const user = this;
    if(!user.isModified('password')) return next();
    const salt = await bcrypt.getSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
});

userSchema.methods.comparePassword = function ComparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
}

userSchema.set('timestamps', true);

export default model<IUser>('User', userSchema);