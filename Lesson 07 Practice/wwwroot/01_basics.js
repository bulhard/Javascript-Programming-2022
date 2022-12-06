function CalculateTriangleArea(side1, side2, side3) {

    var s = (side1 + side2 + side3) / 2;

    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

    return area;
}

function CalculateIt() {
    var side1 = Number(prompt("Enter side1", ""));
    var side2 = Number(prompt("Enter side2", ""));
    var side3 = Number(prompt("Enter side3", ""));

    var area = CalculateTriangleArea(side1, side2, side3);

    alert(area);
}

function RotateString() {
    var text = prompt("Enter some string", "w3resource");

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        console.clear();
        console.log(text);
    }, 100);
}

function MultiDiv() {
    var a = Number(prompt("Enter A", ""));
    var b = Number(prompt("Enter B", ""));

    var multi = a * b;
    var div = a / b;

    alert("a * b = " + multi);

    alert("a / b = " + div);
}

function MaxNumber() {
    var a = Number(prompt("Enter A", ""));
    var b = Number(prompt("Enter B", ""));
    var c = Number(prompt("Enter C", ""));

    var max;

    if (a > b) {
        max = a;
    }
    else {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    alert("Max number is " + max);
}