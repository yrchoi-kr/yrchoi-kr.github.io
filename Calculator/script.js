
function forclear() {
    document.getElementById("culResult").innerHTML = "0";
    //document.getElementById('id')
    // getElementById는 전역 Document 객체의 메서드로만 사용 할 수 있음
    // 이유는 ID값은 문서 전체에서 유일해야 하기 때문이며 국지적인 버전을 쓸 이유가 없기 때문
    // id에 접근하는 연산자.
    // innerHTML = 접근한 요소의 값을 = 뒤의 값으로 함
}


// ---------------------계산에 필요한 함수

function reset() {
    var value = document.getElementById("culResult").innerHTML;
    // "culResult라는 id명을 가진 요소들을 불러와 value의 객체를 만든다."
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
      // "culResult라는 id명을 가진 요소들을 불러와 equation의 객체를 만든다."
    var solved = eval(equation);
    // eval(string)
    // String의 계산식을 계산해줌 계산할 수 없다면 String 값 반환
    document.getElementById('culResult').innerHTML = solved;
}

// ---------------------//계산에 필요한 함수

function perc() {
    var value = document.getElementById("culResult").innerHTML;
    value = value / 100;
    document.getElementById("culResult").innerHTML = value;
}