import { Peer } from "./peer";
import { Recognition } from "./recognition";
import {
  PeerCannotRecogniseMembersOfOrganisation,
  RecognitionTargetIsNotAMembersOfOrganisation
} from "./errors";

export class Organisation {
  constructor(private organisationId: string) {}

  recognisePeer(giver: Peer, receiver: Peer, reason: string): Recognition {
    this.canGiverRecogniseReceiver(giver, receiver);

    return new Recognition(giver, receiver, reason);
  }

  private canGiverRecogniseReceiver(giver: Peer, receiver: Peer) {
    if (!giver.isMemberOf(this)) {
      throw new PeerCannotRecogniseMembersOfOrganisation();
    }
    if (!receiver.isMemberOf(this)) {
      throw new RecognitionTargetIsNotAMembersOfOrganisation();
    }
  }

  equals(anotherOrganisation: Organisation) {
    return this.organisationId === anotherOrganisation.organisationId;
  }
}
