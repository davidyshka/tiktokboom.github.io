function calc() {
    let num1 = document.getElementById('n1').value;
    let num2 = 0.0012;
    let result;

    if (num1 == '') {
        alert('Пожалуйста введите количество просмотров!');
    }


    result = num1 * num2
    document.getElementById('out').innerHTML = result.toFixed(4) * 1 + ' Руб.'


}
