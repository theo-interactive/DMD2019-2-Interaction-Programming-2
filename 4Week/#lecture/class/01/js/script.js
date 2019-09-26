//함수.
//함수 선언.
//getName(); //에러...
function getName() {
    /////////////
    ///코드 작성///   
    /////////////
}
//함수 호출.
getName();
//함수 선언이 되고 난 이후에 호출이 가능하다.
//절차지향 언어의 순서 확인.

//리터럴 함수 선언.(메서드형 함수)
var getMessage = function() {
    /////////////
    ///코드 작성///
    /////////////
    
    //반환.
    //return 0;
    //return "안녕하세요";
    //return false;
    //return { name : "김용원" };
    //return [0,1,2,3,4,5];
    //함수가 완료됨.
    //return false;
    //var i = 0;
    var i = 0;
    /*
    if(i != 0) {
        return false;
    }else{
        return true;
    }
    */
    switch(i) {
        case 0 :
            return true;
            break;
        case 1 :
            return false;
            break;
        default:
            return " ";
            break;
    }
}
getMessage();
//함수 반환.
//함수는 호출시에 항상 값을 반환한다.
var msg = getMessage();
console.log(msg); // -> undefined.
//반환되는 값이 없을 경우, 기본값으로 undefined 를 반환한다.
//스코프(범위)
//전역변수(global).
var number = 0;
var check = function() {
    //지역변수(local).
    //var number = 1;
    //함수 내부에서 전역변수와 같은 명칭으로 선언을 한 경우, 완전히 다른 변수로 인식.
    //지역변수.
    //var string = "";
    //console.log(string);
    //전역변수의 값을 변경. (선언 var 이 되었는지 확인)
    number = 3;
};
//check();
number = 2;
check();
console.log(number);
//console.log(string);
//매개변수
// var orderCoffee = function(name, menu, cups) {
//name - undefined, menu - undefined, cups - undefined.
var orderCoffee = function(name = "김용원", menu = "아메리카노", cups = 1) { //기본값을 넣어놓을 수 있다.   
    // console.log(name, menu, cups);
    var msg = name + "님, 주문하신 " + menu + " " + cups + "잔 나왔습니다.";
    return msg;
};
//함수에는 함수를 생성하면서 포함되는 변수를 만들 수 있다. - 매개변수.
//function(param1, param2, param3, ..... ) {}
//orderCoffee(); //아직 매개변수에 지정된 값이 없는 상태. 
var order = orderCoffee(); //호출시 매개변수 기본값이 출력된다.
console.log(order);
order = orderCoffee("지동환"); //호출시 매개변수를 포함하면 해당 부분의 값이 변경된다.
console.log(order);
order = orderCoffee("정지은", "카페라떼", 3); //호출시 해당하는 매개변수의 값이 변경된다.
console.log(order);
order = orderCoffee("신은빈", "참이슬", 4, "감사합니다."); //호출시 해당 부분의 매개변수가 없을 경우 탈락.
console.log(order);