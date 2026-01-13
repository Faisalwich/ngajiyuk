// app.js - Mesin Logika (Engine)

// ==========================================
// 1. SETUP VARIABEL & EVENT LISTENER
// ==========================================
let currentAudio = null;
let currentSholatView = "categories";
let allSurahs = [];

document.addEventListener("DOMContentLoaded", () => {
  // Setup Halaman Mengaji (Jika ada elemennya)
  if (document.getElementById("grid-hijaiyah")) {
    renderHijaiyah();
    fetchSurahList();
    document.getElementById("btn-back-to-list").onclick = showSurahList;
    const searchInput = document.getElementById("search-surah");
    if (searchInput) searchInput.addEventListener("input", (e) => filterSurahs(e.target.value));
  }

  // Setup Halaman Sholat (Jika ada elemennya)
  if (document.getElementById("sholat-content-grid")) {
    renderSholatCategories();
    document.getElementById("btn-back-nav").onclick = handleSholatBack;
  }
});

function stopAllAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  document.querySelectorAll(".ayah-card, .sholat-card").forEach((card) => card.classList.remove("playing-ayah", "playing-sholat"));
  document.querySelectorAll(".btn-play, .btn-sholat-play").forEach((btn) => (btn.innerHTML = `▶`));
}

// ==========================================
// 2. LOGIKA MENGAJI & AL-QURAN
// ==========================================
async function fetchSurahList() {
  try {
    const res = await fetch("https://api.alquran.cloud/v1/surah");
    const json = await res.json();
    allSurahs = json.data;
    displaySurahs(allSurahs);
  } catch (e) {
    console.error("API Error");
  }
}

function displaySurahs(data) {
  const container = document.getElementById("surah-list");
  container.innerHTML = "";
  data.forEach((surah) => {
    const card = document.createElement("div");
    card.className = "bg-slate-50 p-4 rounded-xl border border-transparent hover:border-emerald-300 transition-all cursor-pointer flex justify-between items-center group";
    card.innerHTML = `<div class="flex items-center gap-3"><span class="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">${surah.number}</span><div><h3 class="font-bold text-slate-800">${surah.englishName}</h3><p class="text-[10px] text-slate-400 uppercase">${surah.englishNameTranslation}</p></div></div><div class="text-xl font-bold text-emerald-600" dir="rtl">${surah.name}</div>`;
    card.onclick = () => fetchAndRenderSurah(surah.number, surah.englishName);
    container.appendChild(card);
  });
}

function filterSurahs(keyword) {
  const filtered = allSurahs.filter((s) => s.englishName.toLowerCase().includes(keyword.toLowerCase()) || s.number.toString().includes(keyword));
  displaySurahs(filtered);
}

