var elementBtnIncreaseFont = document.getElementById('zoom-in');
var elementBtnDecreaseFont = document.getElementById('zoom-out');
// Padrão de tamanho, equivale a 100% do valor definido no Body
var fontSize = 100;
// Valor de incremento ou decremento, equivale a 10% do valor do Body
var increaseDecrease = 10;
//Acessibilidade

var elementH1 = document.querySelector('h1');
var elementH4 = document.querySelector('h4');
var elementH2 = document.querySelector('h2');
var calculadora = document.getElementById('calculadora')
var oficina = document.getElementById('oficina')
var cursos = document.getElementById('cursos')
var elementBtnIncreaseFont = document.getElementById('zoom-in');
var elementBtnDecreaseFont = document.getElementById('zoom-out');
// Evento de click para aumentar a fonte
elementBtnIncreaseFont.addEventListener('click', function(event) {
    fontSize = fontSize + increaseDecrease;
    elementH1.style.fontSize = fontSize + '%';
    elementH4.style.fontSize = fontSize + '%';
    elementH2.style.fontSize = fontSize + '%';
    oficina.style.fontSize = fontSize + '%'
    contato.style.fontSize = fontSize + '%'
    cursos.style.fontSize = fontSize + '%'
});

// Evento de click para diminuir a fonte
elementBtnDecreaseFont.addEventListener('click', function(event) {
    fontSize = fontSize - increaseDecrease;
    elementH1.style.fontSize = fontSize + '%';
    elementH4.style.fontSize = fontSize + '%';
    elementH2.style.fontSize = fontSize + '%';
    oficina.style.fontSize = fontSize + '%'
    contato.style.fontSize = fontSize + '%'
    cursos.style.fontSize = fontSize + '%'
});