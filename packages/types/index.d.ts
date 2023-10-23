const RNN_ORIG = Symbol()
type RecursiveNonNullable1<T> = { [K in keyof T]: RecursiveNonNullable<T[K]> }

type Keys<T> = keyof T
type Maybe<T> = T | undefined | null

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp]
type ObjectProp<TObj> = TObj[keyof TObj]

type RecursiveNonNullable<T> = RecursiveNonNullable1<NonNullable<T>> & { [RNN_ORIG]: T }

type TextUpper = Uppercase<string>
type TextLower = Lowercase<string>

type Merge<T, U> = T & U

type Mutable<T> = { -readonly [k in keyof T]: T[k] }

type DeepMutable<T> = {
    [k in keyof T]: Mutable<T[k]>
}

type Interface<T> = {
    [K in keyof T]: T[K]
}

type Constructor<T> = {
    new (...args: unknown[]): T
}

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type GetKeysByType<T, U> = NonNullable<{
    [K in keyof T]: [U] extends [T[K]] ? T[K] extends U ? K : never : never
}[keyof T]>

type WithUnderscoredKeys<T> = {
    [K in keyof T as `_${string & K}`]: T[K]
}

type Enum<T> = {
    [K in keyof T]: T[K]
}