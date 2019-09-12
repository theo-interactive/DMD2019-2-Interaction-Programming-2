console.log('load');

//선언.
//변수. 상수.
//var , let, const
//ECMASscript6(ES6) 규약
/*
// 형식 : var 변수명 = 값
var foo = 1;
console.log(typeof foo); // 변수의 데이터 타입
//-----------------숫자타입
var foo = 'string'
console.log(typeof foo);
//----------------- 문자타입
var foo = {name: 'apple', number:1}
console.log(foo, typeof foo);
console.log(foo.constructor.name); //Object
//----------------- 오브젝트타입
var foo = ['apple','orange','cherry'];
console.log(foo, typeof foo);
//-----------------object 오브젝트타입. 하지만 배열로 인식되어야 함.
console.log(foo.constructor.name) //Array
console.log(foo.constructor.name.toLowerCase()); //array

//-----------------string.toLowerCase(); 문자열을 소문자로 변경
//-----------------string.toUpperCase(); 문자열을 대문자로 변경
//-----------------오브젝트 타입 중 배열인지 확인하는 방법
var foo = [1,2,3,4];
//-----------------오브젝트,배열에는 여러가지 데이터가 입력 가능하다.
*/

/*
//let
//let 상수 = 값;
//-----------------var foo = 1; let과 함께 선언되면 오류가 뜬다.
let foo = 1;
//console.log(typeof foo);
console.log('1',foo);
foo = 2;
console.log('2',foo);
//let foo = 3;
//console.log('3', foo)
//-----------------let은 선언이 1번만 가능하다 값의 변경은 가능

//상수선언 const = 값
const bar = 1;
console.log('1',bar);
//const bar = 2;
//console.log('2',bar);

//-----------------const는 선언과 값을 지정하는것이 변경 불가능.
//참조형
*/

/*
const bar = [1,2,3,4];
//-----------------배열 상수 선언.
//----------------- bar = [1,2,3,4,5] ; 타입에러가 난다.
bar.push(5);
bar.push(6);
bar[0] = 10;
bar[1] = 13;
console.log(bar);
//-----------------값 자체를 변경하는 것을 불가 데이터 타입에 따라 메서드를 이용하여 값 변경은 가능/

//object
var obj = new Object();
//-----------------빈 객체가 생성
//console.log(obj);

var obj = {};
console.log(obj);
//-----------------객체를 생성하는 2가지 방법
//-----------------property 속성.
//객체. 속성 = 속성값;
obj.name = "지동환";
obj.email = "donaj97;"
obj.job="학생";
obj.greeting="hihi";
obj.number = 1;
obj. group = {number:1, name :"그룹"};
obj.category = [1,2,3,4];

console.log(obj);
//-----------------객체는 여러가지 타입의 데이터를 담을 수 있다

obj = {
        "name_ko" : '지동환',
        "name_en" : 'jee',
        name : "지동환",
        email : "donaj97",
        job:"학생",
        greeting:"hihi",
        number : 1,
        group : {number:1, name :"그룹"},
        category : [1,2,3,4]
}
console.log(obj);
console.log(obj.name_ko);
console.log(obj['name_en']);
console.log(obj.group);

//-----------------객체에서 속성을 가지고 있는지 체크.
//-----------------가지고 있다면-true, 없다면 false

console.log(obj.hasOwnProperty('greeting')); //true
console.log(obj.hasOwnProperty('hello'));//false

//----------------- 객체에서 속성을 삭제
delete obj.group;
delete obj.category;
console.log(obj);
//----------------- 함수도 객체에 놓을 수 있다.
obj.say = function() {
    console.log('hello!');
    return false;
}
//----------------- 객체에 있는 메서드 호출
obj.say();*/

//----------------- Array 배열
// var arr = new Array();
// console.log(arr);
//----------------- 빈 배열이 생성.
//var arr = [];
//console.log(arr)
//----------------- 빈 배열이 생성. 두가지 방법임
var car = ['Hyundai','Kia', 'Gm'];
console.log(car);
//----------------- Array 의 메서드
//----------------- 배열의 마지막 부분에 값을 추가. //push('값','값')
car.push('Samsung');
console.log(car);
car.unshift('Benz');
console.log(car);

console.log(car.length);

//----------------- 마지막 값 제거
car.pop();
console.log(car);
//----------------- 배열 첫을 값 제거
car.shift();
console.log(car);

car[4]= 'BMW';
console.log(car);
//----------------- 값을 변경
car[0]='Tesla';
console.log(car);
car.splice(3,1,'Audi'); //몇 번째에서 몇개를 지우고 무엇을 집어넣을지 
console.log(car);
//----------------- 배열의 값을 문자열로 출력.

var message = car.join(); //array.join() '값,값,값............'
message = car.join('. .'); //array.join(', , ,')  '값,  , 값, ,'
console.log(message);
//----------------- 배열의 순서를 반대로 변경. array reverse().
var _car = car.reverse();// 원본은 그대로 두고 새로운 변수에 복제
_car.reverse();//배열의 순서 순서를 반대로 변경
console.log(_car);


var selectors = new Object();
selectors.number = 2;
selectors.string = '';
selectors.dom = ["header"];
selectors.dom.push('main','footer');
delete selectors.string;
console.log(selectors);

//loop 반복문.
//for,while//for......in forEach, for.....of
//break, continue

//for(초기; 반복조건; 반복시 실행되는 코드(증감))
for(var i = 0; i<=10; i++){
    console.log(i)
    document.write("반복문 실행:" +i + '<br/>')
}

//while(조건) 반복해서 실행되는 코드 코드가 끝난후 증감 

var i = 10;
while(i>=1){
    document.write("while 실행"+ i + "<br/>")
    i--;
}

var count = 0;
var sum = 0;
while(count < 10){
    //sum = sum + count;
    sum +=count;
    count++;
}

console.log(sum);

//for 중첩
for(var i = 0; i<10; i++){
    for(var j = 0; j<10; j++){
        console.log('i : '+ i + ', j :');
    }
}

//for....in
//for(변수 in 객체) 반복해서 실행되는 코드,  변수-내부에서 사용가능한 변수

var cars = {
    "Hyundai" : "현대",
    "Kia" : '기아',
    'Saumsung' : '삼성'
};
var _cars = [];
for(var car in cars){
    console.log(car);// 속성명
    console.log(cars[car]);//속성값
    _cars.push(cars[car]);
}

var cars = ["Hyundai", "kia", "Samsung"];
cars.forEach(function(name){
    console.log(name);
});
//function 함수.
//함수형, 리터럴, 즉시실행x
//함수 반환.
//매개변수.