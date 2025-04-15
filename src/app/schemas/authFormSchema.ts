import { object, string, number, type infer as zodInfer } from "zod";

const authFormSchema = object({
  username: string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  otpKey: string().length(6, {
    message: "OTP key must contain exactly 6 character(s)",
  })
});

export type AuthFormSchema = zodInfer<typeof authFormSchema>;

export default authFormSchema;
