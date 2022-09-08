const { adds } = require('./test')

describe('adds', () => {
    test('no a,fails', () => {
        const results = adds(56);
        expect(results).toBeTruthy();
    })

})