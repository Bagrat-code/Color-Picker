
// document.getElementsByTagName("body")[0].style.backgroundColor="brown";

let choixCouleur = document.getElementById("body")

choixCouleur.addEventListener("change", (e) => {
    console.log(e.currentTarget.value)
    document.body.style.backgroundColor = e.currentTarget.value
});



