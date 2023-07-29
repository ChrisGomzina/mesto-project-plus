import mongoose from 'mongoose';

interface ICard {
  name: string;
  link: string;
  owner: mongoose.Schema.Types.ObjectId;
  likes: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
}

const cardSchema = new mongoose.Schema<ICard>(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    link: {
      type: String,
      required: true,
      match: /^(http|https):\/\/[a-zA-Z0-9]+([-.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?((\/[a-zA-Z0-9%-~]+)*)?(#[a-zA-Z0-9_%-]*)?$/,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    likes: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

export default mongoose.model<ICard>('card', cardSchema);
