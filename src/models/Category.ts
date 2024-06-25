export default class Category {
  private _name: string;
  private _description: string;

  constructor(props: { name: string; description: string }) {
    this._name = props.name;
    this._description = props.description;
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
}
