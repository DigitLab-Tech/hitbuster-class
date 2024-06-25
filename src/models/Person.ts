export default class Person {
  protected _firstname: string;
  protected _lastname: string;
  protected _gender: string | null;

  constructor(props: { firstname: string; lastname: string; gender?: string }) {
    this._firstname = props.firstname;
    this._lastname = props.lastname;
    this._gender = props.gender ?? null;
  }

  public get firstname(): string {
    return this._firstname;
  }

  public set firstname(value: string) {
    this._firstname = value;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }

  public get gender(): string | null {
    return this._gender;
  }

  public set gender(value: string) {
    this._gender = value;
  }
}
