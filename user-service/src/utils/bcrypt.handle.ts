import { hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const passwordHash = await hash(password, 10);

  return passwordHash;
};

export const comparePassword = async (password: string,userPassword: string) => {
  const isCorrect = await compare(password, userPassword);

  return isCorrect
};

// export const signToken = async (payload: {}) => {
//   const token = jwt.sign(payload, JWT_TOKEN, { expiresIn: "45m" });
//   return token;
// };

// export const validateToken = async (token: string) => {
//   const validate = jwt.verify(token, JWT_TOKEN);
//   return validate;
// };