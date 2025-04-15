"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import authFormSchema, { AuthFormSchema } from "../schemas/authFormSchema";
import { authenticate } from "../actions/authentication";
import { useState } from "react";

export default function LoginForm() {
  const [responseMsg, setResponseMsg] = useState<string | undefined>("");
  const [showOTPField, setShowOTPField] = useState(false);
  const form = useForm<AuthFormSchema>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      username: "",
      password: "",
      otpKey: "AAAAAA"
    },
  });

  function onSubmit(values: AuthFormSchema) {
    authenticate(values).then((data) => {
      if (data === "OTP") {
        form.setValue('otpKey', '');
        setShowOTPField(true);
        setResponseMsg("");
      } else {
        setResponseMsg(data);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserCode</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="otpKey"
          render={({ field }) => (
            <FormItem className={showOTPField ? "" : "hidden"}>
              <FormLabel>OTP Key</FormLabel>
              <FormControl>
                <Input type="text" {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-3">
          <Button type="submit">Submit</Button>
          <span className="text-red-600">{responseMsg}</span>
        </div>
      </form>
    </Form>
  );
}
