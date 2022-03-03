/*
Copyright 2022 Salehen Shovon Rahman

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/**
 * An object that represents the result of a validation check.
 */
export type ValidationResult<T> =
  | { isValid: false }
  | { value: T; isValid: true };

/**
 * An object that serves as a validator.
 */
export type Validator<T> = {
  __outputType: T;
  validate: (value: any) => ValidationResult<T>;
};

/**
 * A helper type for converting a Validator<T> type to a T
 *
 * For example, if you wanted to grab the validator from a `string()`, you'd use
 * this type like so:
 *
 * ```typescript
 * const stringValidator = string();
 *
 * type Str = InferType<typeof stringValidator>;
 * // Should be `type Str = string`
 * ```
 *
 * You can do this with objects as well. For example:
 *
 * ```typescript
 * const objectValidator = object({
 *   name: string(),
 *   email: string(),
 *   age: number()
 * });
 *
 * type Obj = InferType<typeof objectValidator>;
 * // Should be:
 * //
 * // type Obj = {
 * //   name: string
 * //   email: string
 * //   age: number
 * // }
 * ```
 */
export type InferType<T extends Validator<any>> = T["__outputType"];

export function either<T0, T1>(
  a0: Validator<T0>,
  a1: Validator<T1>
): Validator<T0 | T1>;
export function either<T0, T1, T2>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>
): Validator<T0 | T1 | T2>;
export function either<T0, T1, T2, T3>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>
): Validator<T0 | T1 | T2 | T3>;
export function either<T0, T1, T2, T3, T4>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>
): Validator<T0 | T1 | T2 | T3 | T4>;
export function either<T0, T1, T2, T3, T4, T5>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>
): Validator<T0 | T1 | T2 | T3 | T4 | T5>;
export function either<T0, T1, T2, T3, T4, T5, T6>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6>;
export function either<T0, T1, T2, T3, T4, T5, T6, T7>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7>;
export function either<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
export function either<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
export function either<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
export function either<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11>;
export function either<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>
): Validator<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>
): Validator<
  T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>
): Validator<
  T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>,
  a19: Validator<T19>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
  | T19
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>,
  a19: Validator<T19>,
  a20: Validator<T20>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
  | T19
  | T20
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>,
  a19: Validator<T19>,
  a20: Validator<T20>,
  a21: Validator<T21>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
  | T19
  | T20
  | T21
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>,
  a19: Validator<T19>,
  a20: Validator<T20>,
  a21: Validator<T21>,
  a22: Validator<T22>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
  | T19
  | T20
  | T21
  | T22
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>,
  a19: Validator<T19>,
  a20: Validator<T20>,
  a21: Validator<T21>,
  a22: Validator<T22>,
  a23: Validator<T23>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
  | T19
  | T20
  | T21
  | T22
  | T23
>;
export function either<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24
>(
  a0: Validator<T0>,
  a1: Validator<T1>,
  a2: Validator<T2>,
  a3: Validator<T3>,
  a4: Validator<T4>,
  a5: Validator<T5>,
  a6: Validator<T6>,
  a7: Validator<T7>,
  a8: Validator<T8>,
  a9: Validator<T9>,
  a10: Validator<T10>,
  a11: Validator<T11>,
  a12: Validator<T12>,
  a13: Validator<T13>,
  a14: Validator<T14>,
  a15: Validator<T15>,
  a16: Validator<T16>,
  a17: Validator<T17>,
  a18: Validator<T18>,
  a19: Validator<T19>,
  a20: Validator<T20>,
  a21: Validator<T21>,
  a22: Validator<T22>,
  a23: Validator<T23>,
  a24: Validator<T24>
): Validator<
  | T0
  | T1
  | T2
  | T3
  | T4
  | T5
  | T6
  | T7
  | T8
  | T9
  | T10
  | T11
  | T12
  | T13
  | T14
  | T15
  | T16
  | T17
  | T18
  | T19
  | T20
  | T21
  | T22
  | T23
  | T24
>;

/**
 * A validator for validating objects against a list of validators.
 *
 * This is especially useful if a possible object has more than one possible
 * valid type.
 *
 * ## Usage
 *
 * ```typescript
 * const alts = alternatives(string(), number());
 *
 * const num = 10;
 * const str = "hello";
 * const bool = true;
 *
 * console.log(alts.validate(num).valid); // Should be true
 * console.log(alts.validate(str).valid); // Should be true
 * console.log(alts.validate(bool).valid); // Should be false
 * ```
 * @param alts A list of validators that are to be run
 * @returns A validator to validate an object against a set of validators
 */
