const quiz = [
  {
    question: 'あゆたぬきの好きな食べ物は？',
    answers: ['すし',
    '牡蠣',
    '春菊',
    '担々麺'
    ],
    correct: 'すし'
  }, {
    question: 'あゆたぬきの出身地は？',
    answers: ['三軒茶屋',
    '愛知県名古屋市',
    '埼玉県',
    '長崎県'
    ],
    correct: '長崎県'

  },{
    question: 'あゆたぬきの好きなキャラクターは？',
    answers: ['ちいかわ',
    'おぱんちゅうさぎ',
    'クロミ',
    'マイメロディ'
    ],
    correct: 'クロミ'

  },{
    question: 'あゆたぬきの嫌いなラッパーは？',
    answers: ['晋平太',
    '鎮座DOPENESS',
    'スシボーイズ',
    'KID FRESINO'
    ],
    correct: '晋平太'

  },{
    question: 'あゆたぬきの年齢は？',
    answers: ['３０歳',
    '２１歳✊',
    '２６歳',
    '２７歳'
    ],
    correct: '２６歳'
  },{
    question: 'あゆたぬきが今一番行きたいところは？',
    answers: ['温泉',
    '韓国',
    'バラ園',
    '回転寿司'
    ],
    correct: '回転寿司'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解❤︎')
    score++;
  }else {
    window.alert('不正解')
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();

  } else {
    // 問題数がもうなければこちらを実行
     window.alert('♡終了♡あなたの正解数は...' + score + '/' + quizLength + 'です❗️お疲れ様でした♡');

  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
   handlerIndex++;
}

