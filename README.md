# Chancelaria 1997 — versão 5.8.7

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

## Correção do PDF — v5.8.7

A versão 5.8.7 elimina o uso de URL `blob:` como alternativa para abrir o PDF fora do WebViewer. Esse método não é confiável no Android/Kodular porque a URL temporária pertence ao contexto interno da página.

O comando **Enviar atestado** continua tentando primeiro o compartilhamento nativo de arquivo pela Web Share API. Se o WebViewer não aceitar o PDF, o aplicativo abre uma página HTTPS do próprio aplicativo com o atestado, onde é possível usar **Imprimir ou salvar em PDF**.

O comando **Conferir atestado** abre a mesma visualização HTTPS, evitando a tentativa defeituosa de abrir uma URL `blob:`.

Também foi padronizado o nome `imprimir.html` em `index.html`, `service-worker.js` e neste README.

## Publicação

Envie todos os arquivos desta pasta para a raiz do repositório GitHub Pages. Remova qualquer `print.html` antigo para evitar duplicidade. Após publicar, aguarde a nova implantação do GitHub Pages e feche/reabra o aplicativo para o novo service worker assumir o cache.
