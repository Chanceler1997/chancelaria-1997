# Chancelaria 1997 v7.1.7

Pacote web correspondente ao AIA v7.1.7.

Principais ajustes desta revisão:

1. Mantém o pacote Android `br.org.razaoeforca.chancelaria1997` e o namespace `io.kodular.chancelaria1997.Chancelaria1997_V6_0_3_FINAL`.
2. Restaura para a geração o mesmo `Web_Viewer1` visível usado pela v6.1.6, cujo compartilhamento funcionou fisicamente no Samsung.
3. Executa `TK`, `DW`, `NI` e `PI`, `SI`, `VI` ou `RS`, aguarda `Webviewpdfexporter1.PDFCreated` e só então abre a ação final correspondente.
4. Mantém separadas as ações `ShareAndroidChooser`, `ShareToWhatsApp` e `OpenPDF`.
5. Reutiliza o PDF armazenado pela identidade integral do documento e não cria outra cópia quando `RS` encontra a URI válida.
6. Liga também `WhatsappPdfShare1.AttachBridges` aos dois WebViewers e resolve o `WebView` interno quando o Kodular o entrega dentro de um contêiner Android.
7. Usa no envio dirigido o telefone permanente e a mesma normalização do botão WhatsApp.
8. Mantém intactos A4, assinatura na última página, paginação, certificado, atestado e responsividade.
9. Remove dos botões de PDF o atalho direto que podia ficar aguardando `ChancelariaPDF.ready` e terminar apenas em “Preparando PDF...”.

GitHub Pages: `https://chanceler1997.github.io/chancelaria-1997/index.html?v=7.1.7`
