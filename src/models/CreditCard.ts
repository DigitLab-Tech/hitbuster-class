export default class CreditCard {
  protected _cardNumber: string;
  protected _secret: string;
  protected _expiration: number;

  constructor(props: {
    cardNumber: string;
    secret: string;
    expiration: number;
  }) {
    this._cardNumber = props.cardNumber;
    this._secret = props.secret;
    this._expiration = props.expiration;
  }

  public get cardNumber() {
    return this._cardNumber;
  }

  public set cardNumber(value: string) {
    this._cardNumber = value;
  }

  public get secret() {
    return this._secret;
  }

  public set secret(value: string) {
    this._secret = value;
  }

  public get expiration() {
    return this._expiration;
  }

  public set expiration(value: number) {
    this._expiration = value;
  }
}
