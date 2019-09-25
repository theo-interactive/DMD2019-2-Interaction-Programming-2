var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
    console.log('check');
//Quest 1.
/*
모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
*/
//Answer 1.
$('li').addClass('active');

//Quest 2.
/*
문서내의 a 요소이면서 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
*/
//Answer 2.
$('a.type-2').addClass('current');
  
//Quest 3.
/*
문서내의 a 요소이면서 URL 링크 속성값이 있는 노드를 선택하고, 해당 요소에 underline 클래스를 추가합니다.
*/ 
//Answer 3.
// $('a[href^="http://"]').addClass('.underline');   
$('a[href^="http://"]').addClass('underline');

//Quest 4.
/*
문서내의 li 요소이면서 data-role 속성이 list 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
*/
//Answer 4.
$("li[data-role=list]").addClass('role');  

//Quest 5.
/*
menu 아이디를 가진 nav 요소를 선택하고, open 클래스를 삭제합니다.
*/
//Answer 5.
$('nav#menu').removeClass('open');

//Quest 6.
/*
content 클래스를 가진 section 요소 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
*/
//Answer 6.
console.log("%c Answer 6.", logStyle);
console.log($(document.getElementById("radio-list")).length);

//Quest 7.
/*
type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
*/
//Answer 7.

//Quest 8.
/*
아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
*/
//Answer 8.

//Quest 9.
/*
‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
*/
//Answer 9.
console.log("%c Answer 9.", logStyle);


//Quest 10.
/*
아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
*/
//Answer 10.


//Quest 11.
/*
sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후, 1) 자식 노드 a 요소에 emphasis 클래스 / 2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
*/
//Answer 11.

});
})(jQuery);