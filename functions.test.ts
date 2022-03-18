const {shuffleArray} = require('./utils')

describe('shuffleArray should do the below', () => {
    test(`test to check if the outcome of shuffleArray is actually an Array`, () => {
        expect(Array.isArray(shuffleArray(["ivan", "nobody"]))).toBe(true)
    }),

    test(`test to check if the returned array contains the first item in the array`, () => {
        expect(shuffleArray(["ivan", "nobody"])).toContain("ivan")
    }),
    //Google searching toContain to check for two values revealed nothing, so I just did a good old repeat.
    test(`test to check if the returned array contains the second item in the array`, () => {
        expect(shuffleArray(["ivan", "nobody"])).toContain("nobody")
    })
})