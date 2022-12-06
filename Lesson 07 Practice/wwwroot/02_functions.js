function ReverseNumber() {

    var n = Number(prompt("Enter some number ", "123456"));

    n = n + ""; // 'convert' n to string

    var array1 = n.split("");

    var array2 = array1.reverse();

    var finalstring = array2.join("");

    finalNumber = Number(finalstring);

    alert(finalNumber);

}

function ReverseNumber_1() {

    alert(prompt("Enter some number ", "123456").split("").reverse().join(""));
}

function Alphabetize() {

    alert(prompt("Enter some text ", "webmaster").split("").sort().join(""));
}

function NumberOfOccurances() {
    var text = prompt("Enter some number ", "occurrences");

    var uchars = {};

    for (var i = 0; i < text.length; i++) {
        
        if (isNaN(uchars[text[i]])) {
            uchars[text[i]] = 1;
        }
        else {
            uchars[text[i]] = uchars[text[i]] + 1;
        }
    }

    console.log(uchars);
}

function FirstNotRepeated(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }

    console.log(result);

    return result;
}