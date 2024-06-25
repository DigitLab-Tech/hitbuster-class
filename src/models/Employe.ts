import Person from "./Person";

export default class Employe extends Person {
  private _startedAt: number;
  private _userCode: string;
  private _password: string;
  private _access: string;

  constructor(props: {
    firstname: string;
    lastname: string;
    gender?: string;
    startedAt: number;
    userCode: string;
    password: string;
    access: string;
  }) {
    super(props);

    this._startedAt = props.startedAt;
    this._userCode = props.userCode;
    this._password = props.password;
    this._access = props.access;
  }

  public get startedAt(): number {
    return this._startedAt;
  }

  public set startedAt(value: number) {
    this._startedAt = value;
  }

  public get userCode(): string {
    return this._userCode;
  }

  public set userCode(value: string) {
    this._userCode = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get access(): string {
    return this._access;
  }

  public set access(value: string) {
    this._access = value;
  }
}
