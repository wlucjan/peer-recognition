import { Peer } from "./peer";

export class Recognition {
  private _givenAt: Date;
  constructor(
    private _giver: Peer,
    private _receiver: Peer,
    private _reason: string
  ) {
    this._givenAt = new Date();
  }

  get giver(): Peer {
    return this._giver;
  }

  get receiver(): Peer {
    return this._receiver;
  }

  get reason(): string {
    return this._reason;
  }

  get givenAt(): Date {
    return this._givenAt;
  }

  boost(booster: Peer) {
    return new Recognition(booster, this.receiver, this.reason);
  }
}
