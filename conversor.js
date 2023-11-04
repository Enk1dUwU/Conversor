function convertPNG() {
    const fileInput = document.getElementById("webpFile");
    const convertButton = document.getElementById("convertButtonpng");
    const downloadLink = document.getElementById("downloadLinkpng");

    convertButton.addEventListener("click", function () {
        const file = fileInput.files[0];
        const filewebp = file.name;
        const filename = filewebp.split(".");
        const pngname = filename[0] + ".png";
        if (file) {
            const reader = new FileReader();


            reader.onload = function (e) {
                const webpUrl = e.target.result;

                const img = new Image();
                img.src = webpUrl;

                img.onload = function () {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    const pngUrl = canvas.toDataURL("image/png");

                    // Configura el enlace de descarga con la imagen PNG
                    downloadLink.href = pngUrl;    
                    downloadLink.setAttribute('download', pngname);

                    // Simula el clic en el enlace para iniciar la descarga
                    downloadLink.click();
                };
            };

            reader.readAsDataURL(file);
        }
    });
});

function convertToMP3() {
    const mp4File = document.getElementById('mp4File').files[0];
    const mp4name = mp4File.name;
    const filename = mp4name.split(".");
    const mp3name = filename[0] + ".png";
    if (!mp4File) {
        alert('Selecciona un archivo MP4.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const arrayBuffer = this.result;
        const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });

        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.setAttribute('download', mp3name);
        downloadLink.click();

        const statusText = document.getElementById('conversionStatus');
        statusText.innerHTML = 'Conversión completada.';
    };
    reader.readAsArrayBuffer(mp4File);
    
}
