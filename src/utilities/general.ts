/**
 * General utility function , this file can be splitted if it gets bigger
 */

/**
 *  Capitalize strings
 */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 *
 * @param {any} value what needs to be validated
 * @returns {boolean}
 */
export const isObject = (value: unknown): boolean =>
  typeof value === "object" && value !== null && !Array.isArray(value);
