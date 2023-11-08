function startDownload() {
    // Substitua o URL abaixo pelo link do arquivo que você deseja baixar
    var downloadUrl = "seu_link_de_download_aqui";

    // Crie um elemento de âncora oculto para iniciar o download
    var downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "nome_do_arquivo"; // Nome do arquivo a ser baixado
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
}
