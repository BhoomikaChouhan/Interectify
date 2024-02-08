import { z } from "zod"
export const SignupValidation = z.object({
    username: z.string().min(2,{message:"Username is too Short"}).max(50),
    name: z.string().min(2,{message:"Name is too Short"}),
    email: z.string().email(),
    password: z.string().min(8,{message:"password must be of at least 8 characters"}),
  })