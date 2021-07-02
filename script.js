const questions = document.querySelectorAll('.question-container__question');

console.log(questions); //probando si anda

questions.forEach( question => question.addEventListener('click', toggle));

function desplegar(e) {

    const answer = e.target.nextElementSibling;
    const arrowIcon = e.target.childNodes[1];
    
    if (answer.style.display === 'block') { 
        e.target.style.color = 'hsl(240, 6%, 50%)';
        arrowIcon.classList.remove('arrow-icon--active');
        answer.style.display = 'none';
    } 
    else 
    {
        e.target.style.color = 'hsl(238, 29%, 16%)';
        arrowIcon.classList.add('arrow-icon--active');
        answer.style.display = 'block';
    };
    
};
