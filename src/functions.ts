import { PlainObject } from './types';
import { Key, KnownKeys } from './keys';
import { Spread } from './util';
import { DeepReadonly } from './modifyTypes';

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

export function deepFreeze<T>(target: T): DeepReadonly<T> {
  if (typeof target === 'object') {
    if (!Object.isFrozen(target)) {
      Object.freeze(target);
    }
    if (target instanceof Map) {
      target.forEach((v, k) => {
        deepFreeze(v);
        deepFreeze(k);
      });
    } else if (target instanceof Set) {
      target.forEach(e => deepFreeze(e));
    } else {
      for (const propKey in target) {
        const desc = Object.getOwnPropertyDescriptor(target, propKey);
        if (!desc || desc.get || desc.set) {
          continue;
        }
        deepFreeze(desc.value);
      }
    }

    return target as DeepReadonly<T>;
  }

  return (Object.isFrozen(target) ? target : Object.freeze(target)) as DeepReadonly<T>;
}
