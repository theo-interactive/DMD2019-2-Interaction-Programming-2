//Quest01

var selectors = {};

selectors = {
    number : 2
}

selectors.string = '';

selectors.dom = ['header'];

selectors.dom.push('main', 'footer');

delete selectors.string;

console.log(selectors);

// ### Quest 2.

// 1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언합니다.
// 2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
// 3. console.log 메서드를 이용해서 cars 를 출력합니다.

var cars = ['Hyundai','Kia','Samsung','GM' ];
cars.reverse();
console.log(cars);


// ### Quest 3.

// 1. 전역변수 document 의 프로퍼티 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
// 2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.


// var doc = window.document;
// for(var _doc in doc){
//     console.log(doc[_doc]);
// }
//모르겠습니다..ㅠㅠ




// ### Quest 4.

// 1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언합니다.
// 2. orders 객체의 coffee 프로퍼티 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
// 3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”

var orders = {
    name : ['Gwon jae hyuk'],
    coffee : ['아메리카노', '에스프레소', '카페라떼']
};
// console.log(orders.coffee[1]);

for(var i = 0;i < 3; i++) {
    console.log(orders.name + '님, 주문하신 ' +  orders.coffee[i] + ' 1잔 나왔습니다.');

}

// ### Quest 5.

// 1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
// 2. 자신의 소개를 해주세요.


var obj = {
    'name' : '권재혁',
    'age' : 25,
    'email' : 'allofjae@gmail.com',
    'like' : ['LOL', '에이드', '향초', '소고기']
};

function introducing(){
    for(var i in obj){
        console.log(i +  ' : ' + obj[i]);   
    }
    for(var i = 0; i <= obj.like.length; i++){
            var likeList = '';
            likeList += obj.like.join(',');
    }
    console.log('제가 좋아하는 것은 ' + likeList + ' 입니다.');
}
introducing();
