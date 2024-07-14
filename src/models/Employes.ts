import Employe from "./Employe";

export default class Employes {
  private _collection: Employe[];

  constructor(collection: Employe[]) {
    this._collection = collection;
  }

  public get collection(): Employe[] {
    return this._collection;
  }

  public getByUserCodeAndPassword(
    usercode: string,
    password: string
  ): Employe | undefined {
    return this.collection.find(
      (item) => item.userCode === usercode && item.password === password
    );
  }
}
