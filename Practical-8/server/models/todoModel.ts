// eslint-disable-next-line @typescript-eslint/no-var-requires
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        todo: {
            type: String,
            required: [true, 'Todo is required'],
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Todo', TodoSchema);
