import { Primitive } from './types';

export type IsPrimitive<T> = T extends Primitive ? T : never;
export type IsTuple<T> = T extends [T] ? T : T extends any[] ? T : never;
