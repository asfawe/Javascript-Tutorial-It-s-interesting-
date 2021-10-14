const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked"); // 만약 h1.classList에 clicked가 있으면 clicked를 삭제해주고 없으면 추가 시킨다.
}

h1.addEventListener("click", handleTitleClick);