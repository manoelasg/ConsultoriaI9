// Buscando elementos para a lógica
var banners = document.querySelectorAll('.slide1,.slide2,.slide3');
var tatuadores = document.querySelectorAll('.tatuador1,.tatuador2,.tatuador3');

// Variáveis globais do banner
var bannerAtivo = 0;
var velocidade = 5000; // 5 segundos a principio

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
