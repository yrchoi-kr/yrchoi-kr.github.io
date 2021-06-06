
function forclear() {
    document.getElementById("culResult").innerHTML = "0";
    //document.getElementById('id')
    // id에 접근하는 연산자.
    // innerHTML = 접근한 요소의 값을 = 뒤의 값으로 함
}
function reset() {
    var value = document.getElementById("culResult").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("culResult").innerHTML = value;
    }
}
function fordisplay(value) {
    reset()
    document.getElementById("culResult").innerHTML += value;
}
function solve() {
    reset()
    var equation = document.getElementById("culResult").innerHTML;
    var solved = eval(equation);
    // eval(string)
    document.getElementById('culResult').innerHTML = solved;
}
function perc() {
    var value = document.getElementById("culResult").innerHTML;
    value = value / 100;
    document.getElementById("culResult").innerHTML = value;
}