function Calculate() {
    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;

    console.log(a + b);
    console.log(a - b);
    console.log(Number(a) + Number(b));

    document.getElementById("numberC").value = Number(a) + Number(b);

    document.getElementById("div1").innerHTML += "<hr />" + a + '+' + b + '=' + (Number(a) + Number(b));
}