document.getElementById('btn-clas').addEventListener('click', function () {
    const started = document.getElementById('start')
    started.classList.remove('hidden')
    const firstItem = document.getElementById('first-section')
    firstItem.classList.add('hidden')
    continoue()
})

document.addEventListener('keyup', function (e) {
    const player = e.key.toLowerCase();
    const expekted = document.getElementById('randomA').innerText
    const result = expekted.toLowerCase()
    console.log(player, result)
    let score = document.getElementById('score')
    if (player === result) {
        console.log('you have got a point')
        console.log('you have', expekted)
        const text = score.innerText;
        let parse = parseInt(text);
        const sourov = parse=parse+1;
        score.innerText=sourov
        
        removeBackgroundColorById(result)
        continoue()

    } else {
        const failure = document.getElementById('life')
        const failureText = failure.innerText;
        let convertNumber = parseInt(failureText);
        const answer = convertNumber = convertNumber - 1;
        if(answer>=0){
            failure.innerText=answer
        }else{
            const amoung = document.getElementById('resultYou')
            amoung.classList.remove('hidden')
            const game = document.getElementById('start');
            game.classList.add('hidden');

            const yourScore = document.getElementById('yourScore');
            const scoreText = yourScore.innerText;
            const parseScore = parseInt(scoreText)
            const scoreCound = score.innerText
            console.log(scoreCound)
            yourScore.innerText = scoreCound

        }
        

    }
})


//playagin btn 
document.getElementById("playAginbtn").addEventListener('click',function(){
    const end = document.getElementById('resultYou')
    end.classList.add('hidden')
    const first = document.getElementById('first-section')
    first.classList.remove('hidden')
})


function removeBackgroundColorById(element) {
    const ele = document.getElementById(element);
    ele.classList.remove('bg-orange-600')
}

function continoue() {

    const alpabets = 'abcdefghijklmonpqrstuvwxyz'
    const result = alpabets.split('');
    const randomNumber = Math.round(Math.random() * 25)
    const num = result[randomNumber].toUpperCase()
    const randomAlpabetNumber = document.getElementById("randomA");
    const contain = randomAlpabetNumber.innerText = num
    keyborad(contain.toLowerCase())

}


function keyborad(e) {
    const even = document.getElementById(e)
    even.classList.add('bg-orange-600')
}
