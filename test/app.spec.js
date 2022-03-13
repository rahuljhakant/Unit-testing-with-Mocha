const { add, sub } = require('../src/app');
const { expect } = require('chai');

// BDD style
describe('Suite 1', () => {
    afterEach(() => {
        console.log('afterEach');
    })

    beforeEach(() => {
        console.log('beforeEach');
    })

    after(() => {
        console.log('after');
    })

    before(() => {
        console.log('before');
    })

    it(`add 2 and should sum to 5`, () => {
        expect(add(2, 3)).to.equal(5);
    })

    it(`add 3 and 3 and should sum to 6`, () => {
        expect(add(3, 3)).to.equal(6);
    })

    it(`sub 2 and 3 and should sum to -1`, () => {
        expect(sub(2, 3)).to.equal(-1);
    })
})



// TDD style

// const { suite, test, suiteSetup, suiteTeardown, setup, teardown } = require('mocha');

// suite(`Suite 2`, () => {

//     suiteSetup(() => {
//         console.log('suiteSetup');
//     });

//     suiteTeardown(() => {
//         console.log('suiteTeardown');
//     });

//     setup(() => {
//         console.log('setup');
//     });

//     teardown(() => {
//         console.log('teardown');
//     });

//     test(`add 2 and 3 and should sum to 5`, () => {
//         expect(add(2, 3)).to.equal(5);
//     })

//     test(`add 3 and 3 and should sum to 6`, () => {
//         expect(add(3, 3)).to.equal(6);
//     })

//     test(`sub 2 and 3 and should sum to -1`, () => {
//         expect(sub(2, 3)).to.equal(-1);
//     })
// })