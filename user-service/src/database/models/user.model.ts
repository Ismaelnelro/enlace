import mongoose from "mongoose";
import { User } from "../../interfaces/user";
import { hashPassword } from "../../utils/bcrypt.handle";

export interface IUserDocument extends User, mongoose.Document {}

const userSchema = new mongoose.Schema<IUserDocument>(
    {
      username: {
        type: String,
        required: true
      },
      firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true,
        default: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png'
      },
      workfield: {
        type: String,
        enum: ['Marketing', 'Tecnologia', 'Administracion', 'Unknown'],
        required: true,
        default: 'Unknown'
      },
      workingmodality: {
        type: String,
        enum: ['Presencial', 'Hibrido', 'Remoto', 'Unknown'],
        required: true,
        default: 'Unknown'
      }
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    let user = this;
  
    if (!user.isModified("password")) {
      return next();
    }
  
    try {
      const hash = await hashPassword(user.password);
  
      user.password = hash;
      return next();
    } catch (err: any) {
      throw new Error("Error hashing \n" + err);
    }
  });

const UserModel = mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;