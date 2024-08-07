import Movie from "./Movie";
import Movies from "./Movies";
import Person from "./Person";

export default class Actor extends Person {
  private _startedAt: number;
  private _endedAt: number;
  private _cachet: number;
  private _movies: Movies;

  constructor(props: {
    firstname: string;
    lastname: string;
    gender?: string;
    caracterName: string;
    startedAt: number;
    endedAt: number;
    cachet: number;
    movies: Movies;
  }) {
    super(props);

    this._startedAt = props.startedAt;
    this._endedAt = props.endedAt;
    this._cachet = props.cachet;
    this._movies = props.movies;
  }

  public get startedAt(): number {
    return this._startedAt;
  }

  public set startedAt(value: number) {
    this._startedAt = value;
  }

  public get endedAt(): number {
    return this._endedAt;
  }

  public set endedAt(value: number) {
    this._endedAt = value;
  }

  public get cachet(): number {
    return this._cachet;
  }

  public set cachet(value: number) {
    this._cachet = value;
  }

  public get movies(): Movies {
    return this._movies;
  }

  public set movies(value: Movies) {
    this._movies = value;
  }
}
