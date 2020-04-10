export class PeerCannotRecogniseMembersOfOrganisation extends Error {
  constructor() {
    super("Peer cannot recognise members of this organisation");
    Object.setPrototypeOf(
      this,
      PeerCannotRecogniseMembersOfOrganisation.prototype
    );
  }
}
