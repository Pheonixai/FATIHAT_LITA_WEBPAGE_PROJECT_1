const select1 = document.getElementById('select1');

const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

const featuresText = document.getElementById("features");


featuresText.addEventListener("mouseover", ()=>{
    select1.style.display = "block";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
    featuresText.style.color = "black";
})

featuresText.addEventListener("mouseout", ()=>{
    // select1.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    featuresText.style.color = "gray";
    setTimeout(() => {
        select1.style.display = 'none';
      }, 50);
})

const companyText = document.getElementById("company");

const select2 = document.getElementById('select2');

companyText.addEventListener("mouseover", ()=>{
    select2.style.display = "block";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
    companyText.style.color = "black";
})

companyText.addEventListener("mouseout", ()=>{
    // select1.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    companyText.style.color = "gray";
    setTimeout(() => {
        select2.style.display = 'none';
      }, 50);
})

// menu

const menuIcon = document.getElementById('menu-icon');
const mainSection = document.getElementById('main-section');
const mobileMenu = document.getElementById("mobile-menu");
const mobileParent = document.getElementById("mobile-parent");
console.log(mobileParent);


console.log(menuIcon, mainSection, mobileMenu);
menuIcon.addEventListener("click", ()=>{
    mainSection.className = "transparent";
    mobileMenu.style.display = "block";
})