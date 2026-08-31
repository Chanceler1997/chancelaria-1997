# Ponte Kodular v5.8.14

## Histórico
A página envia um pulso neutro `00<timestamp>` e depois `HI`.

O Kodular trata `HI` no evento `Web_Viewer1.WebViewStringChange` e abre a Screen `Historico`.

## PDF
A página envia um pulso neutro `00<timestamp>` e depois:

`SI<URL HTTPS do documento>`

O pulso neutro evita texto vazio. Isso é necessário porque os blocos atuais usam `segment text` com início 1 e comprimento 2.

Ao receber `SI`, a Screen1:
1. remove `SI`;
2. grava a URL em `global URLAtestado`;
3. recupera `pdf_ + URLAtestado` no TinyDB;
4. navega para a URL;
5. cria PDF apenas quando `CaminhoPDF` estiver vazio;
6. compartilha o caminho salvo nas próximas vezes.

## Botões nativos
Na versão final do APK, deixe `Button1.Visible = false` e `Button2.Visible = false`.
