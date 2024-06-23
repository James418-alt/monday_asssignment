import { Schema, model, models } from "mongoose";
import { iCard } from "../cardInterface";
interface iCardData extends iCard, Document {}
const cardModel = new Schema<iCardData>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const myCardModel = models.cards || model<iCardData>("cards", cardModel);
export default myCardModel;
