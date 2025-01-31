export interface IDatasAdapter<T = any> {
  searchDatas(): Promise<T>;
}
