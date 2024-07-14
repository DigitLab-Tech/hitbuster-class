import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Customer from "@/models/Customer";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import editCustomerFormSchema, {
  EditCustomerFormSchema,
} from "@/app/schemas/editCustomerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useState } from "react";

export function EditCustomerDialog({
  customer,
  onEdit,
  onCreate,
}: {
  customer?: Customer;
  onEdit: (customerData: EditCustomerFormSchema) => void;
  onCreate: (customerData: EditCustomerFormSchema) => void;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<EditCustomerFormSchema>({
    resolver: zodResolver(editCustomerFormSchema),
    defaultValues: {
      id: customer?.id ?? 0,
      firstname: customer?.firstname ?? "",
      lastname: customer?.lastname ?? "",
      email: customer?.email ?? "",
      gender: customer?.gender ?? "",
      password: "",
      action: customer ? "edit" : "create",
    },
  });

  function onSubmit(values: EditCustomerFormSchema) {
    if (values.action === "edit") {
      onEdit(values);
    }

    if (values.action === "create") {
      onCreate(values);
    }

    setIsDialogOpen(false);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>{customer ? "Edit" : "Add"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <DialogHeader>
              <DialogTitle>{customer ? "Edit" : "Create"} Customer</DialogTitle>
            </DialogHeader>
            <DialogDescription>Informations</DialogDescription>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <div className="flex gap-3 text-sm">
                      <label className="flex items-center gap-2">
                        Male:
                        <input
                          name={field.name}
                          defaultValue="male"
                          type="radio"
                          ref={field.ref}
                          onChange={field.onChange}
                          checked={field.value === "male"}
                        />
                      </label>
                      <label className="flex items-center gap-2">
                        Female:
                        <input
                          name={field.name}
                          defaultValue="female"
                          type="radio"
                          ref={field.ref}
                          onChange={field.onChange}
                          checked={field.value === "female"}
                        />
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
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
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <FormField
                control={form.control}
                name="action"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="hidden" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="hidden" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">{customer ? "Edit" : "Create"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
