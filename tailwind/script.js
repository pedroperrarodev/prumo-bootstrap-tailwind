const brl = (valor) => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const pct = (valor) => `${valor.toLocaleString("pt-BR")}%`;
const mostrar = (id, texto) => (document.getElementById(id).textContent = texto);

async function buscar(url) {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error(resposta.status);
    return resposta.json();
}

async function carregar() {
    try {
        const [taxas, dolar] = await Promise.all([
            buscar("https://brasilapi.com.br/api/taxas/v1"),
            buscar("https://economia.awesomeapi.com.br/json/last/USD-BRL"),
        ]);
        const { Selic, CDI, IPCA } = Object.fromEntries(taxas.map((t) => [t.nome, t.valor]));
        const cotacao = Number(dolar.USDBRL.bid);

        mostrar("selic", pct(Selic));
        mostrar("cdi", pct(CDI));
        mostrar("ipca", pct(IPCA));
        mostrar("dolar", brl(cotacao));
        mostrar("investimento", brl(1000 * (1 + CDI / 100)));
        mostrar("gastos", brl(3000 * (1 + IPCA / 100)));
        mostrar("cambio", brl(100 * cotacao));
    } catch {
        ["selic", "cdi", "ipca", "dolar", "investimento", "gastos", "cambio"].forEach((id) => mostrar(id, "indisponível"));
    }
}

carregar();
