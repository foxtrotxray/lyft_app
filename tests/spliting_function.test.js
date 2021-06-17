const split = require('../splitting_function').pull_third_characters;

test('does it split?', () => {
    expect(split("iamyourlyftdriver")).toBe("muydv");
    expect(split("brtneh aiinsqm 4xi26svu 3ha4n 4ls8jeqxc nroaeplt14 tcmvre es[ssbwab g0de44")).toBe("this is a secret message");
})
test('does it handle empty strings?', () => {
    expect(split("")).toBe("");
})
test('do special characters mess everything up?', () => {
    expect(split("~!@#$'%'^&*\",.}[]\"[()")).toBe("@'^\"}\")");
})
test('unicode 😭😭😭', () => {
    expect(split("😭😭😭ééé")).toBe("😭é");
})