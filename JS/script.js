// // console.dir(document);
// // console.log(document);

//Selectors:
// let heading = document.getElementById('heading');
// console.log(heading);

// let items = document.getElementsByClassName('items');
// console.log(items);
// console.dir(items);

let body = document.querySelector("body");
console.log(body);
console.log(body.innerText);
console.log(body.innerHTML);
// body.innerText = "All Gone";
// console.log(body.innerText);
// body.innerHTML = "<div><h1>Hello Saim</h1><ul><li>Mango<li>Litchi</ul></div>";
let heading = document.querySelector("#heading");
heading.innerText = heading.innerText + " - {Added from JS}";

let boxes = document.querySelectorAll(".box");
for(let box of boxes)
{
    box.innerText = "New Box";
}

//Style:
console.log(boxes[0].getAttribute("class"));
boxes[0].setAttribute("class", "newBox");
boxes[0].style.border = "2px solid black";
boxes[0].style.height = "150px";
boxes[0].style.width = "150px";
boxes[0].style.borderRadius = "15px";
boxes[0].style.display = "flex";
boxes[0].style.justifyContent = "center";   
boxes[0].style.alignItems = "center";
boxes[0].style.backgroundColor = "orange";

//Create and Insert:
let el = document.createElement("div");
let p = document.createElement("p");
p.innerText = "Created From JS";

let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerText = "Mango";
li1.setAttribute("class", "box");
let li2 = document.createElement("li");
li2.innerText = "Guava";
li2.setAttribute("class", "box");
let li3 = document.createElement("li");
li3.innerText = "Watermelon";
li3.classList.add("box");

ul.append(li1, li2, li3);
el.append(p, ul);
body.append(el);

let btn = document.querySelector("#btn");
btn.onmousedown = () => {
    btn.style.backgroundColor = "orange";
};

// btn.onmouseup = () => {
//     btn.style.backgroundColor = "yellow";
// }

btn.addEventListener("mouseup", (evt) => {
    btn.style.backgroundColor = "yellow";
});

let mode=1;
let toggle = () => {
    if(mode===1)
    {
        body.style.backgroundColor = "gray";
        mode=2;
        btn.innerText = "Light Mode";
    }
    else{
        body.style.backgroundColor = "white";
        mode=1;
        btn.innerText = "Dark Mode";

    }
}

btn.addEventListener("click", toggle);



let nBtn = document.querySelector("#enterName");
let input = document.querySelector("#name");
let errorMsg = document.createElement("p");
errorMsg.innerText = "Please enter a name first";
errorMsg.style.color = "red";
errorMsg.style.fontSize = "12px";
errorMsg.style.margin = "0px 0px";
errorMsg.setAttribute("id", "noName");

nBtn.addEventListener("click", () => {
    let name = input.value;
   
    if(name == ""){
        input.before(errorMsg);
    }
    else{
        errorMsg.remove();
        let p = document.querySelector("#pName");
        p.innerText = "Your Name = " + name;
    }
    
})






