export type Response<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: object;
  request?: any;
};
