// Peta konversi huruf latin ke Hijaiyah
const hijaiyahMap = {
  alif: "ا",
  ba: "ب",
  ta: "ت",
  tsa: "ث",
  jim: "ج",
  ha: "ح",
  kho: "خ",
  dal: "د",
  dzal: "ذ",
  ra: "ر",
  za: "ز",
  sin: "س",
  syin: "ش",
  shod: "ص",
  dhod: "ض",
  tho: "ط",
  zho: "ظ",
  ain: "ع",
  ghain: "غ",
  fa: "ف",
  qof: "ق",
  kaf: "ك",
  lam: "ل",
  mim: "م",
  nun: "ن",
  ha2: "ه",
  waw: "و",
  ya: "ي"
};

// Fungsi untuk konversi biasa
function convertToHijaiyah() {
  const elements = document.querySelectorAll(".hijaiyah");
  elements.forEach((el) => {
    const text = el.textContent.trim().toLowerCase();
    const hijaiyah = hijaiyahMap[text] || text; // Ambil huruf Hijaiyah atau tetap jika tidak ditemukan
    el.textContent = hijaiyah;
  });
}

// Fungsi untuk konversi huruf sambung
function convertToHijaiyahJoined() {
  const elements = document.querySelectorAll(".hijaiyah2");
  elements.forEach((el) => {
    const text = el.textContent.trim().toLowerCase();

    // Pisahkan kata berdasarkan pola hijaiyahMap, kemudian konversi
    let arabicText = "";
    let buffer = "";

    for (let char of text) {
      buffer += char;
      if (hijaiyahMap[buffer]) {
        arabicText += hijaiyahMap[buffer];
        buffer = "";
      }
    }

    // Jika buffer tersisa (karakter tidak valid), tambahkan langsung
    if (buffer) arabicText += buffer;

    el.textContent = arabicText;
  });
}

// Jalankan fungsi setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  convertToHijaiyah();
  convertToHijaiyahJoined();
});
