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
    
    document.getElementById('progressbar').style.setProperty('--scrollamount',scrollpercent);
  }
  
  document.addEventListener('scroll',scrollper);
  