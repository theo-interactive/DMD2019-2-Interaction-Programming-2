// console.log('script load');

//Answer 1.

        var selectors = {
               number : 2
            };
            selectors.string = '';
            selectors.dom = ['header'];
            selectors.dom.push('main', 'footer');
            delete selectors.string;
            console.log(selectors);
            
//Answer 2.

        var cars = ['Hyendai', 'kia', 'samsung', 'GM'];
            var _cars = '';
            for (var i = cars.length - 1; i >= 0; i--){
                _cars += cars[i];
            if(i > 0) {
                _cars +=', ';
                }
            }
            console.log(_cars);
    
//Answer 3.

    //...문제 이해가 잘 안됩니다.....

//Answer 4.

        function orderCoffee(name, menu, cups){
            return name + '고객님, 주문하신 ' + menu + ', ' + cups + ' 잔 나왔습니다.'; 
        }
            var coffee = orderCoffee('라떼 시키신', '아메리카노', 3, '감사합니다');
        console.log(coffee);
    
//Answer 5.
    
        function id(){
        var Identity = 
        {
            Name : '백지연',
            Age : '23',
            Phone : '010-6627-7942',
            Job : '학생',
            Email : 'joy095123@gmail.com',
            School : '계원예술대학교'
        }
            console.log(Identity); 
        }    
        id();

        var result = "";
        var Interesting = ['영화보기','책읽기','10cm'];
            for(var i=0; i<=Interesting.length-1;i++){
                if(i<Interesting.length-1){
                    result += Interesting[i] + ', '
                }
                else if(i=Interesting.length-1){
                    result += Interesting[i]
                }
        }

        console.log('저는 ' + result + '에 흥미가 있습니다.');