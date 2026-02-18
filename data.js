// ==========================================
// FILE: data.js (DATABASE ENSIKLOPEDIA SHOLAT)
// ==========================================

// 1. DATA HIJAIYAH
const hijaiyahList = [
  { arab: "ا", latin: "Alif", baca: "a" }, { arab: "ب", latin: "Ba'", baca: "ba" },
  { arab: "ت", latin: "Ta'", baca: "ta" }, { arab: "ث", latin: "Tsa'", baca: "tsa" },
  { arab: "ج", latin: "Jim", baca: "ja" }, { arab: "ح", latin: "Ha'", baca: "ha" },
  { arab: "خ", latin: "Kha'", baca: "kha" }, { arab: "د", latin: "Dal", baca: "da" },
  { arab: "ذ", latin: "Dzal", baca: "dza" }, { arab: "ر", latin: "Ra'", baca: "ra" },
  { arab: "ز", latin: "Zai", baca: "za" }, { arab: "س", latin: "Sin", baca: "sa" },
  { arab: "ش", latin: "Syin", baca: "sya" }, { arab: "ص", latin: "Shad", baca: "sha" },
  { arab: "ض", latin: "Dhad", baca: "dha" }, { arab: "ط", latin: "Tha'", baca: "tha" },
  { arab: "ظ", latin: "Zha'", baca: "zha" }, { arab: "ع", latin: "Ain", baca: "a'" },
  { arab: "غ", latin: "Ghain", baca: "gha" }, { arab: "ف", latin: "Fa'", baca: "fa" },
  { arab: "ق", latin: "Qaf", baca: "qa" }, { arab: "ك", latin: "Kaf", baca: "ka" },
  { arab: "ل", latin: "Lam", baca: "la" }, { arab: "م", latin: "Mim", baca: "ma" },
  { arab: "ن", latin: "Nun", baca: "na" }, { arab: "و", latin: "Waw", baca: "wa" },
  { arab: "ه", latin: "Ha", baca: "ha" }, { arab: "ي", latin: "Ya'", baca: "ya" },
];

// 2. KATEGORI BAB
const sholatCategories = [
  { id: "bab1", nama: "BAB I: Dasar Islam", desc: "Iman, Islam, Ihsan", icon: "☪️" },
  { id: "bab2", nama: "BAB II: Thaharah", desc: "Wudhu & Tayammum", icon: "💧" },
  { id: "bab3", nama: "BAB III: Pra-Sholat", desc: "Adzan & Iqomah", icon: "📢" },
  { id: "bab4", nama: "BAB IV: Shalat Fardhu", desc: "Wajib 5 Waktu", icon: "🕌" },
  { id: "bab5", nama: "BAB V: Shalat Sunnah", desc: "14 Macam Sunnah", icon: "✨" },
  { id: "bab6", nama: "BAB VI: Kumpulan Doa", desc: "Doa Harian Lengkap", icon: "🤲" },
  { id: "bab7", nama: "BAB VII: Ramadhan", desc: "Puasa & Zakat Fitrah", icon: "🌙" },
];

