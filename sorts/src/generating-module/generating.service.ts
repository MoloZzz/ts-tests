export class GeneratingService {
  constructor() {}

  public async generateRandomArray(
    length: number,
    max: number = 100,
  ): Promise<number[]> {
    const generatedArray: number[] = [];
    for (let i = 0; i < length; i++) {
      generatedArray.push(Math.floor(Math.random() * max));
    }
    return generatedArray;
  }
}
