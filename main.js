//on mouseEvent Properties
let obj = document.createElement("div");
obj.id = "object";
obj.style.position="absolute"
let image = document.createElement("img");
image.style.width= "100%";
image.src= "https://i.ytimg.com/vi/_XWomD6TazQ/maxresdefault.jpg";

let para = document.createElement("p");
para.innerText = " I am the senate! ";

obj.appendChild(image);
obj.appendChild(para);

document.getElementById("container").appendChild(obj);

let body = document.body
body.addEventListener("mousemove", function(e) {

    obj.style.top = e.clientY+"px";
    obj.style.left = e.clientX+"px";
});

