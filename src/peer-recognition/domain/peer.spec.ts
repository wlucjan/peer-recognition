import { Peer } from "./peer";
import { Organisation } from "./organisation";

describe("Peer Recognition", () => {
  describe("Peer", () => {
    describe("isMemberOf", () => {
      it("should return true if peer is member of given organisation", () => {
        // given
        const organisation = new Organisation("o1");
        const peer = new Peer(organisation);

        // when, then
        expect(peer.isMemberOf(organisation)).toBeTruthy();
      });
      it("should return false if peer is not a member of given organisation", () => {
        // given
        const organisation = new Organisation("o1");
        const anotherOrganisation = new Organisation("o2");
        const peer = new Peer(organisation);

        // when, then
        expect(peer.isMemberOf(anotherOrganisation)).toBeFalsy();
      });
    });
  });
});
