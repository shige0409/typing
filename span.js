(function(){
  'use strict';
  let word = 'int main void{}';
  let location = 0;
  let target = document.getElementById('target');
  for(let i = 0; i < word.length; i++) {
    let span = document.createElement('span');
    span.textContent = word[i];
    target.appendChild(span);
  }
  window.addEventListener('keydown', function(e){
    if(e.key === word[location]) {
      //console.log(target.childNodes[location+1]);
      target.childNodes[location+1].classList.add('good');
      location++;
    }
  }, false);
})();
