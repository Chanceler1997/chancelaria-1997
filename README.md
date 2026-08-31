# Chancelaria 1997 — v5.8.14

- Corrigido o erro `Invalid text operation`: a ponte não envia mais WebViewString vazio antes de `HI` ou `SI`.
Correção integrada para o projeto Kodular atual.

- A página inicial ganhou **Atestados emitidos**. O comando envia `HI` e abre a Screen `Historico`.
- O compartilhamento de atestados usa `SI<URL>` como protocolo principal, de acordo com os blocos atuais da Screen1.
- `S|<URL>` continua como fallback de compatibilidade.
- Antes da ponte nativa, o app tenta compartilhar o PDF pela Web Share API com nome baseado no atestado.
- O cache foi atualizado para `v5814-kodular-nonempty-bridge`.

Consulte `PONTE-KODULAR-v5.8.14.md` e `CORRECAO-v5.8.14.txt`.

---

# Chancelaria 1997 — v5.8.9

Integração simplificada com Kodular + extensão Webviewpdfexporter.

Protocolo nativo de PDF: `S|<URL HTTPS do documento>`.

Fluxo esperado no Kodular: receber `S|` → navegar `Web_Viewer1` para a URL → aguardar `PageLoaded` → `CreatePDF` → `PDFCreated` → `SharePDF` → voltar ao app.

Mantidos os comandos existentes `W|`, `P|`, `T|` e `X|`.
# Chancelaria 1997 — versão 5.8.8

Aplicativo de apoio às atribuições da Chancelaria da A.R.L.S. Razão e Força nº 1997, Oriente de Porto Murtinho/MS, federada ao Grande Oriente do Brasil e jurisdicionada ao GOB-MS.

## Arquivos da versão

- `index.html` — aplicativo principal.
- `imprimir.html` — conferência, relatórios, impressão e salvamento em PDF.
- `manifest.json` — configuração PWA.
- `service-worker.js` — funcionamento offline/cache.
- `certificado-base.png` — base visual única do atestado de frequência maçônica.
- `assinatura-chanceler.png` — assinatura usada no atestado.
- `cabecalho-oficial.jpg` — cabeçalho institucional.
- `icon-192.png` e `icon-512.png` — ícones do aplicativo.

## Correção do PDF — v5.8.8

A versão 5.8.8 elimina o uso de URL `blob:` como alternativa para abrir o PDF fora do WebViewer. Esse método não é confiável no Android/Kodular porque a URL temporária pertence ao contexto interno da página.

O comando **Enviar atestado** continua tentando primeiro o compartilhamento nativo de arquivo pela Web Share API. Se o WebViewer não aceitar o PDF, o aplicativo abre uma página HTTPS do próprio aplicativo com o atestado, onde é possível usar **Imprimir ou salvar em PDF**.

O comando **Conferir atestado** abre a mesma visualização HTTPS, evitando a tentativa defeituosa de abrir uma URL `blob:`.

Também foi padronizado o nome `imprimir.html` em `index.html`, `service-worker.js` e neste README.

## Publicação

Envie todos os arquivos desta pasta para a raiz do repositório GitHub Pages. Remova qualquer `print.html` antigo para evitar duplicidade. Após publicar, aguarde a nova implantação do GitHub Pages e feche/reabra o aplicativo para o novo service worker assumir o cache.


## V5.8.8 — ponte nativa de compartilhamento

A interface web agora possui um protocolo nativo único `S|<payload>` para compartilhar documentos.

- Relatórios: botão **Compartilhar PDF** no preview.
- Atestados: o botão de compartilhamento prioriza a ponte nativa.
- Fallback: se o Kodular não responder à ponte, permanece o fluxo 5.8.7 de impressão/PDF.
- Futuro: o mesmo protocolo já reserva `image-dataurl` para artes de felicitações.

### Receptor Kodular obrigatório
O app nativo deve tratar `S|` no evento `Web_Viewer1.WebViewStringChange`. O payload Base64URL contém JSON com `id`, `kind`, `url`, `filename` e `title`. Para `kind=webpdf`, carregar `url` em um WebViewer auxiliar, gerar um PDF temporário e compartilhá-lo com `ACTION_SEND`/FileProvider; depois responder ao JavaScript com `window.chancelariaNativeAck(id,"ok")`. Em erro, responder `window.chancelariaNativeAck(id,"erro",mensagem)`.

Não grave Base64 com o componente File como texto. PDF deve ser criado como arquivo binário real.


## Ajustes v5.8.12

- Corrige o corte lateral do atestado no PDF criado pelo Webviewpdfexporter: a arte A4 é escalada integralmente para a largura real do WebViewer antes da captura.
- Mantém a barra de impressão oculta no modo `nativepdf=1`.
- Inclui o número WhatsApp normalizado do visitante no parâmetro `wa` da URL nativa, preparando a próxima etapa de direcionamento do compartilhamento no Kodular.
- O protocolo `S|<URL>` permanece compatível com os blocos já montados.
