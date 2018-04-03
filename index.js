(function(){
  'use strict';

  var words = [
    `puts('hello')`,
    `class Person{}`,
    'python',
    'go',
    'a pple',
    'html',
    'css',
    'javascript',
    'php',
    'ruby',
    'node',
    'react',
    'angular',
    'ember'
  ];
  var currentWord ;
  var currentLocation ;
  var score ;
  var miss ;
  var timer;
  var target = document.getElementById('target');
  var scoreLabel = document.getElementById('score');
  var missLabel = document.getElementById('miss');
  var timerLabel = document.getElementById('timer');
  var timerID;

  function init() {
    currentWord = 'click start';
    currentLocation = 0;
    score = 0;
    miss = 0;
    timer = 100;
    target.innerHTML = currentWord;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    timerLabel.textContent = timer;
  }

  init();

  function setTarget() {
    currentWord = words[Math.floor(Math.random() * words.length )];
    target.textContent = currentWord;
    currentLocation = 0;
  }

  function startTimer() {
    timerID = setTimeout(function(){
      timerLabel.textContent = --timer;
      if (timer === 0) {
        alert('game finish');
        clearTimeout(timerID);
        init();
        return;
      }
      startTimer();
    }, 1000);
  }

  window.addEventListener('click', function(){
    setTarget();
    startTimer();
  });
  window.addEventListener('keydown', function(e){
    if(e.shiftKey){
      e.preventDefault();
    }
    if (e.key === currentWord[currentLocation]) {
      currentLocation++;
      var placeholder = '';
      for(var i = 0; i < currentLocation; i++){
        placeholder += '_';
      }
      target.textContent = placeholder + currentWord.substring(currentLocation);
      scoreLabel.textContent = ++score;
      if (currentLocation === currentWord.length) {
        setTarget();
      }
    }
    else {
      if(!e.shiftKey){
      missLabel.textContent = ++miss;
      }
    }
  });
})();
