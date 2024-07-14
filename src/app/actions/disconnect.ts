"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function disconnect() {
  cookies().delete("access");
  redirect("/login");
}
