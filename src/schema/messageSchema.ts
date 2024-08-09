import { z } from "zod";

export const verifySchema = z.object({
  content: z
    .string()
    .min(10, "Content must contain atleast 10 characters")
    .max(300, "Content must be less than 300 characters"),
});
