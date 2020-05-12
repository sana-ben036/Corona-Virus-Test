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
        moveStep3();   // passer à l interface de resultat
        getResult();   // avoir un text de resultat selon les reponses choisies
        
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


// ::: avoir le resultat de test

const getR = document.getElementById('getResult');


function getResult (){
        let facteurGmin ;
        let facteurGmaj;
        let facteurProno;

        // determiner les facteurs de gravités :
        // 1 : mineur
        if((reponses[0] === 'oui' && reponses[1] >= 39) || reponses[6] === 'oui' || (reponses[9] === 'Fatigué(e)' || reponses[9] === 'Très fatigué(e)')){ 

            facteurGmin = true; // au moins un seul facteur de gravité mineur est validé ou plus

        }else {
            facteurGmin = false; // aucun facteur de gravité mineur 
        }
        if (
            ((reponses[0] === 'oui' && reponses[1] >= 39) && reponses[6] === 'oui')||
            ((reponses[0] === 'oui' && reponses[1] >= 39) && (reponses[9] === 'Fatigué(e)' || reponses[9] === 'Très fatigué(e)'))||
            (reponses[6] === 'oui' && (reponses[9] === 'Fatigué(e)' || reponses[9] === 'Très fatigué(e)'))){
            
                facteurGmin = 2; // deux facteurs de gravité mineur sont validés
        }else if (
            ((reponses[0] === 'oui' && reponses[1] >= 39) && reponses[6] === 'non' && (reponses[9] === 'Bien' || reponses[9] === 'Assez bien'))||
            ((reponses[0] === 'non' && reponses[1] < 39) && reponses[6] === 'oui' && (reponses[9] === 'Bien' || reponses[9] === 'Assez bien'))||
            ((reponses[0] === 'non' && reponses[1] >= 39) && reponses[6] === 'non' && (reponses[9] === 'Fatigué(e)' || reponses[9] === 'Très fatigué(e)'))){

              facteurGmin = 1;  // un seul facteurs de gravité mineur est validé

        }

        // 2 : majeur
        if((reponses[0] === 'oui' && reponses[1] <= 35) || reponses[7] === 'oui' || reponses[8] === 'oui'){

            facteurGmaj = true; // au moins un facteur de gravité majeur est validé
        }else {

            facteurGmaj = false; // aucun facteur de gravité majeur
        }

        // determiner les facteurs pronostiques :
        if (reponses[10] >= 70 || reponses[13] === 'oui' || reponses[14] === 'oui' ||
            reponses[15] === 'oui' || reponses[16] === 'oui' || reponses[17] === 'oui' ||
            reponses[18] === 'oui' || reponses[19] === 'oui' || reponses[20] === 'oui' || reponses[21] === 'oui'){

                facteurProno = true; // au moins un facteur prono est validé
            }else{
                facteurProno = false; // aucun facteur prono
            }


        //  analyser les cas selon les symptomes:
        // cas 1 : Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :

        if  (reponses[0] === 'oui'  || 
            (reponses[2] === 'oui' && reponses[3] === 'oui' )||
            (reponses[2] === 'oui' && reponses[4] === 'oui' )||
            (reponses[0] === 'oui' && reponses[5] === 'oui' )) {

            if(facteurProno == false && facteurGmaj == false && facteurGmin == false &&  reponses[10] < 50){
                getR.textContent = `Nous vous conseillons de rester à votre domicile et
                de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez
                aussi utiliser à nouveau l’application pour réévaluer vos symptômes.`;

            }else if (facteurProno == false && facteurGmaj == false &&  (reponses[10] > 50 || reponses[10] < 69 )){
                getR.textContent =`Téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin == false){
                getR.textContent =`Téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 1){
                getR.textContent =`Svp Appeler 141`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 2){
                getR.textContent =`Svp Appeler 141`;

            }else if (facteurGmaj == true){
                getR.textContent =`Svp Appeler 141`;
            }
        } // cas 2 : Patient avec fièvre + toux  :

        else if (reponses[0] === 'oui' && reponses[2] === 'oui'){
            if(facteurProno == false && facteurGmaj == false && (facteurGmin == false || facteurGmin == true)){

                getR.textContent=`téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && (facteurGmin == false || facteurGmin === 1)){
                getR.textContent=`téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 2){
                getR.textContent =`Svp Appeler 141`;

            }else if (facteurGmaj == true){
                getR.textContent =`Svp Appeler 141`;
            }

        }// cas 3 : Patient avec un seul sympthome : fièvre ou toux ou mal de gorge ou courbatures  (note: il faut eliminer la fievre ici ,sinon le test va analyser le cas 1)

        else if ((reponses[0] === 'oui' &&  reponses[2] === 'non' && reponses[3] === 'non' &&  reponses[4] === 'non')||
                (reponses[0] === 'non' &&  reponses[2] === 'oui' && reponses[3] === 'non' &&  reponses[4] === 'non') ||
                (reponses[0] === 'non' &&  reponses[2] === 'non' && reponses[3] === 'oui' &&  reponses[4] === 'non')||
                (reponses[0] === 'non' &&  reponses[2] === 'non' && reponses[3] === 'non' &&  reponses[4] === 'oui')){
                    
            if ( facteurProno == false && facteurGmaj == false && facteurGmin == false){
                getR.textContent =`Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`;

            }else if(facteurProno == true || facteurGmaj == true ||  facteurGmin == true ) {
                getR.textContent = 'Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.';

            }

        }//cas 4 :Tout patient avec aucun symptôme :
        else if ((reponses[0] === 'non' &&  reponses[2] === 'non' && reponses[3] === 'non' && reponses[4] === 'non')){
            getR.textContent=`Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`;

        }else{
            getR.textContent= `ERROR`;
        }




}










