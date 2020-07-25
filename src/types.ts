import { DeepReadonly } from './modifyTypes';

export type Primitive = bigint | boolean | null | number | string | symbol | undefined;
export type Builtin = Primitive | Function | Date | Error | RegExp;
export type PlainObject<T = any> = Record<string, T>;
export type Tuple<T = any> = [T] | T[];
export type AnyArray<T = any> = T[] | readonly T[];
export type AnySet<T = any> = Set<T> | ReadonlySet<T>;
export type AnyMap<T = any, U = any> = Map<T, U> | ReadonlyMap<T, U>;

export type ImmutablePrimitive = Primitive;
export type ImmutableArray<T> = ReadonlyArray<DeepReadonly<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>;
export type ImmutableSet<T> = ReadonlySet<DeepReadonly<T>>;
export type ImmutableObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };

export type Dictionary<T, K extends string | number = string> = { [key in K]: T };
export type DictionaryValues<T> = T extends Dictionary<infer U> ? U : never;
export type SafeDictionary<T, K extends string | number = string> = { [key in K]?: T };

export type NonEmptyObject<T extends {}> = keyof T extends never ? never : T;

export type AsyncOrSync<T> = PromiseLike<T> | T;

export type Newable<T> = new (...args: any[]) => T;

export type Awaited<T> = T extends PromiseLike<infer PT> ? PT : never;
export type AsyncOrSyncType<T> = T extends AsyncOrSync<infer PT> ? PT : never;
