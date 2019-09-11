/*Quest 1.
1.selectors 라는 이름을 가진 객체를 생성합니다.
2.number 프로퍼티를 갖고 있으며 그 값은 2 (number type) 입니다.
3.string 프로퍼티를 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
4.selectors 객체에 dom 프로퍼티 배열을 추가하고 ‘header’ 문자열 원소를 할당합니다.
5.selectors 객체의 dom 배열 프로퍼티에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
6.selectors 객체의 string 프로퍼티를 삭제합니다.
7.console.log 메서드를 이용해서 selectors 객체를 출력합니다.*/

var selectors = {
    number : 2
};
selectors.string = " ";
selectors.dom = ["header"];
selectors.dom.push("main","footer");
delete selectors.string;

console.log(selectors);
//'객체' 는 변수명 이라고 생각하면 될듯
///프로퍼티' 는 string이나 dom(배열) 과 같은 특정 의미가 있는 매개체



/*Quest 2.
1.var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언합니다.
2.cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3.console.log 메서드를 이용해서 cars 를 출력합니다.*/

//배열의 순서를 반대로 변경 - array.reverse();

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
cars.reverse();
console.log(cars);



/*Quest 3.
1.전역변수 document 의 프로퍼티 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2.여러가지 방법의 반복문을 이용하여 작성해도 됩니다.*/

var i =1;
for(i = 1; i <= 10; i++){
    // console.log(i); //반복문출력
    document.write(i + '입니다.' + '</br>');
}



/*Quest 4.
1.var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언합니다.
2.orders 객체의 coffee 프로퍼티 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3.문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”*/

var orders = {
    name : '이유진',
    coffee : ['아메리카노', '에스프레소', '카페라떼']
};
for(i = 1; i < 2; i++){
    console.log(orders.name + '님, ' + '주문하신 ' + orders.coffee[2] + ' 1잔 나왔습니다.');
}



/*Quest 5.
1.객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2.자신의 소개를 해주세요.*/

//var , [], for, 함수()
var prof = {
    age : 21
};
prof.name = ['이유진'];
prof.name.push('계원예술대학교', '디지털미디어디자인');
console.log(prof);

var color = ['레드','핑크','블루'];
for(i = 1; i < 2; i++){
    console.log('내가 가장 좋아하는색은 ' + color[1] + ' 입니다.');
}
