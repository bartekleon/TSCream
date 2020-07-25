import { Writable } from './modifyTypes';

export type IsEqualConsideringWritability<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;

export type IsFullyWritable<T extends object> = IsEqualConsideringWritability<
  { [Q in keyof T]: T[Q] },
  Writable<{ [Q in keyof T]: T[Q] }>
>;

export type Id<T> = { [P in keyof T]: T[P] };

export type SpreadProp<L, R, P extends keyof (L & R)> = P extends keyof R
  ? undefined extends R[P]
    ? L[Extract<P, keyof L>] | R[P]
    : R[P]
  : L[Extract<P, keyof L>];

export type Spread<L, R> = Id<{ [P in keyof (L & R)]: SpreadProp<L, R, P> }>;
