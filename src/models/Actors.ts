import Actor from "./Actor";
import Movie from "./Movie";

export default class Actors {
  private _collection: Actor[];

  constructor(collection: Actor[]) {
    this._collection = collection;
  }

  public get collection(): Actor[] {
    return this._collection;
  }

  public getActorsByMovieName(movieName: string): Actor[] {
    const actors: Actor[] = [];

    for (const actor of this.collection) {
      if (actor.movies.collection.some((movie) => movie.name === movieName)) {
        actors.push(actor);
      }
    }

    return actors;
  }
}