// 3. DATABASE KONTEN LENGKAP
const prayersData = [
  // ==========================================
  // BAB I: DASAR ISLAM
  // ==========================================
  {
    catId: "bab1", id: "iman", nama: "1. Iman (Aqidah)", type: "teori",
    content: "Iman adalah sebagai 'Aqidah' yang mempunyai enam rukun yaitu:\n\n1. Iman kepada Allah Subhanahu Wa Ta'ala.\n2. Iman kepada Malaikat-malaikat-Nya.\n3. Iman kepada Kitab-kitab-Nya.\n4. Iman kepada Rasul-rasul-Nya.\n5. Iman kepada Hari Akhir/Kiamat.\n6. Iman kepada Qadha' dan Qadar-Nya.\n\nKeterangan:\nIman dianggap benar apabila membenarkan dalam hati, mengucapkan dengan lisan, dan mengamalkan dengan perbuatan.",
  },
  {
    catId: "bab1", id: "islam", nama: "2. Islam (Syari'at)", type: "teori",
    content: "Islam adalah sebagai 'Syari'at' yang mempunyai lima rukun yaitu:\n\n1. Membaca dua kalimah syahadat.\n2. Mendirikan shalat 5 waktu.\n3. Menunaikan zakat.\n4. Berpuasa di bulan Ramadhan.\n5. Pergi Haji ke Baitullah bagi yang mampu.\n\nKeterangan:\nSesungguhnya agama yang diridhai di sisi Allah SWT adalah Islam (QS. Ali 'Imran: 19).",
  },
  {
    catId: "bab1", id: "ihsan", nama: "3. Ihsan (Akhlaq)", type: "teori",
    content: "Ihsan adalah akhlaqul karimah (budi pekerti yang mulia).\n\nSabda Nabi SAW:\n'Hendaknya engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Dan jika engkau tidak melihat-Nya, maka sesungguhnya Dia telah melihat engkau.'\n\nKeterangan:\nOrang yang ihsan dalam beribadah akan memunculkan akhlak mulia, karena ia yakin selalu berada dalam pengawasan Allah.",
  },
  {
    catId: "bab1", id: "hukum", nama: "4. Hukum-Hukum Islam", type: "teori",
    content: "Hukum Islam berlaku bagi orang Mukallaf (Baligh & Berakal). Pembagiannya:\n\n1. WAJIB (Fardhu)\n   Dikerjakan dapat pahala, ditinggalkan berdosa (Contoh: Sholat 5 waktu).\n\n2. SUNNAT (Mandub)\n   Dikerjakan dapat pahala, ditinggalkan tidak berdosa (Contoh: Sholat Dhuha).\n\n3. HARAM\n   Dikerjakan berdosa, ditinggalkan dapat pahala (Contoh: Berjudi, Minum Khamar).\n\n4. MAKRUH\n   Dikerjakan tidak berdosa, ditinggalkan dapat pahala (Contoh: Makan jengkol/bawang mentah).\n\n5. MUBAH\n   Dikerjakan atau ditinggalkan tidak berdampak pada pahala/dosa (Contoh: Memilih warna pakaian).",
  },

  // ==========================================
  // BAB II: THAHARAH (BERSUCI)
  // ==========================================
  {
    catId: "bab2", id: "air", nama: "1. Macam-macam Air", type: "teori",
    content: "Air dibagi menjadi 4 macam hukum:\n\n1. Air Mutlak (Suci Menyucikan)\n   Sah untuk wudhu/mandi (Air hujan, sumur, laut, sungai, salju).\n\n2. Air Musyammas (Suci Makruh)\n   Air yang dijemur matahari di wadah logam selain emas/perak.\n\n3. Air Musta'mal (Suci Tidak Menyucikan)\n   Air bekas pakai wudhu/mandi wajib, atau tercampur benda suci hingga berubah warna/rasa (teh/kopi).\n\n4. Air Mutanajjis (Air Bernajis)\n   Air kurang dari 2 kulah yang kemasukan najis, atau lebih dari 2 kulah tapi berubah sifatnya.",
  },
  {
    catId: "bab2", id: "najis", nama: "2. Jenis Najis & Cara Mensucikan", type: "teori",
    content: "1. Mukhaffafah (Ringan)\n   Kencing bayi laki-laki < 2 tahun yang hanya minum ASI. Cara: Cukup percikkan air ke area bernajis.\n\n2. Mughallazah (Berat)\n   Najis Anjing dan Babi. Cara: Basuh 7 kali, salah satunya dicampur dengan tanah/debu suci.\n\n3. Mutawassitah (Sedang)\n   Darah, nanah, tinja, arak. Cara: Basuh dengan air bersih sampai hilang wujud, bau, warna, dan rasanya.",
  },
  {
    catId: "bab2", id: "wudhu-praktek", nama: "3. Niat Wudhu", type: "wudhu",
    niat: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى", 
    latin: "Nawaitul wudhuu-a liraf'il hadatsil ashghari fardhal lillaahi ta'aalaa.", 
    arti: "Aku niat berwudhu untuk menghilangkan hadas kecil, fardhu karena Allah Ta'ala.",
  },
  {
    catId: "bab2", id: "batal-wudhu", nama: "4. Pembatal Wudhu", type: "teori",
    content: "Hal yang membatalkan wudhu:\n1. Keluar sesuatu dari kubul/dubur (kencing, BAB, kentut).\n2. Hilang akal karena mabuk, gila, pingsan, atau tidur nyenyak.\n3. Bersentuhan kulit laki-laki & perempuan dewasa yang bukan mahram tanpa penghalang.\n4. Menyentuh kemaluan atau lubang dubur dengan telapak tangan bagian dalam.",
  },
  {
    catId: "bab2", id: "mandi-wajib", nama: "5. Niat Mandi Wajib (Junub)", type: "bacaan",
    arab: "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ فَرْضًا لِلّٰهِ تَعَالَى", 
    latin: "Nawaitul ghusla liraf'il hadatsil akbari fardhal lillaahi ta'aalaa.", 
    arti: "Aku niat mandi untuk menghilangkan hadas besar, fardhu karena Allah Ta'ala.",
  },
  {
    catId: "bab2", id: "tayammum", nama: "6. Tayammum (Pengganti Air)", type: "bacaan",
    arab: "نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلّٰهِ تَعَالَى", 
    latin: "Nawaitut tayammuma listibaahatish shalaati fardhal lillaahi ta'aalaa.",
    arti: "Aku niat bertayammum untuk dapat mengerjakan sholat, fardhu karena Allah Ta'ala. (Syarat: Dilakukan dengan debu suci ke wajah dan kedua tangan hingga siku setelah masuk waktu sholat).",
  },

  // ==========================================
  // BAB III: PRA-SHOLAT (ADZAN & IQOMAH)
  // ==========================================
  {
    catId: "bab3", id: "adzan", nama: "1. Lafadz Adzan", type: "bacaan",
    arab: "اَللّٰهُ أَكْبَرُ، اَللّٰهُ أَكْبَرُ (٢x)\nأَشْهَدُ اَنْ لَا اِلٰهَ اِلَّا اللّٰهُ (٢x)\nأَشْهَدُ اَنَّ مُحَمَّدًا رَسُوْلُ اللّٰهِ (٢x)\nحَيَّ عَلَى الصَّلَاةِ (٢x)\nحَيَّ عَلَى الْفَلَاحِ (٢x)\nاَللّٰهُ أَكْبَرُ، اَللّٰهُ أَكْبَرُ (١x)\nلَا اِلٰهَ اِلَّا اللّٰهُ (١x)",
    latin: "Allahu Akbar (4x)\nAsyhadu alla ilaha illallah (2x)\nAsyhadu anna Muhammadar rasulullah (2x)\nHayya 'alash shalaah (2x)\nHayya 'alal falaah (2x)\nAllahu Akbar (2x)\nLaa ilaha illallah (1x)", 
    arti: "Allah Maha Besar. Aku bersaksi tiada Tuhan selain Allah. Aku bersaksi Muhammad utusan Allah. Marilah mendirikan sholat. Marilah menuju kemenangan. Allah Maha Besar. Tiada Tuhan selain Allah.",
  },
  {
    catId: "bab3", id: "adzan-subuh", nama: "2. Tambahan Adzan Subuh", type: "bacaan",
    arab: "اَلصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ (٢x)",
    latin: "Ash-shalaatu khairum minan naum (Dibaca 2x setelah Hayya 'alal falaah).",
    arti: "Shalat itu lebih baik daripada tidur.",
  },
  {
    catId: "bab3", id: "doa-adzan", nama: "3. Doa Sesudah Adzan", type: "bacaan",
    arab: "اَللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِيْ وَعَدْتَهُ",
    latin: "Allahumma Rabba haadzihid da'watit taammah, wash shalaatil qaa-imah, aati muhammadanil wasiilata wal fadhiilah, wab'atshu maqaamam mahmuudanil ladzii wa'adtah.", 
    arti: "Ya Allah, Tuhan pemilik panggilan yang sempurna ini dan sholat yang didirikan. Berilah Nabi Muhammad derajat wasilah dan keutamaan, dan bangkitkanlah ia pada kedudukan yang terpuji yang telah Engkau janjikan.",
  },
  {
    catId: "bab3", id: "iqomah", nama: "4. Lafadz Iqomah", type: "bacaan",
    arab: "اَللّٰهُ أَكْبَرُ، اَللّٰهُ أَكْبَرُ\nأَشْهَدُ اَنْ لَا اِلٰهَ اِلَّا اللّٰهُ\nأَشْهَدُ اَنَّ مُحَمَّدًا رَسُوْلُ اللّٰهِ\nحَيَّ عَلَى الصَّلَاةِ\nحَيَّ عَلَى الْفَلَاحِ\nقَدْ قَامَتِ الصَّلَاةُ، قَدْ قَامَتِ الصَّلَاةُ\nاَللّٰهُ أَكْبَرُ، اَللّٰهُ أَكْبَرُ\nلَا اِلٰهَ اِلَّا اللّٰهُ",
    latin: "Allahu Akbar (2x)... Asyhadu alla ilaha illallah... Asyhadu anna Muhammadar rasulullah... Hayya 'alash shalaah... Hayya 'alal falaah...\nQad qaamatish shalaah, qad qaamatish shalaah.\nAllahu Akbar (2x)... Laa ilaha illallah.", 
    arti: "Allah Maha Besar... Marilah sholat... Marilah menuju kemenangan... Sungguh sholat akan segera didirikan. Allah Maha Besar. Tiada Tuhan selain Allah.",
  },

  // ==========================================
  // BAB IV: SHALAT FARDHU (5 WAKTU)
  // ==========================================
  { 
    catId: "bab4", id: "subuh", nama: "1. Niat Sholat Subuh", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli fardhash shubhi rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", 
    arti: "Aku niat sholat fardhu Subuh dua rakaat menghadap kiblat karena Allah Ta'ala." 
  },
  { 
    catId: "bab4", id: "qunut", nama: "2. Doa Qunut (Subuh)", type: "bacaan", 
    arab: "اَللّٰهُمَّ اهْدِنِىْ فِيْمَنْ هَدَيْتَ، وَعَافِنِى فِيْمَنْ عَافَيْتَ، وَتَوَلَّنِىْ فِيْمَنْ تَوَلَّيْتَ، وَبَارِكْ لِىْ فِيْمَا اَعْطَيْتَ، وَقِنِيْ شَرَّ مَاقَضَيْتَ، فَاِنَّكَ تَقْضِىْ وَلاَ يُقْضَى عَلَيْكَ، وَاِنَّهُ لاَ يَذِلُّ مَنْ وَالَيْتَ، وَلاَ يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، وَاَسْتَغْفِرُكَ وَاَتُوْبُ اِلَيْكَ", 
    latin: "Allahummahdinii fiiman hadait, wa 'aafinii fiiman 'aafait, wa tawallanii fiiman tawallait, wa baarik lii fiimaa a'thait, wa qinii syarra maa qadhait. Fa innaka taqdhii wa laa yuqdhaa 'alaik, wa innahu laa yadzillu man waalait, wa laa ya'izzu man 'aadait, tabaarakta rabbanaa wa ta'aalait, falakal hamdu 'alaa maa qadhait, wa astaghfiruka wa atuubu ilaik.", 
    arti: "Ya Allah, berilah aku petunjuk sebagaimana orang yang telah Engkau beri petunjuk, berilah keselamatan sebagaimana orang yang telah Engkau beri keselamatan... Sesungguhnya Engkaulah yang menetapkan dan tidak ada yang menetapkan atas-Mu." 
  },
  { 
    catId: "bab4", id: "dzuhur", nama: "3. Niat Sholat Dzuhur", type: "sholat", rakaat: 4, 
    niat: "أُصَلِّى فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli fardhadz dzuhri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", 
    arti: "Aku niat sholat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta'ala." 
  },
  { 
    catId: "bab4", id: "ashar", nama: "4. Niat Sholat Ashar", type: "sholat", rakaat: 4, 
    niat: "أُصَلِّى فَرْضَ العَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", 
    arti: "Aku niat sholat fardhu Ashar empat rakaat menghadap kiblat karena Allah Ta'ala." 
  },
  { 
    catId: "bab4", id: "maghrib", nama: "5. Niat Sholat Maghrib", type: "sholat", rakaat: 3, 
    niat: "أُصَلِّى فَرْضَ المَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", 
    arti: "Aku niat sholat fardhu Maghrib tiga rakaat menghadap kiblat karena Allah Ta'ala." 
  },
  { 
    catId: "bab4", id: "isya", nama: "6. Niat Sholat Isya", type: "sholat", rakaat: 4, 
    niat: "أُصَلِّى فَرْضَ العِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli fardhal 'isyaa-i arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", 
    arti: "Aku niat sholat fardhu Isya empat rakaat menghadap kiblat karena Allah Ta'ala." 
  },

  // ==========================================
  // BAB V: SHALAT SUNNAH
  // ==========================================
  { catId: "bab5", id: "rawatib-qobla", nama: "1. Rawatib (Qabliyah / Sebelum)", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ الظُّهْرِ رَكْعَتَيْنِ قَبْلِيَّةً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatadz dzuhri rak'ataini qabliyyatan lillaahi ta'aalaa. (Contoh untuk sebelum Dzuhur).", arti: "Aku niat sholat sunnah sebelum Dzuhur dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "rawatib-ba'da", nama: "2. Rawatib (Ba'diyah / Sesudah)", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ الْمَغْرِبِ رَكْعَتَيْنِ بَعْدِيَّةً لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatal maghribi rak'ataini ba'diyyatan lillaahi ta'aalaa. (Contoh untuk sesudah Maghrib).", arti: "Aku niat sholat sunnah sesudah Maghrib dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "dhuha", nama: "3. Shalat Dhuha", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatadh dhuhaa rak'ataini lillaahi ta'aalaa.", arti: "Aku niat sholat sunnah Dhuha dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "tahajjud", nama: "4. Shalat Tahajjud", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatat tahajjudi rak'ataini lillaahi ta'aalaa.", arti: "Aku niat sholat sunnah Tahajjud dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "tahiyatul", nama: "5. Tahiyatul Masjid", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ تَحِيَّةِ الْمَسْجِدِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnata tahiyyatil masjidi rak'ataini lillaahi ta'aalaa.", arti: "Aku niat sholat sunnah penghormatan masjid dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "hajat", nama: "6. Shalat Hajat", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatal haajati rak'ataini lillaahi ta'aalaa.", arti: "Aku niat sholat sunnah Hajat (memohon keperluan) dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "istikharah", nama: "7. Shalat Istikharah", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatal istikhaarati rak'ataini lillaahi ta'aalaa.", arti: "Aku niat sholat sunnah Istikharah (memohon pilihan terbaik) dua rakaat karena Allah Ta'ala." },
  { catId: "bab5", id: "taubat", nama: "8. Shalat Taubat", type: "sholat", rakaat: 2, 
    niat: "أُصَلِّي سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
    latin: "Ushalli sunnatat taubati rak'ataini lillaahi ta'aalaa.", arti: "Aku niat sholat sunnah Taubat dua rakaat karena Allah Ta'ala." },

  // ==========================================
  // BAB VI: KUMPULAN DOA HARIAN
  // ==========================================
  { catId: "bab6", id: "istighfar", nama: "1. Istighfar Ba'da Sholat", type: "bacaan", 
    arab: "أَسْتَغْفِرُ اللّٰهَ الْعَظِـيْمِ الَّذِيْ لَا اِلٰهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ", 
    latin: "Astaghfirullaahal 'adzhiim, alladzii laa ilaaha illaa huwal hayyul qayyuumu wa atuubu ilaih. (Dibaca 3x).", arti: "Aku memohon ampun kepada Allah Yang Maha Agung, yang tiada Tuhan selain Dia Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya." },
  { catId: "bab6", id: "doa-sholat", nama: "2. Doa Keselamatan (Ba'da Sholat)", type: "bacaan", 
    arab: "اَللّٰهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَاْلإِكْرَامِ", 
    latin: "Allahumma antas salaam waminkas salaam tabaarakta yaa dzal jalaali wal ikraam.", arti: "Ya Allah, Engkaulah As-Salam (Yang Maha Sejahtera), dari-Mu kesejahteraan. Maha Suci Engkau wahai Tuhan pemilik keagungan dan kemuliaan." },
  { catId: "bab6", id: "doa-ortu", nama: "3. Doa Untuk Orang Tua", type: "bacaan", 
    arab: "رَبِّ اغْفِرْ لِيْ وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا", 
    latin: "Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiiraa.", arti: "Ya Tuhanku, ampunilah dosaku dan dosa kedua orang tuaku, dan sayangilah keduanya sebagaimana mereka menyayangiku di waktu kecil." },
  { catId: "bab6", id: "doa-selamat", nama: "4. Doa Sapu Jagat (Dunia Akhirat)", type: "bacaan", 
    arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", 
    latin: "Rabbanaa aatinaa fid dunyaa hasanah, wa fil aakhirati hasanah, wa qinaa 'adzaaban naar.", arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka." },
  { catId: "bab6", id: "doa-makan", nama: "5. Doa Sebelum Makan", type: "bacaan", 
    arab: "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ", 
    latin: "Allahumma baarik lanaa fiimaa razaqtanaa wa qinaa 'adzaaban naar.", arti: "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa neraka." },
  { catId: "bab6", id: "doa-tidur", nama: "6. Doa Sebelum Tidur", type: "bacaan", 
    arab: "بِسْمِكَ اللّٰهُمَّ اَحْيَا وَبِسْمِكَ اَمُوْتُ", 
    latin: "Bismikallaahumma ahyaa wa bismika amuutu.", arti: "Dengan nama-Mu ya Allah aku hidup, dan dengan nama-Mu aku mati." },

  // ==========================================
  // BAB VII: RAMADHAN & ZAKAT FITRAH
  // ==========================================
  { 
    catId: "bab7", id: "syarat-puasa", nama: "1. Panduan Puasa Ramadhan", type: "teori", 
    content: "Syarat Wajib Puasa:\n1. Beragama Islam.\n2. Baligh (Cukup Umur) & Berakal.\n3. Mampu (Tidak sakit parah / musafir).\n4. Suci dari haid & nifas.\n\nRukun Puasa:\n1. Membaca Niat (Wajib di malam hari sebelum fajar untuk puasa Ramadhan).\n2. Menahan diri dari hal yang membatalkan puasa mulai terbit fajar (Subuh) hingga terbenam matahari (Maghrib).\n\nHal yang Membatalkan Puasa:\nMakan dan minum dengan sengaja, muntah disengaja, berhubungan suami istri di siang hari, keluar darah haid/nifas, hilang akal (gila), dan murtad." 
  },
  { 
    catId: "bab7", id: "niat-puasa-harian", nama: "2. Niat Puasa (Harian)", type: "bacaan", 
    arab: "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu shauma ghadin 'an adaa'i fardhi syahri Ramadhaana haadzihis sanati lillaahi ta'aalaa.", 
    arti: "Aku niat berpuasa esok hari untuk menunaikan kewajiban puasa bulan Ramadhan tahun ini karena Allah Ta'ala." 
  },
  { 
    catId: "bab7", id: "niat-puasa-sebulan", nama: "3. Niat Puasa (Sebulan Penuh)", type: "bacaan", 
    arab: "نَوَيْتُ صَوْمَ جَمِيْعِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu shauma jamii'i syahri Ramadhaana haadzihis sanati lillaahi ta'aalaa.", 
    arti: "Aku niat berpuasa selama satu bulan penuh di bulan Ramadhan tahun ini karena Allah Ta'ala. (Sunnah dibaca di malam pertama Ramadhan agar jika suatu hari lupa berniat, puasanya tetap sah)." 
  },
  { 
    catId: "bab7", id: "doa-buka-puasa", nama: "4. Doa Buka Puasa", type: "bacaan", 
    arab: "اَللّٰهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ بِرَحْمَتِكَ يَا اَرْحَمَ الرَّحِمِيْنَ", 
    latin: "Allahumma laka shumtu wa bika aamantu wa 'alaa rizqika afthartu birahmatika yaa arhamar raahimiin.", 
    arti: "Ya Allah, untuk-Mu aku berpuasa, dan kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka. Dengan rahmat-Mu wahai Yang Maha Pengasih lagi Maha Penyayang." 
  },
  { 
    catId: "bab7", id: "zakat-fitrah-sendiri", nama: "5. Niat Zakat Fitrah (Diri Sendiri)", type: "bacaan", 
    arab: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ نَفْسِيْ فَرْضًا لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu an ukhrija zakaatal fithri 'an nafsii fardhan lillaahi ta'aalaa.", 
    arti: "Aku niat mengeluarkan zakat fitrah untuk diriku sendiri, fardhu karena Allah Ta'ala." 
  },
  { 
    catId: "bab7", id: "zakat-fitrah-keluarga", nama: "6. Niat Zakat Fitrah (Untuk Keluarga)", type: "bacaan", 
    arab: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنِّيْ وَعَنْ جَمِيْعِ مَا يَلْزَمُنِيْ نَفَقَاتُهُمْ شَرْعًا فَرْضًا لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu an ukhrija zakaatal fithri 'annii wa 'an jamii'i maa yalzamunii nafaqaatuhum syar'an fardhan lillaahi ta'aalaa.", 
    arti: "Aku niat mengeluarkan zakat fitrah untuk diriku dan seluruh orang yang nafkahnya menjadi tanggunganku secara syariat, fardhu karena Allah Ta'ala." 
  }
];

// ==========================================
// 4. DATA PANDUAN GERAKAN SHOLAT & WUDHU
// ==========================================
const universalSteps = [
  { nama: "Takbiratul Ihram", gerakan: "Mengangkat kedua tangan sejajar telinga sambil mengucapkan takbir.", arab: "اَللّٰهُ أَكْبَرُ", latin: "Allahu Akbar", arti: "Allah Maha Besar." },
  { nama: "Doa Iftitah", gerakan: "Bersedekap (meletakkan tangan kanan di atas punggung tangan kiri di dada).", arab: "اَللّٰهُ أَكْبَرُ كَبِيْرًا وَالْحَمْدُ لِلّٰهِ كَثِيْرًا وَسُبْحَانَ اللّٰهِ بُكْرَةً وَأَصِيْلًا", latin: "Allahu akbar kabiiran wal hamdu lillaahi katsiiran, wa subhaanallaahi bukratan wa ashiilaa.", arti: "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak, dan Maha Suci Allah pada waktu pagi dan petang." },
  { nama: "Membaca Surat Al-Fatihah", gerakan: "Tetap bersedekap dan pandangan fokus ke tempat sujud.", arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ...", latin: "Bismillaahirrahmaanirrahiim. Alhamdulillaahi rabbil 'aalamiin... (sampai akhir ayat waladldlaalliin).", arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam..." },
  { nama: "Ruku'", gerakan: "Membungkuk hingga punggung rata, kedua tangan memegang lutut.", arab: "سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ", latin: "Subhaana rabbiyal 'adziimi wa bihamdih. (Dibaca 3x)", arti: "Maha Suci Tuhanku Yang Maha Agung, dan dengan memuji-Nya." },
  { nama: "I'tidal", gerakan: "Bangkit dari ruku' dan berdiri tegak.", arab: "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ. رَبَّنَا لَكَ الْحَمْدُ", latin: "Sami'allaahu liman hamidah. Rabbanaa lakal hamdu.", arti: "Allah Maha Mendengar orang yang memuji-Nya. Ya Tuhan kami, bagimu segala puji." },
  { nama: "Sujud", gerakan: "Menempelkan dahi, hidung, kedua telapak tangan, kedua lutut, dan ujung jari kaki ke lantai.", arab: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ", latin: "Subhaana rabbiyal a'laa wa bihamdih. (Dibaca 3x)", arti: "Maha Suci Tuhanku Yang Maha Tinggi, dan dengan memuji-Nya." },
  { nama: "Duduk Diantara Dua Sujud", gerakan: "Duduk di atas telapak kaki kiri (Iftirasy), telapak kaki kanan ditegakkan.", arab: "رَبِّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ", latin: "Rabbighfir lii, warhamnii, wajburnii, warfa'nii, warzuqnii, wahdinii, wa 'aafinii, wa'fu 'annii.", arti: "Ya Tuhanku, ampunilah aku, sayangilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, berilah aku kesehatan, dan maafkanlah aku." },
  { nama: "Tasyahud Akhir", gerakan: "Duduk Tawarruk (pinggul kiri di lantai, telapak kaki kiri di bawah kaki kanan).", arab: "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلّٰهِ. اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ...", latin: "At-tahiyyaatul mubaarakaatush shalawaatuth thayyibaatu lillaah. Assalaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh...", arti: "Segala penghormatan, keberkahan, shalawat, dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat, dan berkah Allah tetap kepadamu wahai Nabi..." },
  { nama: "Salam", gerakan: "Menoleh ke kanan lalu ke kiri hingga terlihat pipi dari belakang.", arab: "اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ", latin: "Assalaamu 'alaikum wa rahmatullaah.", arti: "Semoga keselamatan dan rahmat Allah terlimpahkan kepada kalian." }
];

const wudhuSteps = [
  { nama: "Membasuh Muka", gerakan: "Membasuh seluruh wajah (dari batas tumbuh rambut hingga ujung dagu) sebanyak 3 kali.", arab: "-", latin: "-", arti: "-" },
  { nama: "Membasuh Kedua Tangan", gerakan: "Membasuh tangan kanan hingga melewati siku (3x), lalu dilanjutkan tangan kiri (3x).", arab: "-", latin: "-", arti: "-" },
  { nama: "Mengusap Kepala", gerakan: "Mengusap sebagian rambut atau kepala dengan tangan yang dibasahi air (3x).", arab: "-", latin: "-", arti: "-" },
  { nama: "Membasuh Kedua Kaki", gerakan: "Membasuh kaki kanan hingga mata kaki (3x) dipastikan sela-sela jari bersih, lalu dilanjutkan kaki kiri (3x).", arab: "-", latin: "-", arti: "-" }
];
