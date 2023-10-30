export interface ResultRequest<T> {
  isSuccess: boolean;
  statusCode: number;
  length: number;
  results: Array<T>;
}
