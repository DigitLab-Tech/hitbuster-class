"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { type AuthFormSchema } from "../schemas/authFormSchema";
import { employes } from "@/data";
import Employe from "@/models/Employe";
import { md5 } from "js-md5";
import { neon } from '@neondatabase/serverless';

export async function authenticate(
  formData: AuthFormSchema,
) {
  function getEmploye(employeCode: string, password: string): Employe | null {
    return employes.collection.find(employe => employe.userCode === employeCode && employe.password === md5(password)) || null;
  }

  const employe = getEmploye(formData.username, formData.password);

  if (!employe) {
    return 'Invalid credentials'
  }

  if (formData.otpKey === "AAAAAA") {
    const sql = neon(`${process.env.NEON_DATABASE_URL}`);
    const key = Math.floor(100000 + Math.random() * 900000);

    try {
      await sql`INSERT INTO otp (email, key)
      VALUES (${employe.email}, ${key})
      ON CONFLICT (email)
      DO UPDATE SET key = ${key};`;
    }
    catch {
      return 'Something went wrong.';
    }

    return "OTP";
  }

  try {
    await signIn('credentials', { redirectTo: "/dashboard", ...formData });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}