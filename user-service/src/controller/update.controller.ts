import { Request, Response } from "express";
import { updateUser } from "../service/serviceUpdate";
import { findById } from "../service/serviceFind";
import { hashPassword } from "../utils/bcrypt.handle";

// update user by ID
export const updateUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
  
    const { email, username, firstname, lastname, password, avatar, workfield, workingmodality } = req.body;
  
    const hash = await hashPassword(password);
    const hashUsername = await hashPassword(user.password);
  
    const newUser = {
      email: email ? email : user.email,
      username: username ? username : user.username,
      firstname: firstname ? firstname : user.firstname,
      lastname: lastname ? lastname : user.lastname,
      password: password ? hash : hashUsername,
      avatar: avatar ? avatar : 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
      workfield: workfield ? workfield : user.workfield,
      workingmodality: workingmodality ? workingmodality : user.workingmodality
    };
    try {
      const user = await updateUser(id, newUser);
  
      return res.status(200).send(user);
    } catch (err: any) {
      return res.status(400).send("Error updating User " + err);
    }
  };