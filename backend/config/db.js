import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://vitoralexse:2xUMAb3b1MXp5H0q@cluster0.lyg3c.mongodb.net/mern-food-delivery-project').then(()=>console.log("DB Connected"))
}

