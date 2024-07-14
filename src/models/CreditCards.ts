import CreditCard from "./CreditCard";

export default class CreditCards {
  private _collection: CreditCard[];

  constructor(collection: CreditCard[]) {
    this._collection = collection;
  }

  public get collection(): CreditCard[] {
    return this._collection;
  }
}
