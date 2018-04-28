//file is a text file
function getDate(file) {
    var fs = require("fs");
    var text = fs.readFileSync("./mytext.txt");
    var textByLine = text.split("\n");
    var line;
    var foundDate = false;
    var foundAssignment = false;
    var str;
    var assignmentWords = ["assignment", "project", "homework", "problem", "question"];
    for(str in textByLine) {
        line = str.split(" ");
        var word, compWord;
        for(word in line) {
            for(compWord in assignmentWords) {
                if(compWord == word) {
                    foundAssignment = true;
                }
            }
        }
    }
}
