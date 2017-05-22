// Buscando elementos para a lógica
var banners = document.querySelectorAll('.slide1,.slide2,.slide3');
var tatuadores = document.querySelectorAll('.tatuador1,.tatuador2,.tatuador3');
var planoTatuador = document.querySelectorAll('.plano input');
var portifolioTatuador = document.querySelector('.portifolio input');
var botaoCalcularPlano = document.querySelector('.portifolio button');
var resultado2 = document.querySelector('.resultado2');

// Variável fixa de valor para os planos
var valorPlano = {
    semanal: 1.50, // 1,50 por foto - disponível durante uma semanal
    mensal: 4.80, // 4,80 por foto - disponível durante um mes
    anual: 10.00 // 10,00 por foto - disponível durante um ano
};

// Variáveis globais do banner
var planoAtivo = '';
var resultado = document.querySelector('p');
var valorPlanoTatuador = planoTatuador.value;
var bannerAtivo = 0;
var velocidade = 5000; // 5 segundos a principio

// Lógica do Tatuador
function ativarPlano(item) {
    item.addEventListener('click', alterarPlanoAtivo);
}

function alterarPlanoAtivo() {
    planoAtivo = this.id;
}

function calcularPlano() {
    if(portifolioTatuador.value==''){
        alert("Digite um valor.")
        return
    }else if(isNaN(portifolioTatuador.value)){
        alert("Digite um valor em números.")
        return
    }else if(planoAtivo.id==''){
        alert("Escolha um plano.");
        return
    }else{
        var resultadoPlano = portifolioTatuador.value*parseFloat(valorPlano[planoAtivo]);
        resultado2.innerHTML=('O seu plano ' + planoAtivo + ' custará R$' + resultadoPlano.toFixed(2).toString().replace('.',',') + '.');
        resultado2.classList.add('active');
    }
}

botaoCalcularPlano.addEventListener('click',calcularPlano);
planoTatuador.forEach(ativarPlano);

// Lógica do Banner
function avancarBanner(){
    banners[bannerAtivo].classList.remove('active');
    tatuadores[bannerAtivo].classList.remove('active');

    bannerAtivo++;

    if(bannerAtivo >= banners.length){
        bannerAtivo = 0;
    }

    banners[bannerAtivo].classList.add('active');
    tatuadores[bannerAtivo].classList.add('active');
}

setInterval(avancarBanner,velocidade);
