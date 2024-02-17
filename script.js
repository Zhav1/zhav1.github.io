function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function copyEmail(){
    var el = document.querySelector(".email");
    var downloadButton = document.createElement('i');
    downloadButton.className = "fa-regular fa-copy";
    el.classList.remove("email");
    el.classList.add("email-copied");
    el.textContent = "Email Copied!";
    navigator.clipboard.writeText("qhanakin@gmail.com");
 
    setTimeout(function(){
        el.classList.remove("email-copied");
        el.classList.add("email");
        el.innerHTML = "";
        el.append(downloadButton, " Copy E-Mail");   
     }, 3000);
 }
 function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let tinggi = window.innerHeight;
      let top = reveals[i].getBoundingClientRect().top;
      let visible = 150;
  
      if (top < tinggi - visible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);