async function fetchAndRenderSurah(num, name) {
  stopAllAudio();
  toggleMengajiView(true);
  const list = document.getElementById("list-ayat");
  const title = document.getElementById("section-title");
  list.innerHTML = "";
  document.getElementById("search-container").classList.add("hidden");
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/editions/quran-uthmani,id.indonesian,ar.alafasy`);
    const json = await res.json();
    title.innerHTML = `<h2 class="text-3xl font-bold text-slate-900 mb-2">${name}</h2><p class="text-slate-500 text-xs font-bold uppercase">${json.data[0].ayahs.length} Ayat</p>`;
    json.data[0].ayahs.forEach((ayah, i) => {
      const card = document.createElement("div");
      card.className = "ayah-card bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-4";
      card.innerHTML = `<div class="flex flex-col gap-6 text-left"><div class="flex justify-between items-start gap-4"><span class="bg-emerald-50 text-emerald-600 font-black w-8 h-8 flex items-center justify-center rounded-full text-xs flex-shrink-0">${ayah.numberInSurah}</span><p class="text-4xl font-bold text-slate-800 text-right leading-[1.8] w-full" dir="rtl">${ayah.text}</p></div><p class="text-slate-500 text-sm leading-relaxed border-t pt-6 whitespace-normal block w-full">${json.data[1].ayahs[i].text}</p><button onclick="playQuranAudio('${json.data[2].ayahs[i].audio}', this)" class="btn-play self-end bg-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-all">▶</button></div>`;
      list.appendChild(card);
    });
  } catch (e) {
    list.innerHTML = `<p>Gagal muat ayat.</p>`;
  }
}

function renderHijaiyah() {
  const grid = document.getElementById("grid-hijaiyah");
  if (!grid) return;
  // NOTE: hijaiyahList diambil dari file data.js
  hijaiyahList.forEach((item) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 transition-all cursor-pointer text-center group";
    card.innerHTML = `<div class="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110">${item.arab}</div><div class="text-lg font-semibold text-slate-700">${item.latin}</div><div class="text-xs text-slate-400 italic uppercase">${item.baca}</div>`;
    card.onclick = () => {
      speak(item.arab);
      card.classList.add("active-card");
      setTimeout(() => card.classList.remove("active-card"), 200);
    };
    grid.appendChild(card);
  });
}

// ==========================================
// 3. LOGIKA SHOLAT & PANDUAN
// ==========================================
function renderSholatCategories() {
  stopAllAudio();
  currentSholatView = "categories";
  updateSholatNavUI(false);
  const grid = document.getElementById("sholat-content-grid");
  if (!grid) return;
  grid.innerHTML = "";
  document.getElementById("main-title").innerText = "Panduan Lengkap";

  // NOTE: sholatCategories diambil dari file data.js
  sholatCategories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-300 transition-all cursor-pointer group";
    card.innerHTML = `<div class="text-4xl mb-4">${cat.icon}</div><h3 class="text-xl font-bold text-slate-800">${cat.nama}</h3><p class="text-slate-400 text-sm">${cat.desc}</p>`;
    card.onclick = () => renderSholatPrayerList(cat.id, cat.nama);
    grid.appendChild(card);
  });
}

function renderSholatPrayerList(catId, catName) {
  currentSholatView = "prayer-list";
  updateSholatNavUI(true);
  const grid = document.getElementById("sholat-content-grid");
  grid.innerHTML = "";
  document.getElementById("main-title").innerText = catName;

  // NOTE: prayersData diambil dari file data.js
  const filtered = prayersData.filter((p) => p.catId === catId);
  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:bg-emerald-50 transition-all cursor-pointer flex justify-between items-center";
    let sub = p.type === "sholat" ? p.rakaat + " Rakaat" : p.type === "teori" ? "Penjelasan" : "Bacaan";
    card.innerHTML = `<div><h3 class="font-bold text-slate-800">${p.nama}</h3><p class="text-slate-400 text-xs">${sub}</p></div><span>→</span>`;
    card.onclick = () => renderSholatDetail(p);
    grid.appendChild(card);
  });
}

function renderSholatDetail(prayer) {
  currentSholatView = "detail";
  document.getElementById("sholat-content-grid").classList.add("hidden");
  document.getElementById("sholat-detail-view").classList.remove("hidden");
  document.getElementById("main-title").innerText = prayer.nama;
  const container = document.getElementById("steps-container");
  container.innerHTML = "";

  if (prayer.type === "teori") {
    // TAMPILAN TEORI
    const div = document.createElement("div");
    div.className = "bg-white p-8 rounded-3xl border border-slate-100 shadow-sm";
    div.innerHTML = `<h4 class="text-xl font-bold mb-4 text-emerald-600">Penjelasan</h4><pre class="font-sans text-slate-700 whitespace-pre-wrap leading-loose text-base">${prayer.content}</pre>`;
    container.appendChild(div);
  } else if (prayer.type === "bacaan") {
    // TAMPILAN BACAAN (ADZAN, DOA)
    addSholatCard(
      container,
      {
        nama: prayer.nama,
        gerakan: "Dibaca dengan khusyuk.",
        arab: prayer.arab,
        latin: prayer.latin,
        audioUrl: prayer.audioUrl || "", // Mengambil URL dari data
      },
      1
    );
  } else if (prayer.type === "wudhu") {
    // TAMPILAN WUDHU
    addSholatCard(container, { nama: "Niat", gerakan: "Niat dalam hati.", arab: prayer.niat, latin: prayer.latin, audioUrl: "" }, 1);
    // NOTE: wudhuSteps diambil dari data.js
    wudhuSteps.forEach((s, i) => addSholatCard(container, s, i + 2));
  } else {
    // TAMPILAN SHOLAT STANDARD
    addSholatCard(container, { nama: "Niat", gerakan: "Niat dalam hati.", arab: prayer.niat, latin: prayer.latin, audioUrl: "" }, 1);
    if (prayer.nama.includes("Jenazah")) {
      addSholatCard(container, { nama: "4 Takbir", gerakan: "Berdiri 4 takbir.", arab: "اللهُ أَكْبَرُ", latin: "Allahu Akbar", audioUrl: "" }, 2);
    } else {
      // NOTE: universalSteps diambil dari data.js
      universalSteps.forEach((s, i) => addSholatCard(container, s, i + 2));
    }
  }
}

function addSholatCard(container, step, idx) {
  const div = document.createElement("div");
  div.className = "sholat-card bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-6 transition-all";

  let btnHtml = "";
  if (step.arab !== "-") {
    // Tombol play hanya muncul jika ada text arab
    btnHtml = `<button onclick="playSholatMix('${step.arab.replace(/'/g, "\\'")}', '${
      step.audioUrl || ""
    }', this)" class="btn-sholat-play bg-emerald-500 text-white p-3 rounded-xl shadow-lg active:scale-90 transition-all">▶</button>`;
  }

  div.innerHTML = `
    <div class="flex justify-between items-start mb-4">
        <div>
            <span class="text-[10px] font-bold text-emerald-600 uppercase">Bagian ${idx}</span>
            <h4 class="text-xl font-bold text-slate-800">${step.nama}</h4>
        </div>
        ${btnHtml}
    </div>
    ${step.arab !== "-" ? `<p class="text-slate-800 text-right text-3xl font-bold leading-loose mb-2" dir="rtl">${step.arab}</p>` : ""}
    ${step.latin !== "-" ? `<p class="text-emerald-700 italic text-sm mb-4">${step.latin}</p>` : ""}
    <div class="text-slate-500 text-xs bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-400 text-left"><strong>Panduan:</strong> ${step.gerakan}</div>
  `;
  container.appendChild(div);
}

