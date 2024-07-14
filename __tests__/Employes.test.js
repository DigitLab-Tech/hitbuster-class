import { employes } from "@/data";
import md5 from "js-md5";

describe("Employes", () => {
  test("defines getByUserCodeAndPassword()", () => {
    expect(typeof employes.getByUserCodeAndPassword).toBe("function");
  });

  test("getByUserCodeAndPassword() is called with invalid arguments", () => {
    const getByUserCodeAndPassword = jest.spyOn(employes, "getByUserCodeAndPassword");
    const result = employes.getByUserCodeAndPassword("true", "false");
  
    expect(result).toBeUndefined();
  
    getByUserCodeAndPassword.mockClear();
  }); 
  
  test("getByUserCodeAndPassword() is called with valid arguments", () => {
    const getByUserCodeAndPassword = jest.spyOn(employes, "getByUserCodeAndPassword");
    const result = employes.getByUserCodeAndPassword("USR001", md5("password123"));
  
    expect(result).toMatchObject(employes.collection[0]);
  
    getByUserCodeAndPassword.mockClear();
  });  
});


