import Category from "./Category";

export default class Categories {
  private _collection: Category[];

  constructor(collection: Category[]) {
    this._collection = collection;
  }

  public get collection(): Category[] {
    return this._collection;
  }

  public toString() {
    return this.collection.map((item) => item.name).join(", ");
  }
}
