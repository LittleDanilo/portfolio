function OnOffLight() {
    var body = document.querySelector("body");
    var light = document.getElementsByClassName("beam");
    if (body.className == "night") {
        body.classList.add("day");
        body.classList.remove("night");
        light.style.visibility = "hiden";

    } else {
        body.classList.add("night");
        body.classList.remove("day");
    };
};