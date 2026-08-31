# Ponte Kodular v5.8.13 — Histórico + PDF

## Histórico de atestados

O botão **Atestados emitidos** da página inicial envia exatamente:

`HI`

No evento `Web_Viewer1.WebViewStringChange`, o Kodular deve tratar o prefixo `HI` e abrir a Screen `Historico`.

## Compartilhamento de PDF

O protocolo principal desta versão é:

`SI<URL HTTPS do documento>`

Ele corresponde aos blocos atuais da Screen1, que removem o prefixo `SI`, guardam a URL em `global URLAtestado`, recuperam `pdf_ + URLAtestado` no TinyDB e navegam para a URL.

Por compatibilidade, a página também tenta `S|<URL>` após 180 ms. Se `SI` for tratado e a tela navegar, o fallback deixa de ter efeito.

## Fluxo esperado

1. Página envia `SI<URL>`.
2. Kodular define `global URLAtestado` removendo `SI`.
3. Kodular busca `pdf_ + URLAtestado` no TinyDB.
4. Se ainda não existir PDF para esta URL, o `Clock1.Timer` chama `CreatePDF`.
5. `PDFCreated` salva o `path` e atualiza o histórico.
6. O compartilhamento usa a lógica configurada na Screen1.

A página também tenta a Web Share API antes da ponte nativa. Quando o WebView Android aceita compartilhamento de arquivos, o PDF é enviado com nome baseado no visitante e no número do atestado, evitando o nome genérico `Gold.pdf`.
