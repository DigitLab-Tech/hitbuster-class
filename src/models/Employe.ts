import Person from "./Person";
import { md5 } from "js-md5";

export default class Employe extends Person {
  private _startedAt: number;
  private _userCode: string;
  private _password: string;
  private _access: string;

  constructor(props: {
    firstname: string;
    lastname: string;
    gender?: string;
    password: string;
    startedAt: number;
    userCode: string;
    access: string;
  }) {
    super(props);

    this._startedAt = props.startedAt;
    this._userCode = props.userCode;
    this._access = props.access;
    this._password = props.password;
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

  public get password(): string | null {
    return this._password;
  }

  public set password(value: string) {
    this._password = md5(value);
  }

  public get access(): string {
    return this._access;
  }

  public set access(value: string) {
    this._access = value;
  }
}
