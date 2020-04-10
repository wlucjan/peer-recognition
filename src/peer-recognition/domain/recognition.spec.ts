import { Recognition } from "./recognition";
import { Peer } from "./peer";
import { Organisation } from "./organisation";

describe("Peer Recognition", () => {
  describe("Recognition", () => {
    const organisation = new Organisation("o1");
    const giver = new Peer(organisation);
    const receiver = new Peer(organisation);

    describe("create", () => {
      it("should create a recognition with a time of when it was given", () => {
        const recognition = new Recognition(
          giver,
          receiver,
          "reason of recognition"
        );

        expect(recognition.givenAt).not.toBeNull();
      });
    });

    describe("boost", () => {
      const booster = new Peer(organisation);

      it("should return a recognition from booster to the receiver", () => {
        // given
        const recognition = new Recognition(
          giver,
          receiver,
          "reason of recognition"
        );

        // when
        const boostingRecognition = recognition.boost(booster);

        // then
        expect(boostingRecognition).toBeInstanceOf(Recognition);
        expect(boostingRecognition.giver).toEqual(booster);
        expect(boostingRecognition.receiver).toEqual(receiver);
      });

      it("should return a recognition that points at another recognition", () => {
        // given
        const recognition = new Recognition(
          giver,
          receiver,
          "reason of recognition"
        );

        // when
        const boostingRecognition = recognition.boost(booster);

        // then
        expect(boostingRecognition).toBeInstanceOf(Recognition);
        expect(boostingRecognition.giver).toEqual(booster);
        expect(boostingRecognition.receiver).toEqual(receiver);
      });
    });
  });
});
