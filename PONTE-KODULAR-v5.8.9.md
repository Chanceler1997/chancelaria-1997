# Ponte Kodular v5.8.9 — Webviewpdfexporter

## Protocolo
`S|<URL HTTPS>`

## Blocos
1. global `pdfPendente` = false.
2. No `Web_Viewer1.WebViewStringChange`, após W/P/X/T, testar prefixo `S|`.
3. Se `S|`: set `pdfPendente=true`; `Web_Viewer1.GoToUrl` com a string removendo somente o prefixo `S|`.
4. Em `Web_Viewer1.PageLoaded`: se `pdfPendente`, set false e chamar `Webviewpdfexporter1.CreatePDF`.
5. Em `Webviewpdfexporter1.PDFCreated`: chamar `SharePDF`; depois, se `Web_Viewer1.CanGoBack`, chamar `GoBack`.
6. `ErrorOccurred`: mostrar `message` no Notifier e, se possível, voltar.

O `SetWebView(Web_Viewer1)` permanece em `Screen1.Initialize`.
