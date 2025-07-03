# 🔳 Smart QR Code Generator with OCR

A web-based QR code generator that accepts manual input or extracts text from uploaded images using OCR. Includes modern UX features like drag-and-drop support, dark mode toggle, and downloadable QR codes.

---

## 🚀 Features

- ✅ Generate QR codes from plain text or URLs
- 📷 Scan text from images using **Tesseract.js** (OCR)
- 🖱️ Drag & drop image support for scanning
- 🌗 Toggle **dark mode** for visual comfort
- 💾 **Download QR code** as PNG
- 🎯 Responsive UI with **Bootstrap**

---

## 🧰 Tech Stack

| Layer       | Technologies                            |
|-------------|------------------------------------------|
| Frontend    | HTML, CSS, JavaScript, Bootstrap         |
| OCR Library | [Tesseract.js](https://github.com/naptha/tesseract.js) |
| QR API      | [api.qrserver.com](https://goqr.me/api/) |
| Utils       | DOM API, drag-and-drop, canvas export    |

---

## 📸 Screenshots

<img width="551" alt="Screenshot 2025-07-03 at 9 54 50 AM" src="https://github.com/user-attachments/assets/a0d0aab2-03fa-4df8-8b65-54a3884cf498" />

---

## 🧠 How It Works

1. **Enter text** or URL manually  
2. Or **upload / drag & drop** an image with readable text  
3. **OCR scans the text**, fills input field automatically  
4. App generates the QR code in real time  
5. Optionally **download the QR code** or switch to dark mode

---

## 🛠 Setup & Run Locally

```bash
  git clone https://github.com/your-username/qr-code-generator.git
  cd qr-code-generator
  #Open index.html in browser

