# Chancelaria 1997 — versão 5.8.6

Aplicativo de apoio às atribuições da Chancelaria da A.R.L.S. Razão e Força nº 1997, Oriente de Porto Murtinho/MS, federada ao Grande Oriente do Brasil e jurisdicionada ao GOB-MS.

## Arquivos da versão

- `index.html` — aplicativo principal.
- `print.html` — relatórios e impressão.
- `manifest.json` — configuração PWA.
- `service-worker.js` — funcionamento offline/cache.
- `certificado-base.png` — base visual única do atestado de frequência maçônica.
- `assinatura-chanceler.png` — assinatura usada no atestado.
- `cabecalho-oficial.jpg` — cabeçalho institucional.
- `icon-192.png` e `icon-512.png` — ícones do aplicativo.

## Atestados de visitantes

Cada visitante possui cadastro único. Cada comparecimento é registrado como uma visita independente e mantém seu próprio número de atestado no histórico.

A emissão utiliza `certificado-base.png` como única composição visual de fundo. Os dados do visitante e da sessão são renderizados dinamicamente pelo aplicativo.

Na versão 5.8.6, o comando **Enviar atestado** tenta o compartilhamento de arquivo permitido pelo ambiente web. Quando o WebViewer não oferece compartilhamento direto, o aplicativo utiliza o visualizador do Android como alternativa, evitando o fluxo de impressão sempre que o aparelho permitir.

## Publicação

Ao atualizar o GitHub Pages, envie todos os arquivos desta pasta para a raiz do repositório. Evite manter modelos antigos de certificado na raiz para não criar referências ou manutenção ambíguas.
