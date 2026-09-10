# Chancelaria 1997 — v7.2.0 ESTÁVEL

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
- VersionName: 7.2.0
- VersionCode: 70
- URL: `https://chanceler1997.github.io/chancelaria-1997/index.html?v=7.2.0`

O VersionCode 70 foi escolhido para atualizar as compilações 7.1.x usadas nos ensaios sem trocar o package.

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
