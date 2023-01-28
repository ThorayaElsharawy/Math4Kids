const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const options = [option1, option2, option3]

const audio = document.getElementById('myAudio')

let answer = 0


function generateEquation() {
    audio.pause()

    let allAnswers = []
    let genNum1 = Math.floor(Math.random() * 13);
    let genNum2 = Math.floor(Math.random() * 13);
    let dummyAnswer1 = Math.floor(Math.random() * 13);
    let dummyAnswer2 = Math.floor(Math.random() * 13);

    answer = genNum1 - genNum2
    console.log(answer);

    while(true) {

        if(dummyAnswer1 !== dummyAnswer2 && dummyAnswer1 !== answer && dummyAnswer2 !== answer) {
            break
        }

        dummyAnswer1 = Math.floor(Math.random() * 13);
        dummyAnswer2 = Math.floor(Math.random() * 13);
    }

    

    num1.innerText = genNum1;
    num2.innerText = genNum2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    allAnswers.sort(() => Math.random() - 0.5);

    for(let i = 0; i < allAnswers.length; i++) {
        options[i].innerText = allAnswers[i] 
    }
}

options.forEach(option => {
    option.addEventListener('click', () => {
        if(+option.innerHTML === answer) {
            generateEquation()
        } else {
            audio.play()
        }
    })
})
generateEquation()