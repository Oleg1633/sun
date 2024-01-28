//1. Сделать класс для рисования восхода солнца.//
//2. Сделать класс, который при нажатии отпрыгивает и на нём написано "не трогай меня"//
class Sun {
    
}
function jump() {
    console.log('n');
    console.log(sun);
    sun.style.left = "10px";
    var t= document.createTextNode ("не трогай меня")
    sun.appendChild(t); // прикрепить на страницу, сделать частью конкретного элемента (sun)//
}