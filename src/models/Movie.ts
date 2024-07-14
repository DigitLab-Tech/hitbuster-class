import Categories from "./Categories";
import Category from "./Category";

export default class Movie {
  private _name: string;
  private _duration: number;
  private _description: string;
  private _categories: Categories;

  constructor(props: {
    name: string;
    duration: number;
    description: string;
    categories: Categories;
  }) {
    this._name = props.name;
    this._duration = props.duration;
    this._description = props.description;
    this._categories = props.categories;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: number) {
    this._duration = value;
  }

  public get categories(): Categories {
    return this._categories;
  }

  public set categories(value: Categories) {
    this._categories = value;
  }
}
