// ::: array of quiz data


let questions = [
    {
    question:`Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?`,
    options:`<label for="option1" id="label-radio">
                <input id="option1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="option2" id="label-radio" >
                <input id="option2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`                         
}, {
    question:`Quelle est votre température corporelle ?`,
    options:`<label for="choix" id="label-number" >
                <input id="choix" type="number" name="température" placeholder="34-42"> degrés </label> `
},{
    question:`Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Ces derniers jours, avez-vous un mal de gorge ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles .`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Actuellement, comment vous vous sentez ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="Bien"><i class="fas fa-grin"></i><span>Bien</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="Assez bien"><i class="fas fa-smile-beam"></i><span>Assez bien</span></label><br>
            <label for="choix3" id="label-radio">
                <input id="choix3" type="radio" name="option" value="Fatigué(e)"><i class="far fa-frown-open"></i><span>Fatigué(e)</span></label><br>
            <label for="choix4" id="label-radio" >
                <input id="choix4" type="radio" name="option" value="Très fatigué(e)"><i class="far fa-dizzy"></i><span>Très fatigué(e)</span></label>`
}, {
    question:`Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique .`,
    options:`<label for="choix" id="label-number" >
                <input id="choix" type="number" name="age"  placeholder="15-110"> ans </label> `
}, {
    question:`Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
    options:`<label for="choix" id="label-number">
                <input id="choix" type="number" name="poid"  placeholder="20-250"> kg </label>`
}, {
    question:`Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
    options:`<label for="choix" id="label-number">
                <input id="choix" type="number" name="taille"  placeholder="80-250"> cm </label>`
}, {
    question:`Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Êtes-vous diabétique ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Avez-vous ou avez-vous eu un cancer ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`

}, {
    question:`Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
},{
    question:`Avez-vous une insuffisance rénale chronique dialysée ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Avez-vous une maladie chronique du foie ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Êtes-vous enceinte ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>
            <label for="choix3" id="label-radio" >
                <input id="choix3" type="radio" name="option" value="homme"><i class="fas fa-male"></i><span>Homme</span></label>`
}, {
    question:`Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}, {
    question:`Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections.
            Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
    options:`<label for="choix1" id="label-radio">
                <input id="choix1" type="radio" name="option" value="oui"><i class="fas fa-check"></i><span>Oui</span></label><br>
            <label for="choix2" id="label-radio" >
                <input id="choix2" type="radio" name="option" value="non"><i class="fas fa-times"></i><span>Non</span></label>`
}  
]

// :::move between steps (information/questionnaire/resultats)

const preambule = document.getElementById('preambule');
const questionnaire = document.getElementById('questionnaire');
const resultat = document.getElementById('resultat');
const list = document.getElementsByClassName('list__item');
const step1= document.getElementById('btn-step1');
//const step2= document.getElementById('btn-step2');
const step3 = document.getElementById('btn-step3');

step1.addEventListener('click',moveStep2);
//step2.addEventListener('click',moveStep3);
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
    resultat.style.display='block';
    list[1].classList.remove('list__item--active');
    list[2].classList.add('list__item--active');     
}

function moveStep1(){
    preambule.style.display='flex';
    questionnaire.style.display='none';
    resultat.style.display='none';
    list[2].classList.remove('list__item--active');
    list[0].classList.add('list__item--active');
    window.location.reload();   
}

// ::: progressbar

const count = document.getElementById('count');
const progress = document.getElementById('progress');


// ::: afficher questions


const totalQuestion = questions.length;
const question = document.getElementById('question');
const options = document.getElementById('options');
const next = document.getElementById('btn-next');
const back = document.getElementById('btn-last');
const form = document.getElementById('form');


next.addEventListener('click',loadNextQuestion);
back.addEventListener('click',loadLastQuestion);



function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    question.textContent = q.question;
    form.innerHTML = q.options;
    count.textContent= (questionIndex + 1) + '/' + totalQuestion;
    progress.style.width = (questionIndex + 1) * 100/22 + '%';


    if(questionIndex > 0){
        back.style.visibility='visible';
    }else{
        back.style.visibility='hidden';
    }
    if(questionIndex === 21){
        next.textContent= 'Terminer';
    } else{
        next.textContent= 'Suivant';
    }
};

// ::: afficher next questions

var currentQuestion = 0;
var reponses = [];


function loadNextQuestion(){
    var selectN = document.getElementById('choix');
    if (form.children[0].id === 'label-number'){
        
        //var valeur = parseFloat(selectN.value);
        //var min = selectN.getAttribute('min');
        //var max = selectN.getAttribute('max');
        
        if(!selectN.value){
            alert('SVP choisir une valeur');
            return ;
        }
        /*else if (selectN.value < min || selectN.value > max ){
            alert(` la valeur doit etre entre ${min} et ${max} `);
            return ;   
        }*/
        else if (currentQuestion === 1 && (selectN.value < 34 || selectN.value > 42)) {
			alert('la temperature doit etre comprise entre 34 et 42');
			return;
		} else if (currentQuestion === 10 && (selectN.value < 15 || selectN.value > 110)) {
			alert("l'age doit etre comprise entre 15 et 110");
			return;
		} else if (currentQuestion === 11 && (selectN.value < 20 || selectN.value > 250)) {
			alert('le poids doit etre comprise entre 20 et 250');
			return;
		} else if (currentQuestion === 12 && (selectN.value < 80 || selectN.value > 250)) {
			alert('la taille doit etre compris entre 80 et 250');
            return;
        }else{
            var valeur = parseFloat(selectN.value);
            reponses.push(valeur); // enregister la reponse dans le tableau ''valeurs"
            console.log(reponses);
        }
    }else{
        var selectR = document.querySelector('input[type="radio"]:checked');
        if(!selectR){
            alert('SVP choisir une reponse!');
            return ;
        }else{
            
            var value = selectR.getAttribute('value');
            reponses.push(value);
            console.log(reponses);
        }
    }   
    if (reponses.length === 22){
        moveStep3();
        
    }
    currentQuestion++;
    loadQuestion(currentQuestion); 
    
}
loadQuestion(currentQuestion);




// ::: afficher last questions

function loadLastQuestion(){

    currentQuestion -=1
    reponses.pop(currentQuestion); // supprimer la reponse enregister a la fin de tableau s'il ya un retour vers la question precedente (modification)

    loadQuestion(currentQuestion );
    console.log(reponses);
}










