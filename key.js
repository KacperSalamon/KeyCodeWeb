const main = document.getElementById("main");

window.addEventListener("keydown", (event) => {

    main.innerHTML = `<div id="letter">${event.key === "" ? "Space" : event.key}<small>key</small></div>
    <div id="letter">${event.keyCode}<small>keyCode</small></div>
    <div id="letter">${event.code}<small>code</small></div>
    `
});