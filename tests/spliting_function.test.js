const split = require('../splitting_function').pull_third_characters;

test('does it split?', () => {
    expect(split("iamyourlyftdriver")).toBe("muydv");
})