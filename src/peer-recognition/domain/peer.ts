import { Organisation } from "./organisation";

export class Peer {
  constructor(private organisation: Organisation) {}

  isMemberOf(organisation: Organisation): boolean {
    return this.organisation.equals(organisation);
  }
}
