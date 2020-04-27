// ::: array of quiz data

let questions = [
    {
    "question":"Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Quelle est votre température corporelle ?",
    "option1":"",
}, {
    "question":"Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Ces derniers jours, avez-vous un mal de gorge ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles .",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Actuellement, comment vous vous sentez ?",
    "option1":"Bien",
    "option2":"Assez bien",
    "option3":"Fatigué(e)",
    "option4":"Très fatigué(e)"
}, {
    "question":"Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique .",
    "option1":""
}, {
    "question":"Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    "option1":""
}, {
    "question":"Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    "option1":""
}, {
    "question":"Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Êtes-vous diabétique ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Avez-vous ou avez-vous eu un cancer ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
    "option1":"Oui",
    "option2":"Non"
},{
    "question":"Avez-vous une insuffisance rénale chronique dialysée ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Avez-vous une maladie chronique du foie ?",
    "option1":"Oui",
    "option2":"Non"
}, {
    "question":"Êtes-vous enceinte ?",
    "option1":"Oui",
    "option2":"Non",
    "option3":"Homme"
}, {
    "question":"Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
    "option1":"Oui",
    "option2":"Non",
}, {
    "question":"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
    "option1":"Oui",
    "option2":"Non",
}   
]

// :::move to next step (information/questionnaire/resultats)
let preambule = document.getElementById('preambule');
let questionnaire = document.getElementById('questionnaire');
let resultat = document.getElementById('resultat');
let list = document.getElementsByClassName('list__item');

let step1= document.getElementById('btn-step1');
let step2= document.getElementById('btn-step2');
let step3 = document.getElementById('btn-step3');

step1.addEventListener('click',moveStep2);
step2.addEventListener('click',moveStep3);
step3.addEventListener('click',moveStep1);

function moveStep2(){
    preambule.style.display='none';
    questionnaire.style.display='block';
    list[0].classList.remove('list__item--active');
    list[1].classList.add('list__item--active');
    
}
function moveStep3(){
    preambule.style.display='none';
    questionnaire.style.display='none';
    resultat.style.display='block'
    list[1].classList.remove('list__item--active');
    list[2].classList.add('list__item--active');
    
}
function moveStep1(){
    preambule.style.display='flex';
    questionnaire.style.display='none';
    resultat.style.display='none';
    list[2].classList.remove('list__item--active');
    list[0].classList.add('list__item--active');
    
}

// ::: afficher questions

var currentQuestion = 0;
var totalQuestion = questions.length;
var para = document.getElementById('para');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
let next= document.getElementById('btn-next');
let last= document.getElementById('btn-last');

next.addEventListener('click',loadNextQuestion);
last.addEventListener('click',loadLastQuestion);


function loadQuestion (questionIndex){
    
    
    var q = questions[questionIndex];
    para.textContent = q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;


};

function loadNextQuestion(){

    var selectOption = document.querySelector('input[type=radio]:checked');
    if(!selectOption){
        alert('SVP choisir une reponse!');
        return;
    }
    
    currentQuestion++;
    if(currentQuestion == totalQuestion ){
        next.style.display= 'none';
        step2.style.display='block';
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

function loadLastQuestion(){

    loadQuestion(currentQuestion -=1);
}



/*
let next= document.getElementById('btn-next');
let last= document.getElementById('btn-last');

next.addEventListener('click',nextQuestion);
last.addEventListener('click',lastQuestion);



    function nextQuestion(){
        for (i=0; i<questions.length ; i+=1){
        q.innerHTML= questions[i].question;

        }
    }
 

    function lastQuestion(){
        q.innerHTML= questions[i-=1].question;
    }
*/



