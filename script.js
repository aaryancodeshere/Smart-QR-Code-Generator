const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let input = document.getElementById("content");
let button = document.getElementById("generate");
let scanButton = document.getElementById("scan");
let imageInput = document.getElementById("imageInput");
let img = document.getElementById("qrcode");
let imgbox = document.getElementById("imgbox");

// Generate QR from manual input
button.addEventListener("click", () => {
    let data = input.value;
    if (data.length > 0) {
        img.src = url + encodeURIComponent(data);
        imgbox.classList.add("show-image");
    } else {
        alert("Please add some text");
    }
});

// Scan image and generate QR from scanned text
scanButton.addEventListener("click", () => {
    const file = imageInput.files[0];
    if (!file) {
        alert("Please upload an image");
        return;
    }

    Tesseract.recognize(file, 'eng', {
        logger: m => console.log(m)
    }).then(({ data: { text } }) => {
        input.value = text.trim();
        if (text.trim().length > 0) {
            img.src = url + encodeURIComponent(text.trim());
            imgbox.classList.add("show-image");
        } else {
            alert("No readable text found in image.");
        }
    }).catch(err => {
        console.error("OCR Error:", err);
        alert("Failed to read text from image.");
    });
});

// Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Download QR code
document.getElementById("downloadQR").addEventListener("click", () => {
    const qr = document.getElementById("qrcode");
    if (!qr.src) return alert("No QR Code to download.");
    const link = document.createElement("a");
    link.href = qr.src;
    link.download = "qr_code.png";
    link.click();
});

// Drag and drop image to scan
const dropArea = document.getElementById("dropArea");

["dragenter", "dragover"].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.classList.add("dragover");
    });
});

["dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.classList.remove("dragover");
    });
});

dropArea.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0];
    if (!file) return;

    Tesseract.recognize(file, 'eng', {
        logger: m => console.log(m)
    }).then(({ data: { text } }) => {
        input.value = text.trim();
        if (text.trim().length > 0) {
            img.src = url + encodeURIComponent(text.trim());
            imgbox.classList.add("show-image");
        } else {
            alert("No readable text found in image.");
        }
    }).catch(err => {
        console.error("OCR error:", err);
        alert("Failed to read text from dropped image.");
    });
});
