function calc() {
    let num1 = document.getElementById('n1').value;
    let link = document.getElementById('link__input').value;
    let num2 = 0.00045;
    let result;
    let millionThree = document.getElementById('3m').onclick

    // if (link === "") {
    //     link = "Вставьте ссылку"
    // }

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
    document.getElementById('result').innerHTML = "Итого: " + result
    document.getElementById('view').innerHTML = "Количество просмотров: " + num1
    document.getElementById('link__video').innerHTML = "Ссылка на видео: " + link


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

