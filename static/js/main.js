
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let scrollper = () => {
  let docEl = document.documentElement,
      docbody = document.docbody,
      scrolltop = docEl['scrollTop'] || docbody['scrollTop'],
      scrollbot = (docEl['scrollHeight'] || docbody['scrollHeight'])- window.innerHeight,
      scrollpercent = scrolltop / scrollbot * 100 + '%';

      document.getElementById('progressbar').style.setProperty('--scrollamount',scrollpercent);
}

document.addEventListener('scroll',scrollper);