// BACK TO TOP BUTTTON
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MULTIPLE TEXT SCRIPT
let typed = new Typed('.multiple-text', {
  strings: ["a Front-End Developer", "an IT-Specialist"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 4000,
  loop: true
})

