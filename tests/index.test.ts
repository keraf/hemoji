import hemoji from '../src/index';

describe('hemoji', () => {
    it('no params', () => {
        expect(hemoji('test')).toEqual('🦇 ⛩️ 🔪 🗒️ 🥫 👼');
        expect(hemoji('one')).toEqual('🦽 🏴 😳 🥬 ⭕ ⛅');
        expect(hemoji('two')).toEqual('🥠 🦩 🦞 👼 🦨 🐖');
        expect(hemoji('test', { length: 4 })).toEqual('🤱 🆑 🏺 🔦');
        expect(hemoji('test', { length: 8 })).toEqual('💾 💮 😘 🙎 🏃 👦 🤝 🚥');
    });

    it('spacer', () => {
        expect(hemoji('test', { spacer: '-' })).toEqual('🦇-⛩️-🔪-🗒️-🥫-👼');
    });

    it('length', () => {
        for (let i = 1; i < 33; i++) {
            const hash = hemoji('test', { length: i, spacer: '-' });
            expect(hash.split('-').length).toEqual(i);
        }
    });
});
