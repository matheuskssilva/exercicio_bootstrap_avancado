AOS.init();

$(document).ready(function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal');
    setTimeout(function() {
        modalExemplo.show();
    }, 1000);

    $('#cep').mask('99.999-999')


});

document.getElementById('perfilLogin').addEventListener('click', function() {

    loginPerfil.style.display = 'block'
    console.log('clicouy')
})