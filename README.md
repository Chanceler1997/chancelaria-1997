# Chancelaria 1997 v7.1.6

Pacote web correspondente ao AIA v7.1.6.

Principais ajustes desta revisão:

1. Mantém o pacote Android `br.org.razaoeforca.chancelaria1997` e o namespace `chancelaria1997_v704_recuperacao_`.
2. Liga `WhatsappPdfShare1.AttachBridges` aos dois WebViewers durante a inicialização.
3. Envia cada documento por uma chamada nativa direta e atômica: `SHARE`, `WHATSAPP` ou `VIEW`.
4. Gera o PDF após o retorno `ChancelariaPDF.ready`, grava em `MediaStore Downloads` e abre a ação Android real.
5. Reutiliza o PDF armazenado pela identidade integral da URL e não cria outra cópia.
6. Mantém o protocolo `PDFCreated`, `PI`, `SI`, `VI`, `PH`, `TK` e `RS` como reserva compatível.
7. Usa no envio dirigido o telefone permanente e a mesma normalização do botão WhatsApp.
8. Mantém intactos A4, assinatura na última página, paginação, certificado, atestado e responsividade.

GitHub Pages: `https://chanceler1997.github.io/chancelaria-1997/index.html?v=7.1.6`
