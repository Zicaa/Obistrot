const navigation = document.querySelector("header");

window.addEventListener("scroll",()=> {

    if(window.scrollY>30){
        navigation.classList.add("anim-nav");
    }else {
        navigation.classList.remove("anim-nav");
    }
})

const navbar=document.querySelector("main-navbar");
const links=document.querySelectorAll("a"); 
console.log(navbar); 

links.forEach(a => {
  a.addEventListener('click', function(){
      links.forEach(a=>a.classList.remove("active"));
      this.classList.add("active");
  });

});