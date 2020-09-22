import emojis, { Version } from './emojis';

/**
 * Split a string in chunks of a given size
 * @param {string} str - Source string
 * @param {number} size - Size of the chunk
 * @returns {string[]} - Chunks
 */
export const splitStringInChunks = (str: string, size = 16): string[] => {
    const re = new RegExp('.{1,' + size + '}', 'g');
    return [...str.match(re)];
};

/**
 * Look up emoji from hexadecimal value
 * @param {string} hex - Hexadecimal string to get emoji from
 * @returns {string} - Single emoji
 */
export const hexToEmoji = (hex: string, version: Version): string => {
    const int = parseInt(hex, 16);
    const emojiId = Math.ceil(int % emojis[version].length);

    return emojis[version][emojiId];
};

const sha256Regex = new RegExp(/^[A-Fa-f0-9]{64}$/);
/**
 * Tests if a string is a sha256 hash
 * @param {string} str - String to test
 * @returns {boolean} - True if the string is a sha256 has, false otherwise
 */
export const isSha256 = (str: string): boolean => sha256Regex.test(str);
