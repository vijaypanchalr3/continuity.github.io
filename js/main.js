
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


let scrollper = () => {
  let docEl = document.documentElement,
  docbody = document.docbody,
  scrolltop = docEl['scrollTop'] || docbody['scrollTop'],
  scrollbot = (docEl['scrollHeight'] || docbody['scrollHeight'])- window.innerHeight,
  scrollamount = scrolltop / scrollbot
  scrollpercent = scrollamount * 100 + '%';
  // divElement = document.getElementById('page_toc');
  // elemHeight = divElement.offsetHeight;
  // elemupHeight = divElement.offsetTop;
  // if (scrolltop >= (elemupHeight+elemHeight)) {
  //   document.getElementById('navbar').classList.add("none");
  // } else {
  //   document.getElementById('navbar').classList.remove("none");
  // }
  if (scrollamount > 0.1) {
    document.querySelector('.goto-top').classList.add('none')
  } else {document.querySelector('.goto-top').classList.remove('none')}
  document.getElementById('progressbar').style.setProperty('--scrollamount',scrollpercent);
}

document.addEventListener('scroll',scrollper);

const navtoggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelectorAll('.home-nav-link');
navtoggle.addEventListener('click', ()=> {
  document.body.classList.toggle('nav-open')
})
navlinks.forEach(link => {
  link.addEventListener('click',() => {
    document.body.classList.remove('nav-open');
  })
})

