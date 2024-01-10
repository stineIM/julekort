function createCard() {
    let header = document.getElementById("header"); 
    let greeting = document.getElementById("greeting"); 
    let from = document.getElementById("from"); 
    let image = document.getElementById("image"); 
    let backgroundColor = document.getElementById("bkgColor"); 
    let fontColor = document.getElementById("fontColor"); 

    if (image.value == 1) {
        image = "tree.jpg"; 
    }
    else if (image.value == 2) {
        image = "santa.jpg";
    }
    else if (image.value == 3) {
        image = "krans.jpg";
    }

    
    document.getElementById("card").style.backgroundImage = "url(" + image + ")"; 
    document.getElementById("cardHeader").innerText = header.value;
    
    document.getElementById("cardGreeting").innerText = greeting.value; 
    document.getElementById("cardFrom").innerText = from.value; 
    document.getElementById("cardImage").src = "images/" + image; 
    
    document.getElementById("create").style.display = "none";
    
    document.getElementById("card").style.display = "block"; 
    document.getElementById("printBtn").style.display = "inline";
    document.getElementById("newBtn").style.display = "inline";

    document.getElementById("cardHeader").style.color = fontColor.value;
    document.getElementById("cardGreeting").style.color = fontColor.value;
    document.getElementById("fromGreeting").style.color = fontColor.value;
    document.getElementById("cardFrom").style.color = fontColor.value;
    
    document.getElementById("heiheih").style.color = "blue"; 
}

function newCard() {
    window.location = "index.html";
}
