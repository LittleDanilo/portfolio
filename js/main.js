function OnOffLight() {
    var body = document.querySelector("body");
    if (body.className == "night") {
        document.querySelector("#beam").style.opacity = "0%";
        setTimeout(() => {document.querySelector("#beam").style.opacity = "45%"}, 50);
        setTimeout(() => {document.querySelector("#beam").style.opacity = "0%"}, 150);
        setTimeout(() =>{
            body.classList.add("day");
            body.classList.remove("night");
        }, 320);
    } else {
        document.querySelector("#beam").style.opacity = "45%";
        setTimeout(() => {document.querySelector("#beam").style.opacity = "0%";}, 50);
        setTimeout(() => {document.querySelector("#beam").style.opacity = "45%";}, 150);
        setTimeout(() =>{
            body.classList.add("night");
            body.classList.remove("day");
        }, 320);
    };
};