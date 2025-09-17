// Tarot - Redireciona para pagamento a partir da 3ª carta
const tarotCards = document.querySelectorAll(".tarot-card");
tarotCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        if (index >= 2) {
            window.open("https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_LINK_AQUI", "_blank");
        } else {
            alert("Carta gratuita para você 🌙✨");
        }
    });
});

// Exemplo de busca simples
function buscar() {
    let termo = document.getElementById("busca").value;
    alert("Você buscou por: " + termo);
}
