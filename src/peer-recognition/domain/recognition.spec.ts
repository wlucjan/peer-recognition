import { Recognition } from "./recognition";

describe("Peer Recognition", () => {
  describe("Recognition", () => {
    describe("create", () => {
      it("should create a recognition with a time of when it was given", () => {
        const recognition = new Recognition(
          "giverId",
          "receiverId",
          "reason of recognition"
        );

        expect(recognition.givenAt).not.toBeNull();
      });
    });
  });
});
