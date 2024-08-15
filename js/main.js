function OnOffLight() {
    var body = document.querySelector("body");
    if (body.className == "night") {
        document.querySelector("#beam").style.visibility = "hidden";
        setTimeout(() => {document.querySelector("#beam").style.visibility = "visible";}, 50);
        setTimeout(() => {document.querySelector("#beam").style.visibility = "hidden";}, 150);
        setTimeout(() =>{
            body.classList.add("day");
            body.classList.remove("night");
        }, 320);
    } else {
        document.querySelector("#beam").style.visibility = "visible";
        setTimeout(() => {document.querySelector("#beam").style.visibility = "hidden";}, 50);
        setTimeout(() => {document.querySelector("#beam").style.visibility = "visible";}, 150);
        setTimeout(() =>{
            body.classList.add("night");
            body.classList.remove("day");
        }, 320);
    };
};