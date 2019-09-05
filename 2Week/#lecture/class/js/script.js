//console.log('script load');

//선언.
//변수, 상수.
//var, let, const
//ECMAScript6(ES6) 규약.

/*
//var
//형식 : var 변수명 = 값;
var foo = 1;
console.log(typeof foo); //변수의 데이터 타입은?
// -> number 숫자타입.
var foo = 'apple';
console.log(typeof foo);
// -> string 문자열타입.
var foo = {name: 'apple', number: 1};
console.log(foo, typeof foo);
console.log(foo.constructor.name); //Object
// -> object 오브젝트타입.
var foo = ['apple', 'orange', 'cherry'];
console.log(foo, typeof foo);
// -> object 오브젝트타입. but 배열로 인식되어야 함.
console.log(foo.constructor.name); //Array
console.log(foo.constructor.name.toLowerCase()); //array
//string.toLowerCase(); - 문자열을 소문자로 변경.
//string.toUpperCase(); - 문자열을 대문자로 변경.
//오브젝트 타입 중 배열인지 확인하는 방법.
var foo = [1,2,3,4];
//오브젝트, 배열에는 여러가지 데이터가 입력가능하다.
*/

/*
//let
//let 상수 = 값;
// var foo = 1;
let foo = 1;
//console.log(typeof foo);
console.log('1', foo);
foo = 2;
console.log('2', foo);
//let foo = 3;
//console.log('3', foo);
//선언은 1번만. 값의 변경은 가능.

//const 상수선언 = 값.
const bar = 1;
console.log('1', bar);
// const bar = 2;
bar = 2;
console.log('2', bar);
//선언은 1번만. 값은 선언할 때만 가능, 이후 변경은 불가.
//참조형(readonly).
*/

/*
const bar = [1,2,3,4];
//배열 상수 선언.
//bar = [1,2,3,4,5]; //타입에러.
bar.push(5);
bar.push(6);
bar[0] = 10;
bar[2] = 20;
console.log(bar);
//값 전체를 변경하는 것을 불가.
//데이터 타입에 따라 메서드를 이용하여 값 변경은 가능.
*/

//Object 객체.
// var obj = new Object();
//빈 객체가 생성.
// console.log(obj);
/*
var obj = {};
// console.log(obj);
//객체를 생성하는 2가지 방법.
//property 속성.
//객체.속성 = 속성값;
obj.name = '김용원';
obj.email = 'rh@102labs.com';
obj.job = '교수';
obj.greeting = '안녕하세요.';
obj.number = 1;
obj.group = { number : 1, name : '그룹' };
obj.category = [1,2,3,4];
console.log(obj);
//객체는 여러 타입의 데이터를 담을 수 있다.
*/

//선언하면서 값을 할당.
var obj = {
  'name_ko' : '김용원',
  'name_en' : 'Yongwon Kim',
  email : 'rh@102labs.com',
  job : '교수',
  greeting : '안녕하세요.',
  number : 1,
  group : { number : 1, name : '그룹' },
  category : [1,2,3,4]
}
console.log(obj);
//속성값을 찾는 방법.
console.log(obj.name_ko);
console.log(obj['name_en']);
console.log(obj.group);
//객체에서 속성을 가지고 있는지 체크.
//가지고 있다면 - true. 없다면 - false.
console.log(obj.hasOwnProperty('greeting')); //true.
console.log(obj.hasOwnProperty('hello')); //false.
//객체에서 속성을 삭제.
delete obj.group;
delete obj['category'];
console.log(obj);
//함수(메서드)도 객체에 넣을 수 있다.
obj.say = function() {
    console.log('Hello!');
    return false;
}
//객체에 있는 메서드를 호출.
obj.say();

//Array 배열.