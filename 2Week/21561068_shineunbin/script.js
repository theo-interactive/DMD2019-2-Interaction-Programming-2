// Quest 1.
// selectors 라는 이름을 가진 객체를 생성합니다.
// number 프로퍼티를 갖고 있으며 그 값은 2 (number type) 입니다.
// string 프로퍼티를 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
// selectors 객체에 dom 프로퍼티 배열을 추가하고 ‘header’ 문자열 원소를 할당합니다.
// selectors 객체의 dom 배열 프로퍼티에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
// selectors 객체의 string 프로퍼티를 삭제합니다.
// console.log 메서드를 이용해서 selectors 객체를 출력합니다.


var selectors = {
    number: 2
};

selectors.string= "";

selectors.dom = ["header"];

selectors.dom.push("main","footer");

delete selectors.string;

console.log("Quest 1 : " + selectors);

// Quest 2.
// var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언합니다.
// cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
// console.log 메서드를 이용해서 cars 를 출력합니다.


var cars = ["Hyundai", "Kia", "Samsung", "GM"];
cars.reverse();
console.log("Quest 2 : " + cars);

// Quest 3.
// 전역변수 document 의 프로퍼티 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
// 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.

console.log("Quest 3 : ?");


// Quest 4.
// var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언합니다.
// orders 객체의 coffee 프로퍼티 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
// 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”

var orders = { name : ["신은빈"], coffee : ["아메리카노", "에스프레소", "카페라떼"] };
for( var i = 0; i<=orders.coffee.length-1; i++ ){
    console.log("Quest 4 : " + orders.name+ "님, 주문하신 "+orders.coffee[i]+ "1잔 나왔습니다.");
};



// Quest 5.
// 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
// 자신의 소개를 해주세요.


console.log("Quest 5 자기소개 ");
function a(){
     var eunbin = {
        이름 : '신은빈',
        생년월일 : 960419,
        직업 : "대학생",
        계좌번호 : '239-099902-01-014',
        이메일: "qlsdmstls@naver.com",
        진로 : '웹개발자'       
     }
     console.log(eunbin);
}
a();
var result = "";
var food = ['돈까스','돼지국밥','연어'];
for(var i=0;i<=food.length-1;i++){
     if(i<food.length-1){
          result += food[i] + " and "
     }
     else if(i=food.length-1){
          result += food[i] + " 입니다. "
     }
}
console.log("Quest 5 : "+' 좋아하는 음식은 ' + result)
