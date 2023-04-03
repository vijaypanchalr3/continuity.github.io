let scrollper = () => {
  let docEl = document.documentElement,
  docbod = document.docbody,
  scrolltop = docEl['scrollTop'] || docbod['scrollTop'],
  scrollbot = (docEl['scrollHeight'] || docbod['scrollHeight'])- window.innerHeight,
  scrollamount = scrolltop / scrollbot
  scrollpercent = scrollamount * 100 + '%';
  if (scrollamount > 0.1) {
    document.querySelector('.goto-top').classList.add('none')
  } else {document.querySelector('.goto-top').classList.remove('none')}
  document.getElementById('progressbar').style.setProperty('--scrollamount',scrollpercent);
}

document.addEventListener('scroll',scrollper);

// const navtoggle = document.querySelector('.nav-toggle');
// const navlinks = document.querySelectorAll('.home-nav-link');
// navtoggle.addEventListener('click', ()=> {
//   document.body.classList.toggle('nav-open')
// })
// navlinks.forEach(link => {
//   link.addEventListener('click',() => {
//     document.body.classList.remove('nav-open');
//   })
// })

function copy(that){
  var inp =document.createElement('input');
  document.body.appendChild(inp)
  inp.value =that.textContent
  inp.select();
  document.execCommand('copy',false);
  inp.remove();
  }

/* dark theme toggle */
const themeToggle = document.querySelector('.theme-toggle');
