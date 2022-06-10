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
    console.log(arraytext);
    let keypad = [[1,2,3],[4,5,6],[7,8,9]];

    

}