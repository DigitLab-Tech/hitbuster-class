"use client";

import Customer from "@/models/Customer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { EditCustomerDialog } from "./EditCustomerDialog";
import RemoveCustomerDialog from "./RemoveCustomerDialog";
import { EditCustomerFormSchema } from "@/app/schemas/editCustomerFormSchema";
import { useState } from "react";
import { movies, actors, customers } from "@/data";

export default function CustomersTable({ access }: { access: string }) {
  const [customersCollection, setCustomersCollection] = useState(
    customers.collection
  );

  const hasWriteAccess = access === "admin";

  function removeCustomer(customer: Customer) {
    setCustomersCollection(customers.remove(customer));
  }

  function onEditCustomer(customerData: EditCustomerFormSchema): void {
    setCustomersCollection(customers.edit(customerData));
  }

  function onCreateCustomer(customerData: EditCustomerFormSchema): void {
    setCustomersCollection(customers.create(customerData));
  }
  return (
    <>
      <div className="py-6">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Users</h1>
          {hasWriteAccess && (
            <EditCustomerDialog
              onCreate={onCreateCustomer}
              onEdit={onEditCustomer}
            />
          )}
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>LastName</TableHead>
              <TableHead>FirstName</TableHead>
              <TableHead>Email</TableHead>
              {hasWriteAccess && <TableHead>Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {customersCollection.map((customer) => (
              <TableRow key={customer.email}>
                <TableCell className="font-medium">
                  {customer.lastname}
                </TableCell>
                <TableCell className="font-medium">
                  {customer.firstname}
                </TableCell>
                <TableCell className="font-medium">{customer.email}</TableCell>
                {hasWriteAccess && (
                  <TableCell>
                    <div className="flex gap-1">
                      <RemoveCustomerDialog
                        onConfirm={() => removeCustomer(customer)}
                      />
                      <EditCustomerDialog
                        customer={customer}
                        onCreate={onCreateCustomer}
                        onEdit={onEditCustomer}
                      />
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="py-6">
        <h1 className="font-bold text-2xl">Movies</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead>Actors</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.collection.map((movie, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{movie.name}</TableCell>
                <TableCell className="font-medium">{movie.duration}</TableCell>
                <TableCell className="font-medium">
                  {movie.categories.toString()}
                </TableCell>
                <TableCell>
                  {actors
                    .getActorsByMovieName(movie.name)
                    .map((actor) => actor.firstname + " " + actor.lastname)
                    .toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
