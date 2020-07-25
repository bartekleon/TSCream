export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type OmitProperties<T, P> = Pick<T, { [K in keyof T]: T[K] extends P ? never : K }[keyof T]>;
export type PickProperties<T, P> = Pick<T, { [K in keyof T]: T[K] extends P ? K : never }[keyof T]>;
