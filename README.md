# Chancelaria 1997 — v7.2.5 HOMOLOGAÇÃO

Esta revisão combina a camada web mais completa da Chancelaria com o motor Android de PDF da v6.1.6, a referência que funcionou fisicamente no Samsung.

## Mantido da evolução recente

- recuperação do cofre e migração dos dados da família `arls1997_` para o namespace atual;
- histórico completo de atestados;
- lixeira e restauração;
- grau visível nos cartões de Sessões;
- relatórios individual, coletivo e por sessão;
- certificado de aniversário natalício;
- certificado-base mais recente com marca d'água;
- melhorias de Visitantes, frequência, segurança e retorno de ações externas;
- layout A4 e paginação mais recentes de `imprimir.html`.

## PDF estabilizado sobre a v6.1.6

- componentes Android e blocos da v6.1.6 preservados;
- `Webviewpdfexporter` original preservado byte a byte;
- compartilhamento físico por `PI/SI -> PH -> CreatePDF -> PDFCreated -> SharePDF`;
- nome do arquivo enviado por `NI`;
- visualização de atestado por `VI`, sem gerar outra cópia;
- sem `TK`, `RS` ou `DW` no despacho final da interface;
- sem `WhatsappPdfShare` e sem extensão específica para anexar PDF ao WhatsApp;
- o WhatsApp volta a ser escolhido pelo seletor Android após o PDF ser anexado.

## Identidade Android

- package: `br.org.razaoeforca.chancelaria1997`
- main/namespace nativo: `io.kodular.chancelaria1997.Chancelaria1997_V6_0_3_FINAL`
- VersionName: 7.2.4
- VersionCode: 73
- URL: `https://chanceler1997.github.io/chancelaria-1997/index.html?v=7.2.4`

O VersionCode 72 mantém o mesmo package e permite atualização sobre as compilações anteriores.

## Cache

O service worker trata `index.html` e `imprimir.html` separadamente. Se a rede falhar, a página de impressão usa sua própria cópia em cache. Ela não é substituída pela tela inicial.

## Publicação

Publique os 10 arquivos do ZIP na raiz do GitHub Pages. Depois feche e abra o aplicativo para atualizar o service worker. Compile o AIA no Kodular e instale a atualização sobre o aplicativo existente.

## Ensaio no Samsung

1. Abra um atestado duas vezes. A visualização deve abrir sem criar novas cópias.
2. Compartilhe o atestado. O seletor Android deve abrir com um PDF anexado.
3. Escolha WhatsApp no seletor e confirme o documento anexado.
4. Repita com relatório individual, coletivo e de sessão.
5. Gere o certificado de aniversário e confira enquadramento, textos e marca d'água.


## Núcleo 7.2.1 auditado

Base funcional preservada: 7.2.0 estável sobre 6.1.6.

Ajustes desta revisão:

1. impressão nativa usa a cópia empacotada de imprimir.html para impedir regressão por cache ou versão remota
2. trava curta contra duplo disparo do mesmo PDF
3. aniversários e aniversários de filiação oferecem texto ou certificado para compartilhamento em grupo
4. atestado de visitante e relatório individual permanecem fluxos individuais
5. ações diretas de WhatsApp no cadastro de visitante foram retiradas da interface
6. estrutura de banco, prefixo de armazenamento, pacote Android, IDs e extensões de PDF foram preservados


## v7.2.2 — homologação de paginação

Alteração funcional restrita a `imprimir.html`:

1. relatórios multipágina voltam a preencher cada folha progressivamente até a última linha inteira que cabe;
2. removido o rebalanceamento que deslocava linhas para a folha seguinte e ampliava a faixa branca inferior;
3. cabeçalho, título, tabela, assinatura, paginação e motor Android de PDF permanecem preservados;
4. rodapé de relatórios passa a mostrar data e hora de emissão, usando a área já reservada para rodapé;
5. indicador de continuação foi compactado para devolver área útil ao relatório.

Metadados de versão e cache foram atualizados para 7.2.2. Banco, IDs, package Android, Webviewpdfexporter, CreatePDF, PDFCreated e compartilhamento não foram alterados.


## v7.2.5 — revisão visual da tela Sessões

Alteração pontual de interface. Os cartões de Sessões receberam alinhamento uniforme, espaçamento consistente, melhor quebra de textos, área de indicadores organizada e botões Consultar e Chamada com dimensões equivalentes em telas estreitas.

Nenhuma regra de cadastro, sessão, frequência, banco, PDF ou compartilhamento foi alterada. O arquivo imprimir.html foi preservado integralmente em relação à v7.2.2.


## v7.2.5 — cabeçalho fixo

- Cabeçalho principal passa de `position: sticky` para `position: fixed`.
- Reserva de 58 px no layout geral e 52 px em telas móveis para impedir sobreposição do conteúdo.
- Rodapé de navegação, tela Sessões, PDFs, banco e compartilhamento permanecem inalterados.
