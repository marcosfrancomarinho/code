export interface IDatasServices<T = any> {
  searchDatasDataBase(): Promise<T>;
}
