# Chancelaria 1997 — v5.8.15

Pacote limpo para publicação no GitHub Pages.

Arquivos do aplicativo:

- index.html
- imprimir.html
- manifest.json
- service-worker.js
- cabecalho-oficial.jpg
- certificado-base.png
- assinatura-chanceler.png
- icon-192.png
- icon-512.png

Ajustes desta versão:

- protocolo Kodular de compartilhamento padronizado em SI<URL>;
- pulso não vazio antes de HI e SI para evitar erro de operação de texto;
- correção do fluxo de compartilhamento de atestado;
- cache do service worker atualizado para v5815;
- removidos arquivos antigos e documentação de versões anteriores do pacote de publicação.

## Publicação

Apague os arquivos antigos da raiz do repositório e envie os arquivos deste pacote para a raiz.
Não envie o ZIP como um único arquivo. Extraia o ZIP e envie os arquivos internos.

Após o GitHub Pages concluir a implantação, feche e abra novamente o aplicativo para o novo service worker assumir o cache.
