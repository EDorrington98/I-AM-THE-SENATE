"use strict";

function createPalp() {
    let obj = document.createElement("div");
    obj.id = "object";
    obj.style.position = "absolute"
    let image = document.createElement("img");
    image.style.width = "100%";
    image.src = "https://i.ytimg.com/vi/_XWomD6TazQ/maxresdefault.jpg";

    let para = document.createElement("p");
    para.innerText = " It's treason then... ";
    para.style.color = "red";
    para.style.fontFamily = 'Franklin Gothic Medium';

    obj.appendChild(image);
    obj.appendChild(para);
    document.getElementById("container").appendChild(obj);

    let body = document.body
    body.addEventListener("mousemove", function (e) {

        obj.style.top = e.clientY + "px";
        obj.style.left = e.clientX + "px";
    });
}
createPalp();

function createWindu() {
    let windu = document.createElement("div");
    windu.id = "windu";
    windu.style.position = "absolute"
    let winduSpin = document.createElement("div");
    winduSpin.id = "winduSpin";

    let image = document.createElement("img");
    image.style.width = "100%";
    image.src = "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768";

    let para = document.createElement("p");
    para.innerText = " The senate will decide your fate! ";
    para.style.color = "purple";
    para.style.fontFamily = 'Franklin Gothic Medium';
    windu.appendChild(winduSpin)
    windu.appendChild(para);
    winduSpin.appendChild(image);
    winduSpin.appendChild(para);
    document.getElementById("container").appendChild(windu);
    let positionWindu = () => {
        windu.style.top = Math.random() * screen.height - 100 + "px";
        windu.style.left = Math.random() * screen.width - 100 + "px";
    }
    setInterval(() => {
        positionWindu();
    }, 800);

}
createWindu();

function button() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function heIsABig(){
    let big = document.createElement("div");
    big.id = "resize";
    big.style.position = "absolute"
    let image = document.createElement("img");
    image.style.width = "100%";
    image.src = "https://pics.me.me/you-two-careful-he-is-a-big-35776797.png";

}
    function zoomin() {
        var myImg = document.getElementById("resize");
        var currWidth = myImg.clientWidth;
        var currHeight = myImg.clientHeight;
        myImg.style.width = (currWidth + 50) + "px";
        myImg.style.height = (currHeight + 50) + "px";
    }
    function zoomout() {
        var myImg = document.getElementById("resize");
        var currWidth = myImg.clientWidth;
        var currHeight = myImg.clientHeight;
        myImg.style.width = (currWidth - 50) + "px";
        myImg.style.height = (currHeight - 50) + "px";
    }
    body.addEventListener("keydown", event => {
        if (event.keyCode == 38) {
            zoomin();
        } else if (event.keyCode == 40) {
            zoomout();
        }    
    })
    function myMove(tieID) {
        var elem = document.getElementById(tieID);
        var pos = -100;
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == screen.clientX) {
            clearInterval(id);
            let remove = document.getElementById(tieID);
            remove.parentNode.removeChild(remove);
          } else {
            pos+=2;
            elem.style.left = pos + 'px';
          }
        }
      }
    var count = 0;
    body.addEventListener("click", (e) => {
        let myImg = document.createElement("img");
        myImg.src = "tie.png";
        myImg.alt = "tie";
        myImg.className = "bottomTie";
        myImg.id = ("bottomTie" + count);
        count++;
        body.append(myImg);
        myMove(myImg.id);
    })


// function createList(){
// let listy = document.createElement("div");
// listy.id = "list";
// let head = document.createElement("h1");
// head.className = "heady";
// head.innerText = "listy boi";
// let unord = document.createElement("ul");
// unord.id = "unordy";
// for(let i = 0; i<10; i++){
//     let listItem = document.createElement("li");
//     listItem.innerText = "HELLO"+(i+1);
//     unord.append(listItem);
// }
// listy.appendChild(head);
// listy.append(unord);
// document.body.append(listy);
// }
// createList();