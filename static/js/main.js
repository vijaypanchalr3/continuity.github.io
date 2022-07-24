
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

function copy(that){
  var inp =document.createElement('input');
  document.body.appendChild(inp)
  inp.value =that.textContent
  inp.select();
  document.execCommand('copy',false);
  inp.remove();
  }




  function createCopyButton(highlightDiv) {
    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerText = "Copy";
    button.addEventListener("click", () =>
      copyCodeToClipboard(button, highlightDiv)
    );
    addCopyButtonToDom(button, highlightDiv);
  }
  
  async function copyCodeToClipboard(button, highlightDiv) {
    const codeToCopy = highlightDiv.querySelector(".content > :last-child > pre > code")
      .innerText;
    try {
      result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state == "granted" || result.state == "prompt") {
        await navigator.clipboard.writeText(codeToCopy);
      } else {
        copyCodeBlockExecCommand(codeToCopy, highlightDiv);
      }
    } catch (_) {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    } finally {
      codeWasCopied(button);
    }
  }
  
  function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
    const textArea = document.createElement("textArea");
    textArea.contentEditable = "true";
    textArea.readOnly = "false";
    textArea.className = "copyable-text-area";
    textArea.value = codeToCopy;
    highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
    const range = document.createRange();
    range.selectNodeContents(textArea);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textArea.setSelectionRange(0, 999999);
    document.execCommand("copy");
    highlightDiv.removeChild(textArea);
  }
  
  function codeWasCopied(button) {
    button.blur();
    button.innerText = "Copied!";
    setTimeout(function () {
      button.innerText = "Copy";
    }, 2000);
  }
  
  function addCopyButtonToDom(button, highlightDiv) {
    highlightDiv.insertBefore(button, highlightDiv.firstChild);
    const wrapper = document.createElement("div");
    wrapper.className = "highlight-wrapper";
    highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
    wrapper.appendChild(highlightDiv);
  }
  
  document
    .querySelectorAll(".content")
    .forEach((highlightDiv) => createCopyButton(highlightDiv));