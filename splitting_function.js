function pull_third_characters(input) {
    var output = "";
    for (i = 0; i <input.length; i++) {
        if ((i + 1) % 3 == 0) {
            output += input[i];
        }
    }
    return output;
}

exports.pull_third_characters = pull_third_characters;