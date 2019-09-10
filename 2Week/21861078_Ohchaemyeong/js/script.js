console.log('로드');
//1번
var selectors ={};
selectors.number = 2
selectors.string = ' '
selectors.dom =['header']
selectors.dom.push('main','footer');
delete selectors.string
console.log(selectors);

//2번
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
cars.reverse();
for(var i =0; i <=3; i++){
console.log(cars[i]);
}

//3번
//문제가 무슨 말인지 잘 모르겠습니다 ㅠㅜ


//4번
var orders = { name : ['오채명'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
for( var j = 0; j < orders.coffee.length ; j++){
    console.log(orders.name + ' 님, 주문하신 '+orders.coffee[j]+' 1잔 나왔습니다.');
}



//5번
 me = {
     name : '오채명',
     age : 21,
     num : 21861078,
     phn : '010-3334-9633'
 }
 console.log('저는 '+ me.name + ' 입니다. 제 나이는 ' + me.age + '살 입니다. 제 학번은 '
                +me.num +'입니다. 제 번호는 ' + me.phn + '입니다.');


var re = '';
var like = ['샤이니', '게임', '전시회 관람', '만들기', '그림그리기', '맛있는것^^'];
for (var k=0; k<= like.length-1; k++){
    if(k<like.length-1){
        re += like[k] + ',  '
   }
   
}
console.log('저는 '+ like + '을 좋아합니다.');
