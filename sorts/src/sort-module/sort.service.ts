import { SortType } from "../common/enums/sort-type.enum";
import { GeneratingService } from "../generating-module/generating.service";
import { SortingAlgorithmsService } from "./sorting-algorithms.service";

export class SortService {
  private readonly sortingAlgorithmsService: SortingAlgorithmsService;
  private readonly generatingService: GeneratingService;
  constructor() {
    this.sortingAlgorithmsService = new SortingAlgorithmsService();
    this.generatingService = new GeneratingService();
  }

  public async sort(array: number[], type: SortType): Promise<number[]> {
    switch (type) {
      case SortType.Bubble:
        return await this.sortingAlgorithmsService.sortBubble([...array]);
      case SortType.Insertion:
        return await this.sortingAlgorithmsService.insertionSort([...array]);
      case SortType.Merge:
        return await this.sortingAlgorithmsService.mergeSort([...array]);
      case SortType.Quick:
        return await this.sortingAlgorithmsService.quickSort([...array]);
      case SortType.Heap:
        return await this.sortingAlgorithmsService.heapSort([...array]);
      case SortType.Selection:
        return await this.sortingAlgorithmsService.selectionSort([...array]);
      case SortType.Shell:
        return await this.sortingAlgorithmsService.shellSort([...array]);
      case SortType.Counting:
        return await this.sortingAlgorithmsService.countingSort([...array]);
      default:
        throw new Error("Unknown sort type");
    }
  }
  public async sortRandomArray(
    type: SortType,
    length: number,
    max?: number,
  ): Promise<number[]> {
    const generatedArray = await this.generatingService.generateRandomArray(
      length,
      max,
    );
    switch (type) {
      case SortType.Bubble:
        return await this.sortingAlgorithmsService.sortBubble([
          ...generatedArray,
        ]);
      case SortType.Insertion:
        return await this.sortingAlgorithmsService.insertionSort([
          ...generatedArray,
        ]);
      case SortType.Merge:
        return await this.sortingAlgorithmsService.mergeSort([
          ...generatedArray,
        ]);
      case SortType.Quick:
        return await this.sortingAlgorithmsService.quickSort([
          ...generatedArray,
        ]);
      case SortType.Heap:
        return await this.sortingAlgorithmsService.heapSort([
          ...generatedArray,
        ]);
      case SortType.Selection:
        return await this.sortingAlgorithmsService.selectionSort([
          ...generatedArray,
        ]);
      case SortType.Shell:
        return await this.sortingAlgorithmsService.shellSort([
          ...generatedArray,
        ]);
      case SortType.Counting:
        return await this.sortingAlgorithmsService.countingSort([
          ...generatedArray,
        ]);
      default:
        throw new Error("Unknown sort type");
    }
  }
}
