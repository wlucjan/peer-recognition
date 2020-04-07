export class Recognition {
  private _givenAt: Date;
  constructor(
    private _giverId: string,
    private _receiverId: string,
    private _reason: string
  ) {
    this._givenAt = new Date();
  }

  get giverId(): string {
    return this._giverId;
  }

  get receiverId(): string {
    return this._receiverId;
  }

  get reason(): string {
    return this._reason;
  }

  get givenAt(): Date {
    return this._givenAt;
  }
}
