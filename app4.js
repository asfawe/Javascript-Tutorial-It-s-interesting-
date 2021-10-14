const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMousEnter(){
    title.innerText = "mouse is here!!";
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!!";
    
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMousEnter); // 누군가가 마우스를 갔다 대면 handleMousEnter 함수 실행
title.addEventListener("mouseleave", handleMouseLeave); // 누군가가 마우스를 title밖에 있다면 handleMouseLeave 함수 실행