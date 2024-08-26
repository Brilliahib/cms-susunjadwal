import { z } from "zod";

export const loginSchema = z.object({
  credential: z
    .string()
    .min(1, { message: "username/email harus diisi" })
    .trim(),
  password: z.string().min(1, { message: "password harus diisi" }),
});

export type LoginType = z.infer<typeof loginSchema>;
