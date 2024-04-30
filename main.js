function validarMaiorQue(x, y) {
    return x > y;
}

const form = document.getElementById('form-calculadora');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroX = parseInt(document.getElementById('numberX').value);
    const numeroY = parseInt(document.getElementById('numberY').value);
    const mensagemDiv = document.getElementById('mensagem');

    if (numeroX === numeroY) {
        mensagemDiv.textContent = "Os números são iguais.";
    } else if (validarMaiorQue(numeroX, numeroY)) {
        mensagemDiv.textContent = "O primeiro número é maior.";
    } else {
        mensagemDiv.textContent = "O segundo número é maior.";
    }
});