// ==========================================
// 4. UTILS AUDIO & NAVIGASI
// ==========================================
function playQuranAudio(url, btn) {
  const card = btn.closest(".ayah-card");
  stopAllAudio();
  currentAudio = new Audio(url);
  btn.innerHTML = `⏳`;
  currentAudio.onplay = () => {
    card.classList.add("playing-ayah");
    btn.innerHTML = `||`;
  };
  currentAudio.onended = () => {
    stopAllAudio();
  };
  currentAudio.play();
}

function playSholatMix(arabText, mp3Url, btn) {
  const card = btn.closest(".sholat-card");
  stopAllAudio();
  btn.innerHTML = `⏳`;
  card.classList.add("playing-sholat");

  if (mp3Url && mp3Url !== "") {
    currentAudio = new Audio(mp3Url);
    currentAudio.onerror = () => {
      alert("Gagal memuat audio. Coba periksa koneksi internet Anda.");
      stopAllAudio();
    };
    currentAudio.onended = () => {
      stopAllAudio();
    };
    currentAudio.play();
  } else if ("speechSynthesis" in window) {
    const msg = new SpeechSynthesisUtterance(arabText);
    msg.lang = "ar-SA";
    msg.rate = 0.7;
    msg.onend = () => {
      stopAllAudio();
    };
    window.speechSynthesis.speak(msg);
  } else {
    alert("Maaf, browser Anda tidak mendukung pemutar suara.");
    stopAllAudio();
  }
}

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "ar-SA";
    window.speechSynthesis.speak(msg);
  }
}

function handleSholatBack() {
  stopAllAudio();
  if (currentSholatView === "detail") {
    document.getElementById("sholat-detail-view").classList.add("hidden");
    document.getElementById("sholat-content-grid").classList.remove("hidden");
    currentSholatView = "prayer-list";
    window.scrollTo(0, 0);
  } else {
    renderSholatCategories();
  }
}

function updateSholatNavUI(show) {
  const btnNav = document.getElementById("btn-back-nav");
  const btnHome = document.getElementById("btn-home");
  if (btnNav) btnNav.classList.toggle("hidden", !show);
  if (btnHome) btnHome.classList.toggle("hidden", show);
}

function toggleMengajiView(isDetail) {
  document.getElementById("surah-list").classList.toggle("hidden", isDetail);
  document.getElementById("list-ayat").classList.toggle("hidden", !isDetail);
  document.getElementById("btn-back-to-list").classList.toggle("hidden", !isDetail);
  document.getElementById("btn-back-to-menu").classList.toggle("hidden", isDetail);
  document.getElementById("hijaiyah-section").classList.toggle("hidden", isDetail);
  document.getElementById("header-section").classList.toggle("hidden", isDetail);
  window.scrollTo(0, 0);
}

function showSurahList() {
  stopAllAudio();
  toggleMengajiView(false);
  document.getElementById("search-container").classList.remove("hidden");
}
