console.log('load');


// Answer 1
// 1 , 2
var selectors = {number : 2};

// 3
selectors.string = " ";

// 4 , 5
selectors.dom = ['header'];

// 6
selectors.dom.push('main','footer');
// console.log(selectors);

//7
delete selectors.string;

//8
selectors.say = function(){
     console.log(selectors);
     return false;
}
selectors.say();


// Answer 2
// 1
var cars = ['Hyundai' , 'Kia' , 'Samsung' , 'GM'];
// 2 , 3
for(var i = cars.length-1; i>=0; i--){
     console.log(cars[i]);
}

// Answer 3
// 1 , 2
for(var n = 1; n <= 5; n++){
     console.log(n);
     document.write(n + '<br/>');
}


// Answer 4
// 1
var order = { 
     name : ['김민경'] , 
     coffee:['아메리카노' , '에스프레소' , '카페라떼']
};
// 2
for(var p = 0; p <= order.coffee.length; p++){
     console.log(order.name + '님, 주문하신' + order.coffee[p] + '1잔 나왔습니다' );
};



// Answer 5
console.log('자기소개');

function me(){
     var intro = {
          이름 : '김민경',
          학번 : 21861014,
          번호 : '01088295499',
          email: 'mingangz99@naver.com',
          진로희망 : '프론트 엔드 개발자',       
     }
     console.log(intro);
}
me();

var result = "";
var hobby = ['음악감상','문화생활','아이돌덕질','악세서리 만들기','게임하기'];
for(var m=0;m<=hobby.length-1;m++){
     if(m<hobby.length-1){
          result += hobby[m] + ', '
     }
     else if(m=hobby.length-1){
          result += hobby[m]
     }
}
console.log('제 취미는 ' + result + '입니다')
console.log("한 학기동안 잘 부탁드립니다 ♥")




