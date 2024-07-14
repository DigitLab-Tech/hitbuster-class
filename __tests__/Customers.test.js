import { customers } from "@/data";
import Customers from "../src/models/Customers";
import Customer from "../src/models/Customer";

describe("Customers", () => {
  test("defines remove()", () => {
    expect(typeof customers.remove).toBe("function");
  });

  test("defines create()", () => {
    expect(typeof customers.create).toBe("function");
  });

  test("defines edit()", () => {
    expect(typeof customers.edit).toBe("function");
  });

  test("remove() is called with invalid arguments", () => {
    const initialCollection = [...customers.collection];
    const remove = jest.spyOn(customers, "remove");
    const result = customers.remove({});
  
    expect(result).toHaveLength(initialCollection.length);
  
    remove.mockClear();
  }); 

  test("remove() is called with valid arguments", () => {
    const initialCollection = [...customers.collection];
    const remove = jest.spyOn(customers, "remove");
    const result = customers.remove(initialCollection[0]);
  
    expect(result).toHaveLength(initialCollection.length - 1);
  
    remove.mockClear();
  }); 

  test("create() is called", () => {
    const initialCollection = [...customers.collection];
    const create = jest.spyOn(customers, "create");
    const result = customers.create({});
  
    expect(result).toHaveLength(initialCollection.length + 1);
  
    create.mockClear();
  }); 

  test("edit() is called with invalid id", () => {
    const customer = new Customer({id: 1, firstname: 'Michel'});
    const customCustomers = new Customers([customer]);
    const setCustomerFirstName = jest.spyOn(customer, 'firstname', 'set');
    const inData = {id: 0, firstname: 'Paul'};
    
    customCustomers.edit(inData);

    expect(setCustomerFirstName).not.toHaveBeenCalled();
  
    setCustomerFirstName.mockClear();
  }); 

  test("edit() is called with valid id", () => {
    const customer = new Customer({id: 1, firstname: 'Michel'});
    const customCustomers = new Customers([customer]);
    const setCustomerFirstName = jest.spyOn(customer, 'firstname', 'set');
    const inData = {id: 1, firstname: 'Paul'};
    
    customCustomers.edit(inData);

    expect(setCustomerFirstName).toHaveBeenCalled();
  
    setCustomerFirstName.mockClear();
  }); 
});


