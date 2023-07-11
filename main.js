//ler o conteudo antes de executar 
$(document).ready(function(){    
    //quando tiver um click no formulario o formulario vai ter a uma animação para baixo 
    $('header button').click(function() {
        $('form').slideDown();
    })

    //quando tiver um click no botao cancelar "botao-cancelar" vai ter uma animação para cima 
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    //quando tiver um evento do tipo subimit nao ira atualizar a pagina
    $('form').on('submit', function(e) {
        e.preventDefault();
        //definindo uma variavel e pegando o valor inserido nela
        const enderecoImagemNova = $('#endereço-imagem-nova').val();
        //variavel recebendo um li 
        const novoItem = $('<li style="display: none"></li>');
        /*criando um elemento de imagem com a URL
        especificada em enderecoImagemNova e adicionando-o como um filho do elemento novoItem.*/
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        /*aqui esta adicionando uma nova imagem a lista 'ul' seguindo os parametros estabelecidos
        e puchando a url colocada na variavel endereço imagem nova usando tbm o _black para espandi a img em outra pagina*/
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        //adicionando animação a foto quando adicionada
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('');
    });
    
})