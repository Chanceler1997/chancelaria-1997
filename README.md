# Chancelaria 1997 — v7.2.1

Base: v7.2.0 estável, já confirmada fisicamente para visualizar e compartilhar PDF.

Alteração desta revisão:

- no Histórico de Atestados ficam quatro ações: Visualizar PDF, Compartilhar PDF, WhatsApp e Editar;
- o botão redundante “Enviar a <nome>” foi retirado do histórico;
- “Compartilhar PDF” agora usa o telefone cadastrado do visitante e solicita envio do PDF ao contato no WhatsApp;
- “WhatsApp” continua abrindo a conversa do contato sem anexar PDF;
- o fluxo genérico de PDF e a visualização permanecem no exportador aprovado da v7.2.0;
- a rotina de envio direto é isolada e atua somente depois de o PDF já ter sido criado;
- nenhuma ponte JavaScript da extensão de WhatsApp é instalada.

Identidade Android preservada:

- package: br.org.razaoeforca.chancelaria1997
- namespace: io.kodular.chancelaria1997.Chancelaria1997_V6_0_3_FINAL
- VersionName: 7.2.1
- VersionCode: 71
