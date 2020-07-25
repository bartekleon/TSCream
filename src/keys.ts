import { IsFullyWritable } from './util';
import { PlainObject } from './types';

export type Key<T extends PlainObject> = keyof T;
export type ValueOf<T extends PlainObject> = T[keyof T];
export type KnownKeys<T extends PlainObject> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;
export type OptionalKeys<T extends PlainObject> = {
  [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never;
}[keyof T];
export type ReadonlyKeys<T extends PlainObject> = {
  [P in keyof T]-?: IsFullyWritable<Pick<T, P>> extends true ? never : P;
}[keyof T];
export type WritableKeys<T extends PlainObject> = {
  [P in keyof T]-?: IsFullyWritable<Pick<T, P>> extends true ? P : never;
}[keyof T];
export type RequiredKeys<T extends PlainObject> = Exclude<keyof T, OptionalKeys<T>>;
export type NonNeverKeys<T extends PlainObject> = Pick<T, { [K in keyof T]: T[K] extends never ? never : K }[keyof T]>;
