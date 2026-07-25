document.querySelector("#li2").
addEventListener("click", (event) => {
    console.log("Item-2 clicked-1");
})

document.querySelector("#li2").
addEventListener("click", (event) => {
    console.log("Item-2 clicked-2");
    // event.stopImmediatePropagation();
    // event.stopPropagation();
})

document.querySelector("#li2").
addEventListener("click", (event) => {
    console.log("Item-2 clicked-3");
})

document.querySelector("ul").
addEventListener("click", (event) => {
    console.log("UL clicked");
    event.stopPropagation();
})

document.querySelector("div").
addEventListener("click", (event) => {
    console.log("DIV clicked");
})

document.querySelector("section").
addEventListener("click", (event) => {
    console.log("SECTION clicked");
})

document.querySelector("body").
addEventListener("click", (event) => {
    console.log("BODY clicked");
})


let ul = document.querySelector('ul');
ul.addEventListener("click", (event) => {
    if(event.target != ul)
    {
        event.target.remove();
    }
})

document.querySelector("button")
.addEventListener("click", (event) => {
    let nli = document.createElement("li");
    nli.innerText = "New Item";
    ul.append(nli);
})


