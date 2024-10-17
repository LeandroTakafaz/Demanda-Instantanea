/* Troca de Campos de Materiais */

$(document).ready(function() {
    function toggleCampo(elementoId, campoId) {
        $('#' + elementoId).change(function() {
            $('#' + campoId).toggle();
        });
    }

    const elementos = [
        { elemento: 'Apoio', campo: 'campo-apoio' },
        { elemento: 'Material', campo: 'campo-divulg' }
    ];

    elementos.forEach(item => {
        toggleCampo(item.elemento, item.campo);
    });
});