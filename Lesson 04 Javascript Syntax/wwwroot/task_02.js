function Calculate() {
    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;
    let c = document.getElementById("numberC").value;

    let arr = [];

    arr[0] = a;
    arr[1] = b;
    arr[2] = c;
    arr[3] = "string data";
    arr[10] = new Date();

    console.log(arr);

    let x = 10;

    let bigger = x > a ? x : a;
    console.log("Comparing " + x + " and " + a + " we found out the " + bigger + " is greater");

    bigger = x > b ? x : b;
    console.log("Comparing " + x + " and " + b + " we found out the " + bigger + " is greater");

    bigger = x > c ? x : c;
    console.log("Comparing " + x + " and " + c + " we found out the " + bigger + " is greater");
}