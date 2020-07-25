import { Primitive } from './types';

export type IsPrimitive<T> = T extends Primitive ? T : never;
export type IsTuple<T> = T extends [T] ? T : T extends any[] ? T : never;
export type IsArray<T> = T extends any[] ? T : never;
export type IsObject<T> = T extends {} ? T : never;
export type IsNonEmptyObject<T extends {}> = keyof T extends never ? T : never;
