 /*@keyframes animTitre {
    from {
        nav.style.opacity = "0";
        sectionAnim.style.position = "absolute";
        sectionAnim.style.backgroundColor = "#fff";
        sectionAnim.style.height="100vh";
        sectionAnim.style.width="100vh";
        titre.style.zIndex ="100";
    }

    100
}*/

let titre = document.querySelector("header h1");
let sectionAnim = document.querySelector("header");
let nav = document.getElementById("menu");

var animHeader;
var animTitre;
var animNav;

titre.style.opacity = "0";
nav.style.opacity = "0";

animHeader = () => {
    console.log("allo");
    sectionAnim.animate([
        {
            transform : "scale(10)",
            backgroundColor : "#fff"
        },
        {
            transform : "scale(1)",
            backgroundColor : "rgb(105, 108, 138)"
        }
    ],
    {
        duration: 5000
    });
    /*animHeader.addEventListener("animationend", function(){
        sectionAnim.style.animationFillMode = "forwards";
    })*/

    setTimeout(animTitre, 3000);
}

animTitre = () => {
    console.log("allo");
    sectionAnim.animate([
        {
            opacity : "0",
            color : "rgb(105, 108, 138)"
        },
        {
            opacity: "100",
            color : "white"
        }
    ],
    {
        duration: 2000
    });
    setTimeout(animNav, 3000);
}

animNav = () => {
    console.log("allo");
    sectionAnim.animate([
        {
            opacity : "0"
        },
        {
            opacity: "100"
        }
    ],
    {
        duration: 2000
    });
}


window.addEventListener("load", animHeader);
