export type Key<T> = keyof T;
export type ValueOf<T> = T[keyof T];
export type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;
export type OptionalKeys<T> = {
  [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never;
}[keyof T];
export type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>;
