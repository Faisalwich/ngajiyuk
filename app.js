// ==========================================
// 1. SETUP VARIABEL & EVENT LISTENER
// ==========================================
let currentAudio = null;
let currentSholatView = "categories";
let allSurahs = [];

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("grid-hijaiyah")) {
    renderHijaiyah();
    fetchSurahList();
    document.getElementById("btn-back-to-list").onclick = showSurahList;
    const searchInput = document.getElementById("search-surah");
    if (searchInput) searchInput.addEventListener("input", (e) => filterSurahs(e.target.value));
  }
  if (document.getElementById("sholat-content-grid")) {
    renderSholatCategories();
    document.getElementById("btn-back-nav").onclick = handleSholatBack;
  }
});

// ==========================================
// 2. LOGIKA MENGAJI & AL-QURAN (EQURAN.ID)
// ==========================================
async function fetchSurahList() {
  try {
    const res = await fetch("https://equran.id/api/v2/surat");
    const json = await res.json();
    allSurahs = json.data;
    displaySurahs(allSurahs);
    renderBookmarkBanner(); 
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
    card.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">${surah.nomor}</span>
            <div>
                <h3 class="font-bold text-slate-800">${surah.namaLatin}</h3>
                <p class="text-[10px] text-slate-400 uppercase">${surah.arti}</p>
            </div>
        </div>
        <div class="text-xl font-bold text-emerald-600" dir="rtl">${surah.nama}</div>`;
    card.onclick = () => fetchAndRenderSurah(surah.nomor, surah.namaLatin);
    container.appendChild(card);
  });
}

function filterSurahs(keyword) {
  const filtered = allSurahs.filter((s) => s.namaLatin.toLowerCase().includes(keyword.toLowerCase()) || s.nomor.toString().includes(keyword));
  displaySurahs(filtered);
}

async function fetchAndRenderSurah(num, name, scrollToAyah = null) {
  stopAllAudio();
  toggleMengajiView(true);
  const list = document.getElementById("list-ayat");
  const title = document.getElementById("section-title");
  
  list.innerHTML = `<div class="text-center p-10"><span class="text-lg text-emerald-600 font-bold animate-pulse">⏳ Memuat Surah...</span></div>`;
  const searchContainer = document.getElementById("search-container");
  if(searchContainer) searchContainer.classList.add("hidden");

  try {
    const res = await fetch(`https://equran.id/api/v2/surat/${num}`);
    const json = await res.json();
    const surahData = json.data;
    
    // Mengamankan nama surat dari tanda kutip (Contoh: Al-Ma'idah)
    const safeSurahName = surahData.namaLatin.replace(/'/g, "\\'");

    title.innerHTML = `<h2 class="text-3xl font-bold text-slate-900 mb-2">${surahData.namaLatin}</h2><p class="text-slate-500 text-xs font-bold uppercase">${surahData.jumlahAyat} Ayat • ${surahData.tempatTurun}</p>`;
    list.innerHTML = "";

    surahData.ayat.forEach((ayah) => {
      const card = document.createElement("div");
      card.id = `ayah-${ayah.nomorAyat}`; 
      card.className = "ayah-card bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm mb-4 transition-all duration-700";
      
      const audioUrl = ayah.audio['05'];

      card.innerHTML = `
        <div class="flex flex-col gap-4 text-left">
            <div class="flex justify-between items-start gap-4 mb-2">
                <span class="bg-emerald-50 text-emerald-600 font-black w-10 h-10 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-1">${ayah.nomorAyat}</span>
                <p class="text-3xl md:text-4xl font-bold text-slate-800 text-right leading-[2.2] w-full font-arabic" dir="rtl">${ayah.teksArab}</p>
            </div>
            
            <div class="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100 relative overflow-hidden">
                <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-400"></div>
                <p class="text-emerald-700 font-medium italic text-sm md:text-base leading-relaxed mb-3">${ayah.teksLatin}</p>
                <p class="text-slate-600 text-sm md:text-base leading-relaxed">${ayah.teksIndonesia}</p>
            </div>
            
            <div class="flex justify-between items-center mt-2 pt-2 border-t border-slate-100">
                <button onclick="saveBookmark(${num}, '${safeSurahName}', ${ayah.nomorAyat})" class="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors px-3 py-2 rounded-lg hover:bg-emerald-50">
                    <span class="text-lg">🔖</span> Tandai Terakhir Baca
                </button>
                <button onclick="playQuranAudio('${audioUrl}', this)" class="btn-play bg-emerald-100 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm active:scale-90 transition-all hover:bg-emerald-500 hover:text-white text-lg">
                    ▶
                </button>
            </div>
        </div>`;
      list.appendChild(card);
    });

    // Fitur Meluncur (Scroll otomatis ke ayat)
    if (scrollToAyah) {
      setTimeout(() => {
        const el = document.getElementById(`ayah-${scrollToAyah}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-50');
            setTimeout(() => el.classList.remove('ring-4', 'ring-emerald-400', 'bg-emerald-50'), 2500);
        }
      }, 800); 
    }
  } catch (e) {
    list.innerHTML = `<p class="text-red-500 text-center font-bold mt-10">Gagal memuat ayat. Periksa koneksi internet.</p>`;
  }
}

// ==========================================
// 3. FITUR BOOKMARK (TANDAI TERAKHIR BACA)
// ==========================================
function saveBookmark(surahNum, surahName, ayahNum) {
    const bookmark = { surahNum, surahName, ayahNum };
    localStorage.setItem("ngajiBookmark", JSON.stringify(bookmark));
    alert(`🔖 Berhasil ditandai:\nSurah ${surahName} Ayat ${ayahNum}`);
}

function renderBookmarkBanner() {
    const searchContainer = document.getElementById("search-container");
    const surahList = document.getElementById("surah-list");
    const anchor = searchContainer || surahList;
    if (!anchor) return;
    
    let banner = document.getElementById("bookmark-banner");
    if (!banner) {
        banner = document.createElement("div");
        banner.id = "bookmark-banner";
        banner.className = "mb-6 w-full"; 
        anchor.parentNode.insertBefore(banner, anchor);
    }

    const data = localStorage.getItem("ngajiBookmark");
    if (data) {
        const b = JSON.parse(data);
        
        banner.innerHTML = `
            <div id="bookmark-card-inner" class="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 md:p-5 rounded-2xl text-white shadow-md flex justify-between items-center hover:shadow-lg transition-all active:scale-95 cursor-pointer border border-emerald-400">
                <div class="flex items-center gap-4">
                    <div class="text-3xl bg-white/20 w-12 h-12 flex items-center justify-center rounded-xl">📖</div>
                    <div>
                        <p class="text-[10px] text-emerald-100 font-bold uppercase tracking-widest mb-1">Terakhir Dibaca</p>
                        <h4 class="font-bold text-lg md:text-xl leading-none">${b.surahName} : Ayat ${b.ayahNum}</h4>
                    </div>
                </div>
                <button id="bookmark-btn-inner" class="bg-white text-emerald-700 font-extrabold px-4 md:px-5 py-2.5 rounded-xl text-sm shadow-sm hover:bg-emerald-50 active:scale-90 transition-all cursor-pointer">
                    Lanjutkan ➔
                </button>
            </div>`;
            
        // Logika Klik (Aman dari error)
        const goToBookmark = (e) => {
            e.stopPropagation(); 
            fetchAndRenderSurah(b.surahNum, b.surahName, b.ayahNum);
        };

        const cardElement = document.getElementById("bookmark-card-inner");
        const btnElement = document.getElementById("bookmark-btn-inner");
        
        if (cardElement) cardElement.onclick = goToBookmark;
        if (btnElement) btnElement.onclick = goToBookmark;

        banner.classList.remove("hidden");
    } else {
        banner.classList.add("hidden");
    }
}

// ==========================================
// 4. LOGIKA SHOLAT & PANDUAN (ENSIKLOPEDIA)
// ==========================================
function renderHijaiyah() {
  const grid = document.getElementById("grid-hijaiyah");
  if (!grid) return;
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

function renderSholatCategories() {
  stopAllAudio();
  currentSholatView = "categories";
  updateSholatNavUI(false);
  const grid = document.getElementById("sholat-content-grid");
  if (!grid) return;
  grid.innerHTML = "";
  document.getElementById("main-title").innerText = "Panduan Lengkap";
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
    const div = document.createElement("div");
    div.className = "bg-white p-8 rounded-3xl border border-slate-100 shadow-sm";
    div.innerHTML = `<h4 class="text-xl font-bold mb-4 text-emerald-600">Penjelasan</h4><pre class="font-sans text-slate-700 whitespace-pre-wrap leading-loose text-base">${prayer.content}</pre>`;
    container.appendChild(div);
  } else if (prayer.type === "bacaan") {
    addSholatCard(container, { nama: prayer.nama, gerakan: "Dibaca dengan khusyuk.", arab: prayer.arab, latin: prayer.latin, arti: prayer.arti }, 1);
  } else if (prayer.type === "wudhu") {
    addSholatCard(container, { nama: "Niat", gerakan: "Niat dalam hati.", arab: prayer.niat, latin: prayer.latin, arti: prayer.arti }, 1);
    wudhuSteps.forEach((s, i) => addSholatCard(container, s, i + 2));
  } else {
    addSholatCard(container, { nama: "Niat", gerakan: "Niat dalam hati.", arab: prayer.niat, latin: prayer.latin, arti: prayer.arti }, 1);
    universalSteps.forEach((s, i) => addSholatCard(container, s, i + 2));
  }
}

function addSholatCard(container, step, idx) {
  const div = document.createElement("div");
  div.className = "sholat-card bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-6 transition-all";
  const panduanText = step.gerakan ? `<strong>Panduan:</strong> ${step.gerakan}` : `<strong>Arti:</strong> ${step.arti || "Tidak ada terjemahan."}`;

  div.innerHTML = `
    <div class="mb-4 border-b border-slate-100 pb-4">
        <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Bagian ${idx}</span>
        <h4 class="text-xl font-bold text-slate-800 mt-1">${step.nama}</h4>
    </div>
    ${step.arab !== "-" ? `<p class="text-slate-800 text-right text-3xl font-bold leading-loose mb-4 font-arabic" dir="rtl">${step.arab.replace(/\n/g, "<br>")}</p>` : ""}
    ${step.latin !== "-" ? `<p class="text-emerald-700 italic text-sm mb-4 leading-relaxed">${step.latin}</p>` : ""}
    <div class="text-slate-600 text-sm bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-400 text-left mt-4">${panduanText}</div>
  `;
  container.appendChild(div);
}

// ==========================================
// 5. UTILS AUDIO & NAVIGASI
// ==========================================
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

function playQuranAudio(url, btn) {
  const card = btn.closest(".ayah-card");

  if (currentAudio && currentAudio.src === url && !currentAudio.paused) {
    currentAudio.pause();
    btn.innerHTML = `▶`;
    card.classList.remove("playing-ayah");
    return;
  }
  if (currentAudio && currentAudio.src === url && currentAudio.paused) {
    currentAudio.play();
    btn.innerHTML = `||`;
    card.classList.add("playing-ayah");
    return;
  }

  stopAllAudio();
  currentAudio = new Audio(url);
  btn.innerHTML = `⏳`;
  
  currentAudio.onplay = () => {
    card.classList.add("playing-ayah");
    btn.innerHTML = `||`;
  };
  currentAudio.onended = () => { stopAllAudio(); };
  currentAudio.onerror = () => { alert("Gagal memuat ayat. Periksa koneksi internet Anda."); stopAllAudio(); };
  currentAudio.play();
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
  
  // Mengatur kapan banner harus tampil / sembunyi
  const banner = document.getElementById("bookmark-banner");
  if(banner) {
      if (!isDetail && localStorage.getItem("ngajiBookmark")) {
          banner.classList.remove("hidden");
      } else {
          banner.classList.add("hidden");
      }
  }
  window.scrollTo(0, 0);
}

function showSurahList() {
  stopAllAudio();
  toggleMengajiView(false);
  const searchContainer = document.getElementById("search-container");
  if(searchContainer) searchContainer.classList.remove("hidden");
  renderBookmarkBanner(); 
}
