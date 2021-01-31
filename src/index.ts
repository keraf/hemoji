import sha256 from 'crypto-js/sha256';
import { splitStringInChunks, hexToEmoji, isSha256 } from './utils';
import { Version } from './emojis';

export type Options = {
    version?: Version; // Version of emoji set
    length?: number; // Length of hash (min: 1, max: 32)
    spacer?: string; // Spacing character
};

const defaultOptions: Options = {
    version: 'v1',
    length: 6,
    spacer: ' ',
};

const MIN_LENGTH = 1;
const MAX_LENGTH = 32;

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

    if (opt.length < MIN_LENGTH) {
        opt.length = MIN_LENGTH;
    } else if (opt.length > MAX_LENGTH) {
        opt.length = MAX_LENGTH;
    }

    const sha = isSha256(input) ? input : sha256(input).toString();
    const chunks = splitStringInChunks(sha, opt.length);
    const emojis = chunks.map((c) => hexToEmoji(c, opt.version));

    return emojis.join(opt.spacer);
};
