function abrirModal(servico, valor){

    document.getElementById("modal").style.display = "flex";

    document.getElementById("valorTotal").innerHTML =
        servico + "<br><br>Valor total: R$ " + valor;

    let sinal = valor * 0.30;

    let restante = valor - sinal;

    document.getElementById("sinal").innerHTML =
        "Sinal de 30%: R$ " + sinal.toFixed(2);

    document.getElementById("restante").innerHTML =
        "Restante no dia: R$ " + restante.toFixed(2);
}

function fecharModal(){

    document.getElementById("modal").style.display = "none";

}

function calcularCombo(){

    let total = 0;

    let checks =
        document.querySelectorAll(
            '.checkboxes input:checked'
        );

    checks.forEach(function(item){

        total += Number(item.value);

    });

    document.getElementById("total").innerHTML =
        total.toFixed(2);
}

function abrirCombo(){

    let total =
        Number(document.getElementById("total").innerHTML);

    if(total <= 0){

        alert("Escolha algum serviço.");

        return;
    }

    abrirModal("Combo Personalizado", total);
}
function finalizarPagamento(){

    alert(
        "Pagamento finalizado com sucesso!\n\n" +
        "Seu agendamento foi reservado no Luxe Harmony."
    );

    fecharModal();

}