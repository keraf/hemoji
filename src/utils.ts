import emojis, { Version } from './emojis';

/**
 * Split a string in a given number chunks
 * @param {string} str - Source string
 * @param {number} size - Number of chunks
 * @returns {string[]} - Chunks
 */
export const splitStringInChunks = (str: string, num = 4): string[] => {
    let pos = 0;
    const chunks = [];
    const size = Math.floor(str.length / num);
    for (let i = 0; i < num; i++) {
        const end = i === num - 1 ? undefined : pos + size;
        chunks.push(str.slice(pos, end));
        pos = end;
    }

    return chunks;
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
