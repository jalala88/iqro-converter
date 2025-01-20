// Peta konversi huruf latin ke Hijaiyah
const hijaiyahMap = {
  "أ": {
    "fathah": "أَ",
    "kasrah": "أِ",
    "dammah": "أُ",
    "tanwinFathah": "أً",
    "tanwinKasrah": "أٍ",
    "tanwinDammah": "أٌ"
  },
  "ب": {
    "fathah": "بَ",
    "kasrah": "بِ",
    "dammah": "بُ",
    "tanwinFathah": "بً",
    "tanwinKasrah": "بٍ",
    "tanwinDammah": "بٌ"
  },
  "ت": {
    "fathah": "تَ",
    "kasrah": "تِ",
    "dammah": "تُ",
    "tanwinFathah": "تً",
    "tanwinKasrah": "تٍ",
    "tanwinDammah": "تٌ"
  },
  "ث": {
    "fathah": "ثَ",
    "kasrah": "ثِ",
    "dammah": "ثُ",
    "tanwinFathah": "ثً",
    "tanwinKasrah": "ثٍ",
    "tanwinDammah": "ثٌ"
  },
  "ج": {
    "fathah": "جَ",
    "kasrah": "جِ",
    "dammah": "جُ",
    "tanwinFathah": "جً",
    "tanwinKasrah": "جٍ",
    "tanwinDammah": "جٌ"
  },
  "ح": {
    "fathah": "حَ",
    "kasrah": "حِ",
    "dammah": "حُ",
    "tanwinFathah": "حً",
    "tanwinKasrah": "حٍ",
    "tanwinDammah": "حٌ"
  },
  "خ": {
    "fathah": "خَ",
    "kasrah": "خِ",
    "dammah": "خُ",
    "tanwinFathah": "خً",
    "tanwinKasrah": "خٍ",
    "tanwinDammah": "خٌ"
  },
  "د": {
    "fathah": "دَ",
    "kasrah": "دِ",
    "dammah": "دُ",
    "tanwinFathah": "دً",
    "tanwinKasrah": "دٍ",
    "tanwinDammah": "دٌ"
  },
  "ذ": {
    "fathah": "ذَ",
    "kasrah": "ذِ",
    "dammah": "ذُ",
    "tanwinFathah": "ذً",
    "tanwinKasrah": "ذٍ",
    "tanwinDammah": "ذٌ"
  },
  "ر": {
    "fathah": "رَ",
    "kasrah": "رِ",
    "dammah": "رُ",
    "tanwinFathah": "رً",
    "tanwinKasrah": "رٍ",
    "tanwinDammah": "رٌ"
  },
  "ز": {
    "fathah": "زَ",
    "kasrah": "زِ",
    "dammah": "زُ",
    "tanwinFathah": "زً",
    "tanwinKasrah": "زٍ",
    "tanwinDammah": "زٌ"
  },
  "س": {
    "fathah": "سَ",
    "kasrah": "سِ",
    "dammah": "سُ",
    "tanwinFathah": "سً",
    "tanwinKasrah": "سٍ",
    "tanwinDammah": "سٌ"
  },
  "ش": {
    "fathah": "شَ",
    "kasrah": "شِ",
    "dammah": "شُ",
    "tanwinFathah": "شً",
    "tanwinKasrah": "شٍ",
    "tanwinDammah": "شٌ"
  },
  "ص": {
    "fathah": "صَ",
    "kasrah": "صِ",
    "dammah": "صُ",
    "tanwinFathah": "صً",
    "tanwinKasrah": "صٍ",
    "tanwinDammah": "صٌ"
  },
  "ض": {
    "fathah": "ضَ",
    "kasrah": "ضِ",
    "dammah": "ضُ",
    "tanwinFathah": "ضً",
    "tanwinKasrah": "ضٍ",
    "tanwinDammah": "ضٌ"
  },
  "ط": {
    "fathah": "طَ",
    "kasrah": "طِ",
    "dammah": "طُ",
    "tanwinFathah": "طً",
    "tanwinKasrah": "طٍ",
    "tanwinDammah": "طٌ"
  },
  "ظ": {
    "fathah": "ظَ",
    "kasrah": "ظِ",
    "dammah": "ظُ",
    "tanwinFathah": "ظً",
    "tanwinKasrah": "ظٍ",
    "tanwinDammah": "ظٌ"
  },
  "ع": {
    "fathah": "عَ",
    "kasrah": "عِ",
    "dammah": "عُ",
    "tanwinFathah": "عً",
    "tanwinKasrah": "عٍ",
    "tanwinDammah": "عٌ"
  },
  "غ": {
    "fathah": "غَ",
    "kasrah": "غِ",
    "dammah": "غُ",
    "tanwinFathah": "غً",
    "tanwinKasrah": "غٍ",
    "tanwinDammah": "غٌ"
  },
  "ف": {
    "fathah": "فَ",
    "kasrah": "فِ",
    "dammah": "فُ",
    "tanwinFathah": "فً",
    "tanwinKasrah": "فٍ",
    "tanwinDammah": "فٌ"
  },
  "ق": {
    "fathah": "قَ",
    "kasrah": "قِ",
    "dammah": "قُ",
    "tanwinFathah": "قً",
    "tanwinKasrah": "قٍ",
    "tanwinDammah": "قٌ"
  },
  "ك": {
    "fathah": "كَ",
    "kasrah": "كِ",
    "dammah": "كُ",
    "tanwinFathah": "كً",
    "tanwinKasrah": "كٍ",
    "tanwinDammah": "كٌ"
  },
  "ل": {
    "fathah": "لَ",
    "kasrah": "لِ",
    "dammah": "لُ",
    "tanwinFathah": "لً",
    "tanwinKasrah": "لٍ",
    "tanwinDammah": "لٌ"
  },
  "م": {
    "fathah": "مَ",
    "kasrah": "مِ",
    "dammah": "مُ",
    "tanwinFathah": "مً",
    "tanwinKasrah": "مٍ",
    "tanwinDammah": "مٌ"
  },
  "ن": {
    "fathah": "نَ",
    "kasrah": "نِ",
    "dammah": "نُ",
    "tanwinFathah": "نً",
    "tanwinKasrah": "نٍ",
    "tanwinDammah": "نٌ"
  },
  "ه": {
    "fathah": "هَ",
    "kasrah": "هِ",
    "dammah": "هُ",
    "tanwinFathah": "هً",
    "tanwinKasrah": "هٍ",
    "tanwinDammah": "هٌ"
  },
  "و": {
    "fathah": "وَ",
    "kasrah": "وِ",
    "dammah": "وُ",
    "tanwinFathah": "وً",
    "tanwinKasrah": "وٍ",
    "tanwinDammah": "وٌ"
  },
  "ي": {
    "fathah": "يَ",
    "kasrah": "يِ",
    "dammah": "يُ",
    "tanwinFathah": "يً",
    "tanwinKasrah": "يٍ",
    "tanwinDammah": "يٌ"
  }
};


// Fungsi untuk konversi biasa
function convertToHijaiyah() {
  const elements = document.querySelectorAll(".hijaiyah");
  elements.forEach((el) => {
    const text = el.textContent.trim().toLowerCase();
    const hijaiyah = hijaiyahMap[text] ? hijaiyahMap[text].fathah : text; // Ambil huruf Hijaiyah atau tetap jika tidak ditemukan
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
        arabicText += hijaiyahMap[buffer].fathah; // Ambil konversi dengan fathah
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