export function either(...alts: Validator<any>[]): Validator<any> {
  return {
    __outputType: {} as any,
    validate: (value: any) =>
      alts.some((validator) => validator.validate(value).isValid)
        ? { isValid: true, value, __outputType: value }
        : { isValid: false, __outputType: value },
  };
}
export function tuple(t: []): Validator<[]>;
export function tuple<T0>(t: [Validator<T0>]): Validator<[T0]>;
export function tuple<T0, T1>(
  t: [Validator<T0>, Validator<T1>]
): Validator<[T0, T1]>;
export function tuple<T0, T1, T2>(
  t: [Validator<T0>, Validator<T1>, Validator<T2>]
): Validator<[T0, T1, T2]>;
export function tuple<T0, T1, T2, T3>(
  t: [Validator<T0>, Validator<T1>, Validator<T2>, Validator<T3>]
): Validator<[T0, T1, T2, T3]>;
export function tuple<T0, T1, T2, T3, T4>(
  t: [Validator<T0>, Validator<T1>, Validator<T2>, Validator<T3>, Validator<T4>]
): Validator<[T0, T1, T2, T3, T4]>;
export function tuple<T0, T1, T2, T3, T4, T5>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>
  ]
): Validator<[T0, T1, T2, T3, T4, T5]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6, T7>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]>;
export function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13]>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>
  ]
): Validator<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14]>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>
  ]
): Validator<
  [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>
  ]
): Validator<
  [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17
  ]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>,
    Validator<T18>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18
  ]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>,
    Validator<T18>,
    Validator<T19>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19
  ]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>,
    Validator<T18>,
    Validator<T19>,
    Validator<T20>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20
  ]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>,
    Validator<T18>,
    Validator<T19>,
    Validator<T20>,
    Validator<T21>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21
  ]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>,
    Validator<T18>,
    Validator<T19>,
    Validator<T20>,
    Validator<T21>,
    Validator<T22>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22
  ]
>;
export function tuple<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23
>(
  t: [
    Validator<T0>,
    Validator<T1>,
    Validator<T2>,
    Validator<T3>,
    Validator<T4>,
    Validator<T5>,
    Validator<T6>,
    Validator<T7>,
    Validator<T8>,
    Validator<T9>,
    Validator<T10>,
    Validator<T11>,
    Validator<T12>,
    Validator<T13>,
    Validator<T14>,
    Validator<T15>,
    Validator<T16>,
    Validator<T17>,
    Validator<T18>,
    Validator<T19>,
    Validator<T20>,
    Validator<T21>,
    Validator<T22>,
    Validator<T23>
  ]
): Validator<
  [
    T0,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23
  ]
>;

/**
 * Used to validate a tuple against the individual values in an array.
 *
 * ## Usage
 *
 * ```typescript
 * const tup = tuple(string(), number());
 *
 * alts.validate(["a", 1]).isValid // will be true
 * alts.validate([1, "a"]).isValid // will be false
 * alts.validate([1]).isValid // will be false
 * ```
 * @param t The tuple of validators to validate a tuple against
 * @returns A validator to validate tuples
 */
export function tuple(t: Validator<any>[]): Validator<any[]> {
  return {
    __outputType: {} as any,
    validate: (value: any) => {
      return Array.isArray(value) &&
        t.length === value.length &&
        t.every((validator, i) => validator.validate(value[i]).isValid)
        ? { isValid: true, value }
        : { isValid: false };
    },
  };
}

export function except<T, I>(
  validator: Validator<T>,
  invalidator: Validator<I>
): Validator<Exclude<T, I>> {
  return {
    __outputType: {} as Exclude<T, I>,
    validate: (value: any) =>
      validator.validate(value).isValid && !invalidator.validate(value).isValid
        ? { isValid: true, value }
        : { isValid: false },
  };
}

/**
 * Creates a validator that determines if the supplied value is a string.
 * @returns A validator to check if the value is of type string
 */
export const string = (): Validator<string> => {
  return {
    __outputType: "",
    validate: (value: any) =>
      typeof value !== "string" ? { isValid: false } : { value, isValid: true },
  };
};

export function exact<V extends string | number | boolean | null | undefined>(
  expected: V
): Validator<V> {
  return {
    __outputType: {} as any,
    validate: (value: any) =>
      value !== expected ? { isValid: false } : { value, isValid: true },
  };
}

export const number = (): Validator<number> => ({
  __outputType: 0,
  validate: (value: any) =>
    typeof value !== "number" ? { isValid: false } : { value, isValid: true },
});

export const boolean = (): Validator<boolean> => ({
  __outputType: false,
  validate: (value: any) =>
    typeof value !== "boolean" ? { isValid: false } : { value, isValid: true },
});

export function arrayOf<V>(validator: Validator<V>): Validator<V[]> {
  return {
    __outputType: [],
    validate: (value: any) =>
      Array.isArray(value) &&
      value.every((value, i) => validator.validate(value).isValid)
        ? { value, isValid: true }
        : { isValid: false },
  };
}

export function objectOf<V>(
  validator: Validator<V>
): Validator<{ [keys: string]: V }> {
  return {
    __outputType: {},
    validate: (value: any) =>
      !!value &&
      typeof value === "object" &&
      Object.keys(value).every((key) => validator.validate(value[key]).isValid)
        ? { value, isValid: true }
        : { isValid: false },
  };
}

function validValidator<V>(
  value: any
): { valid: false } | { valid: true; validator: Validator<V> } {
  return value && typeof value.validate === "function"
    ? { valid: true, validator: value }
    : { valid: false };
}

export function object<V extends object>(schema: {
  [key in keyof V]: Validator<V[key]>;
}): Validator<V> {
  return {
    __outputType: {} as V,
    validate: (value: any) =>
      !!value &&
      typeof value === "object" &&
      Object.keys(schema).every((key) => {
        const validation = validValidator((schema as any)[key]);
        if (validation.valid) {
          return validation.validator.validate(value[key]).isValid;
        } else {
          throw new Error("Something went wrong");
        }
      })
        ? { value, isValid: true, __outputType: value }
        : { isValid: false, __outputType: value },
  };
}

export function any(): Validator<any> {
  return {
    __outputType: "",
    validate: (value: any) => ({ isValid: true, value }),
  };
}

export function lazy<V extends any>(
  schemaFn: () => Validator<V>
): Validator<V> {
  return {
    __outputType: {} as V,
    validate: (value: any) => schemaFn().validate(value),
  };
}
