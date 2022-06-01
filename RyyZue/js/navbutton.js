
const button = document.querySelector("#btn-icon");
const navbar = document.querySelector(".nav-items");

button.addEventListener('click', event => {

    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
           navbar.style.display = "none";
    }
});

window.addEventListener('resize', function(event){
    if(window.innerWidth >= 993)
        navbar.style.display = "block";
    else
        navbar.style.display = "none";
});
