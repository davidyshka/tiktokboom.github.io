function calc() {
    let num1 = document.getElementById('calc__input').value;
    let link = document.getElementById('link__input').value;
    let num2 = 0.00045;
    let result;




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
    document.getElementById('out').innerHTML = result.toFixed(3) * 1 + ' Руб.'
    document.getElementById('result').value = ' ' + result.toFixed(3) * 1 + ' Руб.'
    document.getElementById('result').innerHTML = ' ' + result.toFixed(3) * 1 + ' Руб.'
    document.getElementById('popup__view-input').value = num1
    document.getElementById('popup__video-input').value = link



}





const qiwiBtn = document.getElementById('qiwi');
const yandexBtn = document.getElementById('yandex');
const perfectBtn = document.getElementById('perfect');
const payeerBtn = document.getElementById('payeer');
const btcBtn = document.getElementById('btc');
const ethBtn = document.getElementById('eth');
const payBtn = document.getElementById('pay__btn');
const getRandom = Math.ceil(Math.random() * 100000 + 1);







payBtn.addEventListener('click', function () {
    randomCode.value = getRandom
});

qiwiBtn.addEventListener('click', function () {
    pay__value__img.src = './img/qiwiMini.png';
    wallet.value = '+79689192503'
    pay__method.value = 'Qiwi Wallet'


});

yandexBtn.addEventListener('click', function () {
    pay__value__img.src = './img/yandexMini.png';
    wallet.value = '410015036458557'
    pay__method.value = 'Yandex Money'
});

perfectBtn.addEventListener('click', function () {
    pay__value__img.src = './img/perfectMini.png';
    wallet.value = 'U21982194'
    pay__method.value = 'Perfect Money'
});

payeerBtn.addEventListener('click', function () {
    pay__value__img.src = './img/payeerMini.png';
    wallet.value = 'P1023488452'
    pay__method.value = 'Payeer'
});

btcBtn.addEventListener('click', function () {
    pay__value__img.src = './img/btcMini.jpg';
    wallet.value = '1EWqJBqR9DiD7CzZWrDcWzaSLidAHt5wZa'
    pay__method.value = 'Bitcoin'
});

ethBtn.addEventListener('click', function () {
    pay__value__img.src = './img/eth.png';
    wallet.value = '0xDe37f4F0b595f948F8D22Ae0806562cc067C2CC4'
    pay__method.value = 'Ethereum'
});


function copyWallet() {

    let copyText = document.getElementById("wallet");
    copyText.select();
    document.execCommand("copy");

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;

};

function copyCode() {

    let copyText = document.getElementById("randomCode");
    copyText.select();
    document.execCommand("copy");

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
};

function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
};





document.getElementById('header__opt').addEventListener('click', () => scrollToElement('#offers'))
document.getElementById('header__price').addEventListener('click', () => scrollToElement('#calc'))
document.getElementById('3m').addEventListener('click', () => scrollToElement('#calc'))
document.getElementById('7m').addEventListener('click', () => scrollToElement('#calc'))
document.getElementById('20m').addEventListener('click', () => scrollToElement('#calc'))

function scrollToElement(selector) {
    let element = document.querySelector(selector);
    element && element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });;
}

$(document).ready(function () {
    $('.pay__btn').magnificPopup();
});

$('.payments__link').click(function () {
    $('.payments__link').not(this).removeClass('active');
    $(this).toggleClass('active');
});

$('.offers__item-block').click(function () {
    $('.offers__item-block').not(this).removeClass('offers__active');
    $(this).toggleClass('offers__active');

});

function checkParams() {
    let viewers = $('#calc__input').val();
    let linkVideo = $('#link__input').val();
    let payLink = $('.payments__link');



    if (viewers.length != 0 && linkVideo.length != 0 && payLink.hasClass('active')) {
        $('#pay__btn').removeAttr('disabled');
        $('#pay__btn').removeClass('disabled');


    } else {
        $('#pay__btn').attr('disabled', 'disabled');
        $('#pay__btn').addClass('disabled');

    }

}

