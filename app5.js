const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color = "blue";
}

function handleMousEnter(){
    h1.innerText = "mouse is here!!";
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone!!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!")
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handelWindwoOnline(){
    alert("ALL GOOOD");
}

h1.addEventListener("click", handleTitleClick);
// title.onClick = handleTitleClick;
h1.addEventListener("mouseenter", handleMousEnter); // 누군가가 마우스를 갔다 대면 handleMousEnter 함수 실행
// title.onmouseenter = handleMousEnter;
h1.addEventListener("mouseleave", handleMouseLeave); // 누군가가 마우스를 title밖에 있다면 handleMouseLeave 함수 실행

window.addEventListener("resize", handleWindowResize); // 화면의 사이즈가 바뀌면 이 handleWindowResize 함수를 실행하라
window.addEventListener("copy", handleWindowCopy); // 복사를 하면 handleWindowCopy함수를 실행해라
window.addEventListener("offline", handleWindowOffline); // 와이파이가 꺼지면 handleWindowOffline 함수를 실행해라.
window.addEventListener("online", handelWindwoOnline); // 와이파이가 다시 연결이 되면 handelWindwoOnline 함수를 실행해라!