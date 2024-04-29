import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
 name: string;
 checked: boolean;
}

const TodoSchema: Schema = new Schema({
 name: { type: String, required: true },
 checked: { type: Boolean, default: false },
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
