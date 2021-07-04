const questions = document.querySelectorAll('.question-container__question');

const questionsArray = [...questions];

console.log(questions);
console.log(questionsArray);//probando si anda

questions.forEach( question => question.addEventListener('click', desplegarParrafos);

function desplegarParrafos(e) {

    let index = questionsArray.findIndex(el => el.innerText == e.target.innerText );    
    let answer = e.target.nextElementSibling;
    let arrowIcon = e.target.childNodes[1];

    if (answer.style.display === 'block') 
    { 
        e.target.style.fontWeight = '400';
        arrowIcon.classList.remove('arrow-icon--active');
        answer.style.display = 'none';
    } 
    else 
    {
        e.target.style.fontWeight = '700';
        arrowIcon.classList.add('arrow-icon--active');
        answer.style.display = 'block';
    };

    replegarParrafos(index); //Con esta funcion repliego los parrafos para que no me queden todos abiertos.
}

function replegarParrafos(index){

    questionsArray.forEach (question => {
      
        if ( (question.style.fontWeight==='700') && (questionsArray.indexOf(question) !== index) ) 
        {
            question.style.fontWeight = '400';
            question.childNodes[1].classList.remove('arrow-icon--active');
            question.nextElementSibling.style.display='none';
        };
    }
    
    );
}
