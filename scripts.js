// Buscando elementos para a lógica
var banners = document.querySelectorAll('.slide1,.slide2,.slide3');
var tattooArtists = document.querySelectorAll('.tattoo-artist1,.tattoo-artist2,.tattoo-artist3');
var tattooArtistPlan = document.querySelectorAll('.plan input');
var tattooArtistPortfolio = document.querySelector('.portfolio input');
var calculatePlanButton = document.querySelector('.portfolio button');
var result2 = document.querySelector('.result2');

// Variável fixa de valor para os planos
var planValue = {
    weekly: 1.50, // 1,50 por foto - disponível durante um semana
    monthly: 4.80, // 4,80 por foto - disponível durante um mes
    annual: 10.00 // 10,00 por foto - disponível durante um ano
};

// Variáveis globais do banner
var activePlan = '';
var result = document.querySelector('p');
var tattooArtistValuePlan = tattooArtistPlan.value;
var activeBanner = 0;
var velocity = 1000; // 5 segundos a principio

// Lógica do Tatuador
function activatePlan(item) {
    item.addEventListener('click', alterActivePlan);
}

function alterActivePlan() {
    activePlan = this.id;
}

function calculatePlan() {
    if(tattooArtistPortfolio.value==''){
        alert("Digite um valor.")
        return
    }else if(isNaN(tattooArtistPortfolio.value)){
        alert("Digite um valor em números.")
        return
    }else if(activePlan.id==''){
        alert("Escolha um plano.");
        return
    }else{
        var resultPlan = tattooArtistPortfolio.value*parseFloat(planValue[activePlan]);
        result2.innerHTML=('O seu plano ' + activePlan + ' custará R$' + resultPlan.toFixed(2).toString().replace('.',',') + '.');
        result2.classList.add('active');
    }
}

calculatePlanButton.addEventListener('click',calculatePlan);
tattooArtistPlan.forEach(activatePlan);

// Lógica do Banner
function advanceBanner(){
    banners[activeBanner].classList.remove('active');
    tattooArtists[activeBanner].classList.remove('active');

    activeBanner++;

    if(activeBanner >= banners.length){
        activeBanner = 0;
    }

    banners[activeBanner].classList.add('active');
    tattooArtists[activeBanner].classList.add('active');
}

  setInterval(advanceBanner,velocity);
