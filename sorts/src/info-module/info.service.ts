import { SortType } from "../common/enums";

export class InfoService {
  constructor() {}

  public async getSortTypes(): Promise<string[]> {
    return Object.values(SortType);
  }
}
