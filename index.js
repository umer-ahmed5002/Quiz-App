

let quiz = 
[

    {
        Q : 'How many planets in the earth solor system',
        a : '2 planets',
        b : '8 planets',
        c : '4 planets',
        d : '7 planets',
        ans : 'ans4'
    },

    {
        Q : 'How invert the protron',
        a : 'JJ thomson',
        b : 'Willum Crude',
        c : 'Instyne',
        d : 'Rafay',
        ans : 'ans1'
    },


    {
        Q : 'What is HTML',
        a : 'Styling',
        b : 'Programing',
        c : 'Stachur',
        d : 'Plants',
        ans : 'ans3'
    },

    {
        Q : '75 - 16 * 8',
        a : '582',
        b : '250',
        c : '472',
        d : '650',
        ans : 'ans3'
    }, 

    {
        Q : 'Farmula is H2o.',
        a : 'Plants',
        b : 'Oxygen',
        c : 'Sky',
        d : 'Water',
        ans : 'ans4'
    }

    ]


  let question = document.querySelector('#question')
  let option1 = document.querySelector('#opt1')
  let option2 = document.querySelector('#opt2')
  let option3 = document.querySelector('#opt3')
  let option4 = document.querySelector('#opt4')

  let num = 0;
  let score = 0;
  let myScore = document.querySelector('#showScore')

  let answers = document.querySelectorAll('.options')

  let nextBtn = document.querySelector('#next')

  question.innerHTML = quiz[num].Q;
  option1.innerHTML = quiz[num].a;
  option2.innerHTML = quiz[num].b;
  option3.innerHTML = quiz[num].c;
  option4.innerHTML = quiz[num].d;


  function checkedAns(){
    let ans;
    answers.forEach((curElement)=>{
        if(curElement.checked){
            ans = curElement.id;
            console.log(curElement);
        }
    })
    return ans;
  }
  function disSelect(){
    answers.forEach((customElements)=>{
        customElements.checked = false;
    })
  }

  function next(){

    let checkAns = checkedAns();
    if(checkAns == quiz[num].ans){
        score++;
        
    }

    num++;

    disSelect()

    if(num < quiz.length){

    question.innerHTML = quiz[num].Q;
  option1.innerHTML = quiz[num].a;
  option2.innerHTML = quiz[num].b;
  option3.innerHTML = quiz[num].c;
  option4.innerHTML = quiz[num].d;
    }else{
        myScore.innerHTML = `Your Score ${score}/${quiz.length} <br/><br/>
        <button id="button" onclick="location.reload()">Play Again</button>`
        nextBtn.style.display = "none"
    }
  }