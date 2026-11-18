
function confirmarEncomenda(event) {

    const confirmar = confirm(
        "Deseja continuar para a área de encomendas?"
    );


    if (!confirmar) {

        event.preventDefault();


        mostrarMensagem(
            "Ação cancelada."
        );

        return;
    }


    mostrarMensagem(
        "Área de encomendas selecionada."
    );

}

function mostrarMensagem(texto) {

    const mensagem =
        document.getElementById("mensagem");


    if (mensagem) {

        mensagem.textContent =
            texto;

    }

}

function confirmarEncomenda(event) {

    const confirmar = confirm(
        "Deseja continuar para a área de encomendas?"
    );


    if (!confirmar) {

        event.preventDefault();


        mostrarMensagem(
            "Ação cancelada."
        );

        return;
    }


    mostrarMensagem(
        "Área de encomendas selecionada."
    );

}



function mostrarMensagem(texto) {

    const mensagem =
        document.getElementById("mensagem");


    if (mensagem) {
        mensagem.textContent =
            texto;
    }

}
