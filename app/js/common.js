function calc() {
    let num1 = document.getElementById('n1').value;
    let link = document.getElementById('link__input').value;
    let num2 = 0.00045;
    let result;


    if (link === "") {
        link = "Вставьте ссылку"
    }

    if (num1 >= 3000000) {
        num2 = 0.00033

    }

    if (num1 >= 7000000) {
        num2 = 0.00025
    }

    if (num1 >= 20000000) {
        num2 = 0.00015
    }



    result = num1 * num2
    document.getElementById('out').innerHTML = result.toFixed(4) * 1 + ' Руб.'
    // document.getElementById('result').innerHTML = "Итого: " + result + ' Руб.'
    document.getElementById('popup__view-input').value = num1
    document.getElementById('popup__video-input').value = link


}

const qiwiBtn = document.getElementById('qiwi');
const yandexBtn = document.getElementById('yandex');
const perfectBtn = document.getElementById('perfect');
const payeerBtn = document.getElementById('payeer');
const btcBtn = document.getElementById('btc');
const ethBtn = document.getElementById('eth');


qiwiBtn.addEventListener('click', function () {
    pay__value__img.src = './img/qiwi.png';
});

yandexBtn.addEventListener('click', function () {
    pay__value__img.src = './img/yandex.png';
});

perfectBtn.addEventListener('click', function () {
    pay__value__img.src = './img/perfect.png';
});

payeerBtn.addEventListener('click', function () {
    pay__value__img.src = 'https://toplogos.ru/images/thumbs/preview-logo-payeer.png';
});

btcBtn.addEventListener('click', function () {
    pay__value__img.src = 'https://toplogos.ru/images/thumbs/preview-logo-bitcoin.png';
});

ethBtn.addEventListener('click', function () {
    pay__value__img.src = './img/eth.png';
});








document.getElementById('header__opt').addEventListener('click', () => scrollToElement('#offers'))
document.getElementById('header__price').addEventListener('click', () => scrollToElement('#calc'))

function scrollToElement(selector) {
    let element = document.querySelector(selector);
    element && element.scrollIntoView({ behavior: "smooth" });;
}

$(document).ready(function () {
    $('.pay__btn').magnificPopup();
});

$('.payments__link').click(function () {
    $('.payments__link').not(this).removeClass('active');
    $(this).toggleClass('active');
});