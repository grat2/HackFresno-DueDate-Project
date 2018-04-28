//file is a text file
function getDate(file) {
    var fs = require("fs");
    var text = fs.readFileSync("./mytext.txt");
    var textByLine = text.split("\n");
    var line;
    var foundDate = false;
    var foundAssignment = false;
    var str;
    var assignment;
    var date = [];
    var assignmentWords = ["assignment", "project", "homework", "problem", "question"];
    var dateNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
                    "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    for(str in textByLine) {
        line = str.split(" ");
        var word, compWord;
        for(word in line) {
            for(compWord in assignmentWords) {
                if(compWord == word) {
                    foundAssignment = true;
                    assignment = word;
                }
            }
            word = word.split("/");
            if(word.length == 3 && foundAssignment == false) {
                var i;
                //get date from word if a date is found
                for(i = 0; i < 12; i++) {
                    if(word[0] == dateNums[i]) {
                        date[0] = word[0];
                        break;
                    }
                }
                for(i in dateNums) {
                    if(word[1] == i) {
                        date[1] = word[1];
                    }
                    if(word[2] == i) {
                        date[2] = word[2];
                    }
                }
            }
        }
    }
}
