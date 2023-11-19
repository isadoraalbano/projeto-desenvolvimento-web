$().ready(function() {
    Depoimentos.ObterDepoimentos();
});

var Depoimentos = (function() {
    const DEPOIMENTO_URL = 'http://localhost:3000/depoimento?&order=desc';

    var ObterDepoimentos = function() {
        $.get(DEPOIMENTO_URL, function(resp) {
            var depoimentosSection = $('<div>').attr('id', 'listaDepoimentos');

            resp.forEach(depoimento => {
                $(depoimentosSection).append(
                    $('<article>').append(
                        $('<p>').text(depoimento.texto)
                        .append($('<br/>'))
                        .append($('<em>').text('- ' + depoimento.nome)))
                )
                .append($('<hr/>'));
            });

            $('#listaDepoimentos').replaceWith(depoimentosSection);

        }).fail(function() {
            alert( "Erro ao listar depoimentos!" );
        });
    };

    var SalvarDepoimento = function() {
        var data = {
            nome: $('#nome').val(),
            texto: $('#depoimento').val()
        }

        $.post(DEPOIMENTO_URL, data, function(resp) {
            ObterDepoimentos();

            $('#nome').val('');
            $('#depoimento').val('');
        }).fail(function() {
            alert( "Erro ao salvar depoimento!" );
        });
    }

    return {
        ObterDepoimentos: ObterDepoimentos,
        SalvarDepoimento: SalvarDepoimento
    };
})(); 
