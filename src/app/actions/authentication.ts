"use server";

import { employes } from "@/data";
import authFormSchema, { type AuthFormSchema } from "../schemas/authFormSchema";
import { md5 } from "js-md5";
import { cookies } from "next/headers";
import { date } from "zod";
import { redirect } from "next/navigation";

export default async function authenticate(authData: AuthFormSchema) {
  const validatedAuthData = authFormSchema.safeParse(authData);

  if (!validatedAuthData.success) {
    return {
      msg: "Invalid form data.",
    };
  }

  const password = md5(validatedAuthData.data.password);
  const employe = employes.find(
    (employe) =>
      employe.userCode === validatedAuthData.data.username &&
      employe.password === password
  );

  if (!employe) {
    return {
      msg: "Could not find employe.",
    };
  }

  const date = new Date();

  cookies().set({
    name: "access",
    value: employe.access,
    expires: date.setTime(date.getTime() + 60 * 1000 * 30),
  });

  redirect("/");
}
