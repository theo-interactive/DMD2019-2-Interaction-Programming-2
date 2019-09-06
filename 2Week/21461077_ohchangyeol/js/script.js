console.log('과제 제출용');
// ### Quest 1.

// 1. selectors 라는 이름을 가진 객체를 생성합니다.
// 2. number 프로퍼티를 갖고 있으며 그 값은 2 (number type) 입니다.
// 3. string 프로퍼티를 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
// 4. selectors 객체에 dom 프로퍼티 배열을 추가하고 ‘header’ 문자열 원소를 할당합니다.
// 5. selectors 객체의 dom 배열 프로퍼티에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
// 6. selectors 객체의 string 프로퍼티를 삭제합니다.
// 7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.

console.log('Quest 1');
var selectors = {number : 2};
// console.log(selectors);
selectors.string = '';
selectors.dom = ['header'];
// console.log(selectors);
selectors.dom.push('main');
selectors.dom.splice(2, 0, 'footer');
delete selectors.string;
console.log(selectors);

// ### Quest 2.

// 1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언합니다.
// 2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
// 3. console.log 메서드를 이용해서 cars 를 출력합니다.

console.log('Quest 2');
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
// console.log(cars);
for(var i = 3; i >= 0; i--){
    // console.log(i);
    console.log(cars[i]);
}


// ### Quest 3.

// 1. 전역변수 document 의 프로퍼티 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
// 2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.

console.log('Quest 3');
// console.log(typeof document);
// console.log(document.constructor.name);
// console.log(document);
// console.log(document.length);
// var property = ['head','body'];
// for(var i = 0; i<property.length; i++){
//     // console.log(i);
//     console.log(property[i]);
// console.log(document.property[i]);
// }
// console.log(document.head);
// console.log(document.property[i]);
// console.log(document)

for(var i = 0 ; i < 5 ; i ++){
    document.write(i);
    console.log(i);
}
// 이해가 가지 않습니다....


// ### Quest 4.

// 1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언합니다.
// 2. orders 객체의 coffee 프로퍼티 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
// 3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”

console.log('Quest 4');
var orders = { name : ['오창열'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
for( var i = 0; i < orders.coffee.length ; i++){
    // console.log(i);
    // console.log(orders.coffee[i]);
    console.log(orders.name + ' 님, 주문하신 '+orders.coffee[i]+' 1잔 나왔습니다.');
}

// ### Quest 5.

// 1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
// 2. 자신의 소개를 해주세요.

console.log('Quest 5');

var Profile={
    name:'오창열',
    age : 25,
    live : '양주',
    hobby : function(){
        var arr = ['드라마보기','음악듣기','코인노래방가기','혼술','멍때리기'];
        var _arr=[];
        for(var i =0 ; i <=arr.length-1; i++){
            console.log(i);
            _arr.push(arr[i]);
        }
        var mas = _arr.join();
        return mas;
    }
}
console.log('안녕하세여 저는 '+Profile.name+' 입니다. \n'+'저의 나이는 '+ Profile.age + '고, 살고있는 곳은 ' + Profile.live +"입니다. \n그리고 제 취미는 " +Profile.hobby() +'입니다.');
