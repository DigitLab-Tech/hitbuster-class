import { any, number, object, string, z, type infer as zodInfer } from "zod";

const editCustomerFormSchema = object({
  id: number().optional(),
  firstname: string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  gender: string().optional(),
  action: string().optional(),
  email: string()
    .min(1, { message: "This field is required" })
    .email("This is not a valid email."),
  password: z
    .union([
      z.string().min(8, "Password must be at least 8 characters."),
      z.string().length(0),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

export type EditCustomerFormSchema = zodInfer<typeof editCustomerFormSchema>;

export default editCustomerFormSchema;
