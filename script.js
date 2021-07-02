/*variables*/
// const question = document.querySelectorAll(".question-container__question");
// const answer = document.querySelectorAll(".question-container__answer");
// const arrowIcon = document.querySelectorAll(".arrow-icon");

// console.log(question);
// console.log(answer);
// console.log(arrowIcon);

/*eventos y funciones*/

// for (let i = 0 ; i <= question.length; i++) {

//     question[i].addEventListener('click' , 

//     function desplegarRespuesta() {

//         if (question[i].classList.contains("question-container__question--active")) 
//         {
//             question[i].classList.remove("question-container__question--active");
//         } 
//         else 
//         {
//             question[i].classList.add("question-container__question--active");
//         }

//         answer[i].style.display === "block" ? answer[i].style.display = "none" : answer[i].style.display = "block";
        
//         if (arrowIcon[i].classList.contains("arrow-icon--active")) 
//         {
//             arrowIcon[i].classList.remove("arrow-icon--active");
//         } 
//         else 
//         {
//             arrowIcon[i].classList.add("arrow-icon--active");
//         } 
//     }
//   ); 
// };

/*para repasar: foreach, e.target, ¿qué es el event que pasa como parámetro en la función? */

const questions = document.querySelectorAll('.question-container__question');


questions.forEach( question => question.addEventListener('click', toggle));

function toggle(e) {

    let answer = e.target.nextElementSibling;
    let arrowIcon = e.target.childNodes[1];
    
    if(answer.style.display === 'block') { 
        e.target.style.color = 'hsl(240, 6%, 50%)';
        arrowIcon.classList.remove('arrow-icon--active');
        answer.style.display = 'none';
    } else {
        e.target.style.color = 'hsl(238, 29%, 16%)';
        arrowIcon.classList.add('arrow-icon--active');
        answer.style.display = 'block';
    }
    
}