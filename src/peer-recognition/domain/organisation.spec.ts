import { Organisation } from "./organisation";
import { Peer } from "./peer";
import { Recognition } from "./recognition";
import {
  PeerCannotRecogniseMembersOfOrganisation,
  RecognitionTargetIsNotAMembersOfOrganisation
} from "./errors";

describe("Peer Recognition", () => {
  describe("Organisation", () => {
    describe("equals", () => {
      it("should return true if organisations share same id", () => {
        // given
        const giverOrganisation = new Organisation("o1");
        const receiverOrganisation = new Organisation("o1");

        // when, then
        expect(giverOrganisation.equals(receiverOrganisation)).toBeTruthy();
      });

      it("should return false if organisations have different id", () => {
        // given
        const giverOrganisation = new Organisation("o1");
        const receiverOrganisation = new Organisation("o2");

        // when, then
        expect(giverOrganisation.equals(receiverOrganisation)).toBeFalsy();
      });
    });
    describe("recognise peer", () => {
      it("should recognise peer", () => {
        // given
        const organisation = new Organisation("o1");
        const giver = new Peer(organisation);
        const receiver = new Peer(organisation);

        // when
        const recognition = organisation.recognisePeer(
          giver,
          receiver,
          "reason of recognition"
        );

        // then
        expect(recognition).toBeInstanceOf(Recognition);
      });

      it("should not recognise a peer if giver is not a member of organisation", () => {
        // given
        const organisation = new Organisation("o1");
        const anotherOrganisation = new Organisation("o2");
        const giver = new Peer(anotherOrganisation);
        const receiver = new Peer(organisation);

        // when & then
        expect(() =>
          organisation.recognisePeer(giver, receiver, "reason of recognition")
        ).toThrow(PeerCannotRecogniseMembersOfOrganisation);
      });

      it("should not recognise a peer if receiver is not a mamber of organisation", () => {
        // given
        const organisation = new Organisation("o1");
        const anotherOrganisation = new Organisation("o2");
        const giver = new Peer(organisation);
        const receiver = new Peer(anotherOrganisation);

        // when & then
        expect(() =>
          organisation.recognisePeer(giver, receiver, "reason of recognition")
        ).toThrow(RecognitionTargetIsNotAMembersOfOrganisation);
      });
    });
  });
});
