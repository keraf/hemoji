declare const emojis: {
    readonly v1: {
        emoji: string;
        description: string;
    }[];
};
export declare type Version = keyof typeof emojis;
export declare type Options = {
    version?: Version;
    length?: number;
    spacer?: string;
};
declare const _default: (input: string, options?: Options) => string;
/**
 * Turn a string into an emoji hash
 * @param {string} input - String to hash
 * @param {Options} options - Options to tweak the output
 * @return {string} - String of emojis
 */
export default _default;
