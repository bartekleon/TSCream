import { PlainObject } from './types';
import { Key, KnownKeys } from './keys';
import { Spread } from './util';

export const setItem = <T, K extends keyof T>(object: T, property: K, value: T[K]) => {
  object[property] = value;
};

export const getItem = <T, K extends keyof T>(object: T, property: K) => {
  return object[property];
};

export const hasItem = <T extends PlainObject>(object: T, property: any): property is Key<T> => {
  return object[property] ? true : false;
};

export const getKnownKeys = <T extends PlainObject>(object: T) => {
  return Object.keys(object) as Array<KnownKeys<T>>;
};

export const extendObject = <T extends PlainObject, U extends PlainObject>(first: T, second: U) => {
  return Object.assign({}, first, second) as Spread<T, U>;
};

export function notEmpty<T>(item: T | undefined | null): item is T {
  return item !== undefined && item !== null;
}
