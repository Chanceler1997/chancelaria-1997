# Chancelaria 1997 v7.1.8

Revisão focada exclusivamente no fluxo físico de PDF.

A geração, reutilização, compartilhamento Android, envio ao WhatsApp e visualização passam pela ponte nativa direta `ChancelariaNative.request`, sem depender do parser de comandos dos blocos para concluir a ação.

O caminho anterior por `TK`, `NI`, `PI`, `SI`, `VI`, `RS`, `Clock1` e `PDFCreated` permanece no projeto como fallback.

A extensão `WhatsappPdfShare` foi atualizada para aceitar `VIEW_PDF` no fluxo nativo. Nesse modo ela gera ou reutiliza o PDF no MediaStore e abre o URI `content://` com `ACTION_VIEW`.

Compartilhamento usa `ACTION_SEND`, `application/pdf`, `EXTRA_STREAM`, `FLAG_GRANT_READ_URI_PERMISSION` e `ClipData`.

O PDF de impressão é carregado do `android_asset`, reduzindo a dependência do GitHub durante a geração. A tela principal continua no mesmo domínio para preservar o armazenamento do aplicativo.

Pacote Android: `br.org.razaoeforca.chancelaria1997`

Versão: 7.1.8, versionCode 67.
