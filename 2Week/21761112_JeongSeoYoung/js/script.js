//Answer 1.


var selectors = {}; 
selectors.number = 2; 
selectors.string = ''; 
selectors.dom = ['header']; 
selectors.dom.push('main','footer'); 
delete selectors.string; 
console.log(selectors); 


//Answer 2.

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
cars.reverse();
console.log(cars); 


//Answer 3.

//이해를 못해서 반복문썼습니다 ㅠㅠ

var my = { age : '나이'}
var count = 0;
var sum = 2;
while(count <= 6) {
    
    //sum = sum + count;
    sum += count;
    count++;

}
console.log(my.age + sum);

var want = { future : ['876회 로또 1등','876회 로또 2등','876회 로또 3등'], pray : [' 비나이다 비나이다'] };

for(var i = 0; i < 3; i++){

        console.log(want.future[i] + want.pray  )

}


//Answer 4.

var orders = { name : ['정서영'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
for(var i = 0; i < 3; i++){
console.log(orders.name + '님, 주문하신 '+ orders.coffee[i] + ' 1잔 나왔습니다.')
}

//Answer 5.

var me = {

    name : '정서영',
    Birth : [1997,7,1],
    job : '대학생',
    greeting : '안녕하세요~ 반가워요',
    love : ['방탄소년단','우리집 강아지 별이','가족','친구들']

}


    console.log(me.greeting + ' 제 이름은 ' +  me.name + '입니다! 저의 생년월일은  '+ me.Birth + ' 이고, 제 직업은 현재 '+ me.job + '입니다.')

    for(var i = 0; i < 4; i++){
         console.log( ' 제가 사랑하는 것은 '+ me.love[i] + '입니다.' )
    }