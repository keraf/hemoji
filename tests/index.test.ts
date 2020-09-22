import hemoji from '../src/index';

describe('decimalToEmoji', () => {
    it('hash', () => {
        expect(hemoji('test')).toEqual('🪓 🗝️ 🐊 🌼 🦳 🖼️');
        expect(hemoji('test', { length: 6, spacer: '' })).toEqual('🪓🗝️🐊🌼🦳🖼️');
        expect(hemoji('test', { length: 4 })).toEqual('🤱 🆑 🏺 🔦');
        expect(hemoji('test', { length: 8 })).toEqual('💾 💮 😘 🙎 🏃 👦 🤝 🚥');
    });
});
