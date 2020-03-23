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
    document.getElementById('out').innerHTML = result.toFixed(3) * 1 + ' Руб.'
    document.getElementById('result').innerHTML = ' ' + result + ' Руб.'
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
    personal__code.value = getRandom
});

qiwiBtn.addEventListener('click', function () {
    pay__value__img.src = './img/qiwiMini.png';
    wallet.value = '+79689192503'

});

yandexBtn.addEventListener('click', function () {
    pay__value__img.src = './img/yandexMini.png';
    wallet.value = '410015036458557'
});

perfectBtn.addEventListener('click', function () {
    pay__value__img.src = './img/perfectMini.png';
    wallet.value = 'U21982194'
});

payeerBtn.addEventListener('click', function () {
    pay__value__img.src = './img/payeerMini.png';
    wallet.value = 'P1023488452'
});

btcBtn.addEventListener('click', function () {
    pay__value__img.src = './img/btcMini.jpg';
    wallet.value = '1EWqJBqR9DiD7CzZWrDcWzaSLidAHt5wZa'
});

ethBtn.addEventListener('click', function () {
    pay__value__img.src = './img/eth.png';
    wallet.value = '0xDe37f4F0b595f948F8D22Ae0806562cc067C2CC4'
});


function copyWallet() {

    let copyText = document.getElementById("wallet");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function copyCode() {

    let copyText = document.getElementById("personal__code");
    copyText.select();
    document.execCommand("copy");
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}








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