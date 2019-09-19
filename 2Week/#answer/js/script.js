var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";

//Answer 1.
/*
1. selectors 라는 이름을 가진 객체를 생성합니다.
2. number 프로퍼티를 갖고 있으며 그 값은 2 (number type) 입니다.
3. string 프로퍼티를 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
4. selectors 객체에 dom 프로퍼티 배열을 추가하고 ‘header’ 문자열 원소를 할당합니다.
5. selectors 객체의 dom 배열 프로퍼티에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
6. selectors 객체의 string 프로퍼티를 삭제합니다.
7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.
*/
console.log("%c Answer 1. ", logStyle);
var selectors = {
    number : 2
}
selectors.string = " ";
// selectors["string"] = " ";
selectors.dom = ["header"];
// selectors["dom"] = ["header"];
selectors.dom.push("main", "footer");
// selectors.dom.splice(1, 0, "main", "footer");
delete selectors.string;
// delete selectors["string"];
console.log(selectors);


//Answer 2.
/*
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
console.log("%c Answer 2. ", logStyle);
var cars = ["Hyundai", "Kia", "Samsung", "GM"];
/*
for(var i = 0; i <= cars.length - 1; i++) {
    console.log(i, cars[i]);
}
*/
/*
for(var i = cars.length - 1; i >= 0; i--) {
    console.log(i, cars[i]);
}
*/
cars.reverse();
//console.log(cars);
for(var i = 0; i <= cars.length - 1; i++) {
    console.log(i, cars[i]);
}
for(var index in cars) {
    console.log(cars[index]);
}
for(var car of cars) {
    console.log(car);
}
cars.forEach(function(car, index) {
    console.log(car, index);
});
cars.forEach(function(car) {
    console.log(car);
});


//Answer 3.
/*
1. 전역변수 document 의 프로퍼티 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
console.log("%c Answer 3. ", logStyle);
//document, window, screen ... 브라우저가 실행될 때 포함하고 있는 내장변수.
console.log(document);
console.log(typeof document);
for(var key in document) {
    console.log(key, document[key]);
}


//Answer 4.
/*
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언합니다.
2. orders 객체의 coffee 프로퍼티 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
console.log("%c Answer 4. ", logStyle);
var orders = { name : ["김용원"], coffee : ["아메리카노", "에스프레소", "카페라떼"] };
for(var i = 0; i <= orders.coffee.length - 1; i++){
    var name = orders.name[0];
    var coffee = orders.coffee[i];
    var msg = name + " 님, 주문하신 " + coffee + " 1잔 나왔습니다.";
    console.log(msg);
}


//Answer 5.
/*
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 해주세요.
*/
console.log("%c Answer 5. ", logStyle);