// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Pega o botão do menu e o menu lateral no html
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.querySelector('.side-menu');

    // Quando o botão do menu for clicado
    menuButton.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        // Adiciona ou remove a classe 'open' do menu lateral
        sideMenu.classList.toggle('open');

    });

    // Quando um clique ocorrer no documento
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = sideMenu.contains(event.target); // Verifica se o clique foi dentro do menu
        const isClickInsideButton = menuButton.contains(event.target); // Verifica se o clique foi dentro do botão

        // Se o clique não foi dentro do menu nem do botão, e o menu está aberto
        if (!isClickInsideMenu && !isClickInsideButton && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open'); // Fecha o menu
        }
    });
});
