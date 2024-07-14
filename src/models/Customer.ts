import CreditCards from "./CreditCards";
import Person from "./Person";

export default class Customer extends Person {
  protected _id: number;
  protected _email: string;
  private _password: string;
  protected _inscriptionDate: number;
  protected _creditCards: CreditCards;

  constructor(props: {
    id: number;
    firstname: string;
    lastname: string;
    gender?: string;
    email: string;
    password: string;
    inscriptionDate: number;
    creditCards: CreditCards;
  }) {
    super(props);

    this._id = props.id;
    this._email = props.email;
    this._password = props.password;
    this._inscriptionDate = props.inscriptionDate;
    this._creditCards = props.creditCards;
  }

  public get id(): number {
    return this._id;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get inscriptionDate(): number {
    return this._inscriptionDate;
  }

  public set inscriptionDate(value: number) {
    this._inscriptionDate = value;
  }

  public get creditCards(): CreditCards {
    return this._creditCards;
  }

  public set creditCards(value: CreditCards) {
    this._creditCards = value;
  }
}
