console.log('과제 제출용');
//Answer 1.

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

//Answer 2.

console.log('Quest 2');
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
// console.log(cars);
for(var i = 3; i >= 0; i--){
    // console.log(i);
    console.log(cars[i]);
}


//Answer 3.

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


//Answer 4.

console.log('Quest 4');
var orders = { name : ['오창열'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
for( var i = 0; i < orders.coffee.length ; i++){
    // console.log(i);
    // console.log(orders.coffee[i]);
    console.log(orders.name + ' 님, 주문하신 '+orders.coffee[i]+' 1잔 나왔습니다.');
}

//Answer 5.

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
