document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
    splittext = text.split("\n");                       //kill all space line
    newtext = splittext.filter(element => {             //kill the empty element 
        return element !== "";
    });
    arraytext = []
    for (i=0;i<newtext.length;i++){
        arraytext.push(newtext[i].split(""));           //split all element in each nested array
    }

    for (j=0;j<arraytext.length;j++){
        let CurrentPosition = 5;                        // each row is independent, reset 5 times after every loop of each row
        for (k=0;k<arraytext[j].length;k++){  //L R D U
            if (CurrentPosition == 1){
                CurrentPosition = process1(arraytext[j][k]);
            }
            else if (CurrentPosition == 2){
                CurrentPosition = process2(arraytext[j][k]);
            }
            else if (CurrentPosition == 3){
                CurrentPosition = process3(arraytext[j][k]);
            }
            else if (CurrentPosition == 4){
                CurrentPosition = process4(arraytext[j][k]);
            }
            else if (CurrentPosition == 5){
                CurrentPosition = process5(arraytext[j][k]);
            }
            else if (CurrentPosition == 6){
                CurrentPosition = process6(arraytext[j][k]);
            }
            else if (CurrentPosition == 7){
                CurrentPosition = process7(arraytext[j][k]);
            }
            else if (CurrentPosition == 8){
                CurrentPosition = process8(arraytext[j][k]);
            }
            else if (CurrentPosition == 9){
                CurrentPosition = process9(arraytext[j][k]);
            }
        }
        console.log(CurrentPosition);
    }

}



function process5(move) {
    if (move == "L") {
        return 4;
    }
    if (move == "U") {
        return 2;
    }
    if (move == "R") {
        return 6;
    }
    if (move == "D") {
        return 8;
    }

}
function process1(move) {
    if (move == "L") {
        return 1;
    }
    if (move == "U") {
        return 1;
    }
    if (move == "R") {
        return 2;
    }
    if (move == "D") {
        return 4;
    }

}
function process2(move) {
    if (move == "L") {
        return 1;
    }
    if (move == "U") {
        return 2;
    }
    if (move == "R") {
        return 3;
    }
    if (move == "D") {
        return 5;
    }

}
function process3(move) {
    if (move == "L") {
        return 2;
    }
    if (move == "U") {
        return 3;
    }
    if (move == "R") {
        return 3;
    }
    if (move == "D") {
        return 6;
    }

}
function process4(move) {
    if (move == "L") {
        return 4;
    }
    if (move == "U") {
        return 1;
    }
    if (move == "R") {
        return 5;
    }
    if (move == "D") {
        return 7;
    }

}

function process6(move) {
    if (move == "L") {
        return 5;
    }
    if (move == "U") {
        return 3;
    }
    if (move == "R") {
        return 6;
    }
    if (move == "D") {
        return 9;
    }

}
function process7(move) {
    if (move == "L") {
        return 7;
    }
    if (move == "U") {
        return 4;
    }
    if (move == "R") {
        return 8;
    }
    if (move == "D") {
        return 7;
    }

}
function process8(move) {
    if (move == "L") {
        return 7;
    }
    if (move == "U") {
        return 5;
    }
    if (move == "R") {
        return 9;
    }
    if (move == "D") {
        return 8;
    }

}
function process9(move) {
    if (move == "L") {
        return 8;
    }
    if (move == "U") {
        return 6;
    }
    if (move == "R") {
        return 9;
    }
    if (move == "D") {
        return 9;
    }

}