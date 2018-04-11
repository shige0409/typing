// let lang = new Language('html');
var words = [];

window.addEventListener('hashchange', function() {
  let urls = location.hash.split('/');
  let mainPage = document.getElementById('main-page');
  let mainChildren = mainPage.children;
  for (let child of mainChildren) {
    // urlによって表紙する言語コンテンツを決める
    if (child.id === urls[1]) {
      child.classList.remove('hide');
    } else {
      child.classList.add('hide');
    }
  }
  //言語によって単語を変える
  if (urls[1] === 'typing') {
    words = getWords(urls[2]);
  }
},
false);

function getWords(url) {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(xml.readyState === 4 && xml.status === 200) {
      words = JSON.parse(xml.responseText);
    }
  }
  xml.open('GET', `./wordsJson/${url}.json`);
  xml.send();
}
