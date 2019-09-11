/*console.log("script load");

//선언.
//변수, 상수
//var, let, const
//ECMAscript(ES6) 규약.

//var 
//형식 : var 변수명 = 값;
var foo = 1;
console.log(typeof foo); //변수의 데이터 타입은?
// -> number 숫자타입.
var foo = "apple";
console.log(typeof foo);
// -> string 문자열타입
var foo = {name: "apple", number:1};
console.log(foo.constructor.name, typeof foo); //Object
// -> object 오브젝트타입
var foo = ["apple", "orange", "cherry"];
console.log(foo, typeof foo);
// -> object 오브젝트타입. but 배열로 인식되어야 함
console.log(foo.constructor.name); //Array
console.log(foo.constructor.name.toLowerCase()); //array
//string.toLowerCase(); - 문자열을 소문자로 변경
//string.toUpperCase(); - 문자열을 대문자로 변경
//오브젝트 타입 중 배열인지 확인하는 방법.
var foo = [1,2,3,4];
//오브젝트, 배열에는 여러가지 데이터가 입력가능하다.
*/

/*
//let
//let 상수 = 값;
//var foo = 1;
let foo = 1;
console.log('1', foo); 
foo = 2;
console.log('2', foo);
// let foo = 3;
// console.log("3", foo); 에러남
//let 선언은 1번만. 값의 변경만 가능하다.*/

/*
//const
//const 상수선언 = 값;
const bar = 1;
console.log('1', bar);
// const bar = 2;
bar = 2;
console.log('2', bar); 
//선언은 1번만. 값은 선언할 때만 가능, 이후 변경은 불가
//창조형(readonly).*/

/*
const bar = [1,2,3,4];
//배열 상수 선언
//bar = [1,2,3,4,5]; //타입에러.
bar.push(6);
bar.push(7);
bar[0] = 10;
bar[2] = 20;
console.log(bar); //(6) [10, 2, 20, 4, 6, 7]
//값 전체를 변경하는 것을 불가. 데이터 타입에 따라 메서드(push)를 이용하여 값 변경은 가능*/

/*
//Object 객체
//var obj = new Object();
//반 객체가 생성.
//console.log(obj);
var obj = {};
//console.log(obj);
//객체를 생성하는 2가지 방법
//property 속성.
//객체.속성 = 속성값;
obj.name = "이유진";
obj.email = 'qkfhwkd12@naver.com' 
obj.job = '학생'
obj.number = 1;
obj.group = {number : 1, name : "그룹"};
obj.category = [1,2,3,4]
console.log(obj);
//객체는 여러 타입의 데이터를 담을 수 있다.

//선언하면서 값을 할당
var obj = {
    "name_ko" : "이유진",
    "name_en" : "LeeYuJin",
    email : 'qkfhwkd12@naver.com',
    job : "학생",
    number : 1,
    group : {number : 1, name : "그룹"},
    category : [1,2,3,4]
}
console.log(obj);
console.log(obj.name_ko);
console.log(obj['name_en']);
console.log(obj.group);
console.log(obj.group.number);
console.log(obj.hasOwnProperty('group')); //true있음
console.log(obj.hasOwnProperty('hello')); //false없음
delete obj['category'];
console.log(obj);

//함수(메서드)도 객체에 넣을 수 있다.
obj.say = function(){
    console.log('Hello!');
    return false;
}
//객체에 있는 메서드를 호출.
obj.say();

//Array 배열
var arr = new Array();
console.log(arr);
//빈 배열을 생성
var arr = [];
console.log(arr);
//빈 배열이 생성
//배열을 생성하는 2가지 방법
var arr = [1,2,3,4,5];
//console.log(arr);
var car = ["현대", '기아', '쥐엠'];
console.log(car);
//Array 의 메서드
//추가
car.push('삼성');
console.log(car);
//베열의 첫부분에 값을 추가. //Array.unshift('값','값');
car.unshift('벤츠');
console.log(car);
//배열의 개수.
console.log(car.length);
car.pop();
console.log(car);
//배열의 첫 값을 제거 - Array.pop();
car.shift();
console.log(car);
//0 1 2
//추가
car[3] = 'BMW';
//car[4] = 'BMW';
//0 1 2 3 4
console.log(car);
//3 번째는 값이 없고 4 번째에 값이 할당.
//값을 변경
car[0] = 'Tesla';
console.log(car);
//치환.
car.splice[2,00,'Audi'];
//array.splice(시작할 순서, 삭제할 개수, 추가할것);
console.log(car);
//배열의 값을 문자열로출력. - array.join(), array.join('값이 값 사이에 들어감')
var message = car.join(); //array.join() '값,값,값 ...';
message = car.join('. .');
console.log(message);
//배열의 순서를 반대로 변경 - array.reverse();
var _car = car; //원본은 그대로 두고 새로운 변수에 복제.
_car.reverse(); //배열의 순서를 반대로 변경
console.log(_car);*/


//문제
/*
var selectors = {
    number : 2
};
selectors.string = " ";
selectors.dom = ["header"];
selectors.dom.push("main","footer");
delete selectors.string;


console.log(selectors);*/


//loop 반복문
//for, while, for...in forEach, for...of
//break, continue.

// for(초기화; 반복조건;반복시 실행되는 코드){
//     반복해서 실행되는 코드
// }

// for(var i =0; i < 10; i++){
//     console.log(i);
// }

/*var i = 1;
for(i; i <= 10; i++){
    console.log(i);
    //코드의 반복실행
    document.write('반복문 실행 : ' + 1 + '<br/>');
}

//while
// while(조건){
//     반복해서 실행되는 코드
//     코드가 끝난후 증감... -> 탈출가능 ㅇㅁㅇ
// }
var i = 1;
while(i >= 1){
    document.write('반복문 실행 : ' + 1 + '<br/>');
    i--; //*********** 증감에 대한 코드를 내부에 작성.
}

var count = 0;
var sum = 0;
while(count < 10){
    //sum = sum + count;
    sum =+ count;
    count++;
}
console.log(sum);

//for 중첩.
for(i; i < 10; i++){
    for(var j = 0; j < 10; j++){
        console.log("i : " + i + "j : " + j);
    }
}

//for...in
//for(변수 in 객체){
//    반복해서 실행되는 코드
//    변수 - 내부에서 사용가능한 변수
//}

var cars = {
    "Hyundai" : "현대",
    "Kia" : "기아",
    "Samsung" : "삼성"
};

var _cars = [];
for(var car in cars){
    console.log(car); //속성명
    console.log(cars[car]); //속성값
    //cars["Hyundai"]
    //cars["Kia"]
    //cars["]Samsung"]
    _cars.push(cars[car]); //_cars 배열에 속성값만 추가.
    console.log(_cars);
}

var cars = ["Hyundai", "Kia", "Samsung"];
cars.forEach(function(value){
    console.log(value);
})

//function 함수.
//함수형, 리터럴, 즉시실행X.
//함수 반환
//매개변수.
*/

