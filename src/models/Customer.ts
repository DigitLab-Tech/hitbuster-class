import CreditCard from "./CreditCard";
import Person from "./Person";

export default class Customer extends Person {
  protected _email: string;
  private _password: string;
  protected _inscriptionDate: number;
  protected _creditCards: CreditCard[];

  constructor(props: {
    firstname: string;
    lastname: string;
    gender?: string;
    email: string;
    password: string;
    inscriptionDate: number;
    creditCards: CreditCard[];
  }) {
    super(props);

    this._email = props.email;
    this._password = props.password;
    this._inscriptionDate = props.inscriptionDate;
    this._creditCards = props.creditCards;
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

  public get creditCards(): CreditCard[] {
    return this._creditCards;
  }

  public set creditCards(value: CreditCard[]) {
    this._creditCards = value;
  }
}
