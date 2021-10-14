// const title = document.getElementsByTagName("h1");
const title = document.querySelector(".hello h1"); // querySelector는 element를 css 방식으로 검색할 수 있다. 또 querySelector는 여러개의 클래스들이 있으면 앞에있는 클래스 하나만 출력을 한다. 만약 똑같은 클래스를 다 가져오고 싶으면 querySelectorAll을 사용하면된다.

// querySelector가 아이디를 받을때도 #을 적어줘야 한다. 왜냐하면 css처럼 받아오기 때문이다.
// const title = document.querySelector("#hello");

// 이런식으로!
// const title = document.querySelectorAll(".hello h1");

title.innerText = "Hello";

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);