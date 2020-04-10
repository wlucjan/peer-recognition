import { Recognition } from "../recognition";

export class RecognitionsLimitPolicy {
  constructor(private limit: number) {}

  passed(recognitions: Recognition[]): boolean {
    return recognitions.length < this.limit;
  }
}
