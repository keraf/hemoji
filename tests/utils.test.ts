/* eslint-disable prettier/prettier */
import { hexToEmoji, splitStringInChunks, isSha256 } from '../src/utils';

describe('hexToEmoji', () => {
    it('v1 works', () => {
        expect(hexToEmoji('000000', 'v1')).toEqual('⤴️');
        expect(hexToEmoji('123456', 'v1')).toEqual('💚');
        expect(hexToEmoji('abcdef', 'v1')).toEqual('🔽');
        expect(hexToEmoji('ffffff', 'v1')).toEqual('🙆');
    });
});

describe('splitStringInChunks', () => {
    it('works', () => {
        expect(splitStringInChunks('test', 4)).toEqual(['t', 'e', 's', 't']);
        expect(splitStringInChunks('test', 3)).toEqual(['t', 'e', 'st']);
        expect(splitStringInChunks('test', 2)).toEqual(['te', 'st']);
        expect(splitStringInChunks('test', 1)).toEqual(['test']);
    });
});

describe('isSha256', () => {
    it('works', () => {
        expect(isSha256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')).toBe(true);
        expect(isSha256('ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff')).toBe(false);
        expect(isSha256('098f6bcd4621d373cade4e832627b4f6')).toBe(false);
        expect(isSha256('d87f7e0c')).toBe(false);
    });
});
