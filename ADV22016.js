document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
    splittext = text.split("\n");
    newtext = splittext.filter(element => {
        return element !== "";
    });
    arraytext = []
    for (i=0;i<newtext.length;i++){
        arraytext.push(newtext[i].split(""));
    }

    let keypad = [[1,2,3],[4,5,6],[7,8,9]];

    

}