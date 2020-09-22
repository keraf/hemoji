import sha256 from 'crypto-js/sha256';
import { splitStringInChunks, hexToEmoji, isSha256 } from './utils';
import { Version } from './emojis';

export type Options = {
    version?: Version; // Version of emoji set
    length?: number; // Length of hash
    spacer?: string; // Spacing character
};

const defaultOptions: Options = {
    version: 'v1',
    length: 6,
    spacer: ' ',
};

/**
 * Turn a string into an emoji hash
 * @param {string} input - String to hash
 * @param {Options} options - Options to tweak the output
 * @return {string} - String of emojis
 */
export default (input: string, options?: Options): string => {
    const opt = {
        ...defaultOptions,
        ...options,
    };

    const sha = isSha256(input) ? input : sha256(input).toString();
    const size = Math.round(sha.length / opt.length);
    const chunks = splitStringInChunks(sha, size);
    const emojis = chunks.map((c) => hexToEmoji(c, opt.version));

    return emojis.join(opt.spacer);
};
