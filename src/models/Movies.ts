import Movie from "./Movie";

export default class Movies {
  private _collection: Movie[];

  constructor(collection: Movie[]) {
    this._collection = collection;
  }

  public get collection(): Movie[] {
    return this._collection;
  }
}
