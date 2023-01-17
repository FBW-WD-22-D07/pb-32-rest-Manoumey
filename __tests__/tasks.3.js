const rewire = require("rewire");

describe('3. `howManyArgs.js`', () => {
    it("Should return the number of Arguments passed", () => {
        const howManyArgs = rewire('../howManyArgs.js');
        const howManyArgsFunc = howManyArgs.__get__("howManyArgs");
        expect(howManyArgsFunc()).toEqual(0);
        expect(howManyArgsFunc(1, false, "hello")).toEqual(3);
        expect(howManyArgsFunc("better")).toEqual(1);
    });
});