export class RecognitionTargetIsNotAMembersOfOrganisation extends Error {
  constructor() {
    super("Peer cannot recognise members outside of this organisation");
    Object.setPrototypeOf(
      this,
      RecognitionTargetIsNotAMembersOfOrganisation.prototype
    );
  }
}
