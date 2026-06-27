document.getElementById("colorBtn").addEventListener("click", function(){

    this.style.backgroundColor ="green";
    this.innerHTML = "color changed";
});

document.getElementById("textBtn").addEventListener("click", function(){
    document.querySelector("h1").innerHTML ="JavaScript Event Listener Lab";

     document.getElementById("message").innerHTML =
    "The heading has been changed successfully!";
});


document.getElementById("box").addEventListener("mouseover", function(){

    this.style.backgroundColor = "purple";
    this.style.transform = "rotate(45deg) scale(1.2)";

});

document.getElementById("box").addEventListener("mouseout", function(){

    this.style.backgroundColor = "tomato";
    this.style.transform = "rotate(0deg) scale(1)";

});