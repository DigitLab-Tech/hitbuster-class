import { EditCustomerFormSchema } from "@/app/schemas/editCustomerFormSchema";
import Customer from "./Customer";
import CreditCards from "./CreditCards";

export default class Customers {
  private _collection: Customer[];

  constructor(collection: Customer[]) {
    this._collection = collection;
  }

  public get collection(): Customer[] {
    return this._collection;
  }

  public remove(customer: Customer): Customer[] {
    const index = this.collection.indexOf(customer);

    index >= 0 && this.collection.splice(index, 1);

    return [...this.collection];
  }

  public create(customerData: EditCustomerFormSchema): Customer[] {
    this.collection.push(
      new Customer({
        id: this.collection.length + 1,
        ...customerData,
        password: customerData.password ?? "",
        inscriptionDate: new Date().getTime(),
        creditCards: new CreditCards([]),
      })
    );

    return [...this.collection];
  }

  public edit(customerData: EditCustomerFormSchema): Customer[] {
    const customer = this.collection.find(
      (customer) => customer.id === customerData.id
    );

    if (customer) {
      customer.firstname = customerData.firstname;
      customer.lastname = customerData.lastname;
      customer.gender = customerData.gender ?? "male";
      customer.email = customerData.email;

      if (customerData.password) {
        customer.password = customerData.password ?? "password";
      }
    }

    return [...this.collection];
  }
}
