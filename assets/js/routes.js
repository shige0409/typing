var words = [];
window.addEventListener('hashchange', function() {
  let urls = location.hash.split('/');
  //console.log(urls);
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
switch (url) {
  case 'html':
    return [
      [
        '<html><html>', 'HTMLタグ'
      ],
      [
        '<head></head>', 'headタグ'
      ],
      [
        '<header></header>', 'headerタグ'
      ],
      [
        '<body></body>', 'bodyタグ'
      ],
      [
        '<footer></footer>', 'footerタグ'
      ]
    ];
    break;
  case 'css':
    return [
      [
        'color: #fff', '文字の色を白に'
      ],
      [
        'background-color: gray', '背景をグレイに'
      ],
      [
        'border: 1px solid red', '1pxの赤い枠線を引く'
      ]
    ];
    break;
  case 'js':
    return [
      [
        'console.log(name)', '変数nameをコンソールに出力'
      ],
      [
        'document.getElementById(id)', 'idを指定してDOMを得る'
      ],
      [
        'const TAX = 1.08', '定数TAXに1.08を代入'
      ]
    ];
    break;
  case 'php':
    words = {};
    break;
  case 'ruby':
    words = {};
    break;
  case 'python':
    words = {};
    break;
  case 'rails':
    words = {};
    break;
  case 'linux':
    words = {};
    break;
  case 'git':
    words = {};
    break;
  default:
    return [];
    break;
}
}
