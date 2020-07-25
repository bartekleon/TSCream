export type Primitive = bigint | boolean | null | number | string | symbol | undefined;
export type Builtin = Primitive | Function | Date | Error | RegExp;
export type PlainObject = Record<string, any>;
export type Tuple<T = any> = [T] | T[];
export type AnyArray<T = any> = T[] | readonly T[];
export type AnySet<T = any> = Set<T> | ReadonlySet<T>;
export type AnyMap<T = any, U = any> = Map<T, U> | ReadonlyMap<T, U>;
