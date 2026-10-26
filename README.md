# Prumo - Bootstrap e Tailwind CSS

Atividade prática de Front-End da FIAP: desenvolver o mesmo layout duas vezes, uma com Bootstrap e outra com Tailwind CSS, mantendo os mesmos elementos e a mesma organização visual, para comparar a experiência com as duas tecnologias.

O site é da Prumo, uma empresa fictícia de cálculos de gastos e investimentos. A página segue o template da atividade: banner com o nome da empresa, seção com título, subtítulo, imagem e dois parágrafos, e uma seção cinza com três colunas (título, imagem, texto e botão).

## Organização do repositório

- Branch `bootstrap`: desenvolvimento da versão com Bootstrap.
- Branch `tailwind`: desenvolvimento da versão com Tailwind CSS.
- Branch `main`: as duas versões finalizadas nas pastas `bootstrap/` e `tailwind/`.

## Consumo de API

As duas versões usam o mesmo `script.js`, que busca os indicadores do dia com `fetch`:

- BrasilAPI (`https://brasilapi.com.br/api/taxas/v1`): Selic, CDI e IPCA acumulado em 12 meses.
- AwesomeAPI (`https://economia.awesomeapi.com.br/json/last/USD-BRL`): cotação do dólar comercial.

Com esses valores a página mostra as taxas no texto e calcula os exemplos dos cards: quanto R$ 1.000,00 rendem em 12 meses no CDI, quanto R$ 3.000,00 de gastos mensais vão custar com o IPCA e quanto sai uma compra de US$ 100,00. As chamadas são feitas uma vez ao abrir a página; se alguma API falhar, os valores aparecem como "indisponível".

## Versão Bootstrap

Bootstrap 5.3 carregado por CDN. O layout usa o grid (`container`, `row`, `col-md-4`), utilitários de espaçamento e tipografia (`py-5`, `mb-4`, `display-5`, `fw-light`, `text-uppercase`, `lead`, `small`) e o componente de botão (`btn`, `rounded-pill`). O que o Bootstrap não oferece pronto, como a imagem de fundo do banner, a cor laranja do botão e as alturas das imagens, ficou no `style.css`.

## Versão Tailwind CSS

Tailwind CSS 4 carregado pelo CDN `@tailwindcss/browser`. Todo o estilo está nas classes do HTML, sem arquivo CSS: grid com `md:grid-cols-3`, espaçamento com `px-4`, `py-12`, `mb-6`, e valores específicos do template com classes arbitrárias, como `bg-[#e8573a]`, `h-[390px]` e o gradiente com imagem do banner.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedroperrarodev/prumo-bootstrap-tailwind.git
   ```
2. Abra `bootstrap/index.html` ou `tailwind/index.html` no navegador.

É preciso estar conectado à internet, porque o Bootstrap, o Tailwind e as APIs são carregados online.
