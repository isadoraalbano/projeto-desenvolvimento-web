$().ready(function() {
    Depoimentos.ObterDepoimentos();
});

var Depoimentos = (function() {
    const DEPOIMENTO_URL = 'http://localhost:3000/depoimento?&order=desc';

    var ObterDepoimentos = function() {
        $.get(DEPOIMENTO_URL, function(resp) {
            var depoimentosSection = $('<section>').attr('id', 'listaDepoimentos');

            resp.forEach(depoimento => {
                $(depoimentosSection).append(
                    $('<article>').text(depoimento.texto)
                );
            });

            $('#listaDepoimentos').replaceWith(depoimentosSection);

        }).fail(function() {
            alert( "Erro ao listar depoimentos!" );
        });
    };

    var SalvarDepoimento = function() {
        var data = {
            texto: $('#depoimento').val()
        }

        $.post(DEPOIMENTO_URL, data, function(resp) {
            ObterDepoimentos();
        }).fail(function() {
            alert( "Erro ao salvar depoimento!" );
        });
    }

    return {
        ObterDepoimentos: ObterDepoimentos,
        SalvarDepoimento: SalvarDepoimento
    };
})(); 
