// data.js - Gudang Materi (Database)

// 1. DATA HIJAIYAH
const hijaiyahList = [
  { arab: "ا", latin: "Alif", baca: "a" },
  { arab: "ب", latin: "Ba'", baca: "ba" },
  { arab: "ت", latin: "Ta'", baca: "ta" },
  { arab: "ث", latin: "Tsa'", baca: "tsa" },
  { arab: "ج", latin: "Jim", baca: "ja" },
  { arab: "ح", latin: "Ha'", baca: "ha" },
  { arab: "خ", latin: "Kha'", baca: "kha" },
  { arab: "د", latin: "Dal", baca: "da" },
  { arab: "ذ", latin: "Dzal", baca: "dza" },
  { arab: "ر", latin: "Ra'", baca: "ra" },
  { arab: "ز", latin: "Zai", baca: "za" },
  { arab: "س", latin: "Sin", baca: "sa" },
  { arab: "ش", latin: "Syin", baca: "sya" },
  { arab: "ص", latin: "Shad", baca: "sha" },
  { arab: "ض", latin: "Dhad", baca: "dha" },
  { arab: "ط", latin: "Tha'", baca: "tha" },
  { arab: "ظ", latin: "Zha'", baca: "zha" },
  { arab: "ع", latin: "Ain", baca: "a'" },
  { arab: "غ", latin: "Ghain", baca: "gha" },
  { arab: "ف", latin: "Fa'", baca: "fa" },
  { arab: "ق", latin: "Qaf", baca: "qa" },
  { arab: "ك", latin: "Kaf", baca: "ka" },
  { arab: "ل", latin: "Lam", baca: "la" },
  { arab: "م", latin: "Mim", baca: "ma" },
  { arab: "ن", latin: "Nun", baca: "na" },
  { arab: "و", latin: "Waw", baca: "wa" },
  { arab: "ه", latin: "Ha", baca: "ha" },
  { arab: "ي", latin: "Ya'", baca: "ya" },
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
  // --- BAB I: DASAR ISLAM ---
  {
    catId: "bab1",
    id: "iman",
    nama: "1. Iman (Aqidah)",
    type: "teori",
    content:
      "Iman adalah sebagai 'Aqidah' itu mempunyai enam rukun yaitu:\n\na. Iman kepada Allah Subhanahu Wa Ta'ala.\nb. Iman kepada Malaikat-malaikat-Nya.\nc. Iman kepada Kitab-kitab-Nya.\nd. Iman kepada Rasul-rasul-Nya.\ne. Iman kepada Hari Akhir/Kiamat.\nf. Iman kepada Qadha' dan Qadar-Nya.\n\nKeterangan:\nIman dianggap benar apabila sudah ada buktinya, yaitu membenarkan dalam hati, mengucapkan dengan lisan dan mengamalkan dengan perbuatan.",
  },
  {
    catId: "bab1",
    id: "islam",
    nama: "2. Islam (Syari'at)",
    type: "teori",
    content:
      "Islam adalah sebagai 'Syari'at' itu mempunyai lima rukun yaitu:\n\na. Membaca dua kalimah syahadat.\nb. Mendirikan shalat.\nc. Menunaikan zakat.\nd. Berpuasa di bulan Ramadhan.\ne. Pergi Haji ke Baitullah bagi yang mampu.\n\nKeterangan:\nOrang yang sudah merasa meyakini rukun Islam sebagai aqidah dengan mengucapkan dua kalimah syahadat sebagai bukti kebenarannya... maka orang tersebut sudah berhak disebut Mu'min.\n\nFirman Allah SWT:\n'Innad diina indallahi al-islaam'\n(Sesungguhnya agama yang diakui di sisi Allah SWT adalah Islam).",
  },
  {
    catId: "bab1",
    id: "ihsan",
    nama: "3. Ihsan (Akhlaq)",
    type: "teori",
    content:
      "Ihsan adalah sebagai akhlaqul karimah (budi pekerti yang mulia).\n\nSabda Nabi SAW:\n'An ta'budallaaha ka annaka taraahu fa in lam takun taraahu fa innahu yaraaka.'\n\nArtinya:\n'Hendaknya engkau beribadah kepada Allah seakan-akan engkau melihat-Nya, dan jika engkau tidak melihat-Nya, maka sesungguhnya Dia telah melihat engkau.'\n\nKeterangan:\nOrang yang ihsan dalam setiap mengamalkan ibadah, ia akan timbul dari dalam dirinya akhlaqul karimah, karena ia berkeyakinan bahwa setiap amal perbuatannya itu berada dihadapan Allah dan dilihat oleh-Nya.",
  },
  {
    catId: "bab1",
    id: "hukum",
    nama: "4. Hukum-Hukum Islam",
    type: "teori",
    content:
      "Hukum Islam berlaku bagi orang Mukallaf (Baligh & Berakal Sehat). Pembagiannya:\n\n1. WAJIB (FARDHU)\n   Dikerjakan dapat pahala, ditinggalkan berdosa.\n   a. Fardhu 'Ain: Wajib bagi setiap individu (Sholat 5 waktu).\n   b. Fardhu Kifayah: Cukup bila sebagian orang mengerjakannya (Sholat Jenazah).\n\n2. SUNNAT (MANDUB)\n   Dikerjakan dapat pahala, ditinggalkan tidak berdosa.\n   a. Sunnat Mu'akad: Sangat ditekankan (Sholat Idul Fitri).\n   b. Sunnat Ghairu Mu'akad: Tidak ada tekanan kuat (Sholat Rawatib).\n\n3. HARAM\n   Dikerjakan berdosa, ditinggalkan dapat pahala. (Minum khamar, berzina).\n\n4. MAKRUH\n   Dikerjakan tidak berdosa, ditinggalkan dapat pahala. (Merokok, makan bawang mentah).\n\n5. MUBAH\n   Dikerjakan atau ditinggalkan tidak ada pahala/dosa. (Makan, minum, berpakaian bagus).",
  },
  {
    catId: "bab1",
    id: "istilah",
    nama: "5. Istilah Hukum (Sah/Batal)",
    type: "teori",
    content:
      "Pengertian istilah lain dalam hukum Islam:\n\n• HALAL: Boleh dimakan/dikerjakan, lawan dari haram.\n\n• SYARAT: Perkara diluar pekerjaan yang menjadikan pekerjaan itu sah.\n\n• RUKUN: Perkara didalam pekerjaan yang menyebabkan pekerjaan itu sah.\n\n• SAH: Perkara yang dinyatakan benar menurut ketentuan agama karena sudah cukup syarat rukunnya.\n\n• BATAL: Perkara yang dianggap tidak sah menurut ketentuan agama.",
  },

  // --- BAB II: THAHARAH ---
  {
    catId: "bab2",
    id: "air",
    nama: "1. Macam-macam Air",
    type: "teori",
    content:
      "Air dibagi menjadi 4 macam hukum:\n\n1. Air Mutlak (Suci Menyucikan)\n   Sah untuk wudhu/mandi (Air hujan, sumur, laut, sungai).\n\n2. Air Musyammas (Suci Makruh)\n   Air dijemur matahari di wadah logam (selain emas/perak).\n\n3. Air Musta'mal (Suci Tidak Menyucikan)\n   Air bekas pakai bersuci atau tercampur benda suci (teh/kopi).\n\n4. Air Mutanajjis (Air Bernajis)\n   Kemasukan najis dan berubah warna/bau/rasa.",
  },
  {
    catId: "bab2",
    id: "najis",
    nama: "2. Benda & Jenis Najis",
    type: "teori",
    content:
      "Benda Najis:\nBangkai (kecuali ikan/belalang), Darah, Nanah, Segala yang keluar dari kubul/dubur, Anjing, Babi, Khamr.\n\nPembagian Najis:\n1. Mukhaffafah (Ringan): Air kencing bayi laki-laki < 2th (percikkan air).\n2. Mughallazah (Berat): Anjing & Babi (basuh 7x, salah satu dengan tanah).\n3. Mutawassitah (Sedang): Darah, kotoran, dll (basuh sampai hilang warna/bau).",
  },
  {
    catId: "bab2",
    id: "istinjak",
    nama: "3. Istinjak (Cebok)",
    type: "teori",
    content:
      "Membersihkan kotoran setelah buang air.\nSyarat pakai batu/tisu: Minimal 3 usapan, kotoran belum kering, belum pindah tempat.\nLarangan: Jangan menghadap/belakangi kiblat di tempat terbuka, jangan pakai tangan kanan.",
  },
  {
    catId: "bab2",
    id: "wudhu-syarat",
    nama: "4. Syarat & Rukun Wudhu",
    type: "teori",
    content:
      "Syarat Wudhu:\n1. Islam.\n2. Tamyiz (Bisa bedakan baik/buruk).\n3. Menggunakan air suci menyucikan.\n4. Tidak ada penghalang air ke kulit (kutek, cat).\n\nRukun (Fardhu) Wudhu:\n1. Niat.\n2. Membasuh wajah.\n3. Membasuh kedua tangan sampai siku.\n4. Mengusap sebagian kepala.\n5. Membasuh kedua kaki sampai mata kaki.\n6. Tertib (Berurutan).",
  },
  {
    catId: "bab2",
    id: "wudhu-praktek",
    nama: "5. Praktek/Niat Wudhu",
    type: "wudhu",
    niat: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى",
    latin: "Nawaitul wudhuu-a...",
    arti: "Niat wudhu menghilangkan hadas kecil.",
  },
  {
    catId: "bab2",
    id: "wudhu-sunnah",
    nama: "6. Sunnah & Makruh Wudhu",
    type: "teori",
    content:
      "Sunnah Wudhu:\n• Membaca Basmalah.\n• Bersiwak (Gosok gigi).\n• Berkumur & Istinsyaq (Hirup air hidung).\n• Mengusap seluruh kepala & telinga.\n• Mendahulukan kanan.\n• Membasuh 3 kali.\n\nMakruh Wudhu:\n• Berlebih-lebihan air (Israf).\n• Mendahulukan kiri.\n• Mengelap air wudhu (tanpa udzur).\n• Meminta bantuan orang lain membasuhkan.",
  },
  {
    catId: "bab2",
    id: "wudhu-batal",
    nama: "7. Pembatal Wudhu",
    type: "teori",
    content:
      "1. Keluar sesuatu dari kubul/dubur (kencing, BAB, kentut).\n2. Hilang akal (Tidur nyenyak, gila, pingsan).\n3. Bersentuhan kulit laki-laki & perempuan bukan mahram tanpa penghalang.\n4. Menyentuh kemaluan/lubang dubur dengan telapak tangan.",
  },
  {
    catId: "bab2",
    id: "mandi-wajib",
    nama: "8. Mandi Wajib (Niat)",
    type: "bacaan",
    arab: "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ ِللهِ تَعَالَى",
    latin: "Nawaitul ghusla liraf'il hadatsil akbari...",
    arti: "Niat mandi menghilangkan hadas besar (Junub/Haid).",
  },
  {
    catId: "bab2",
    id: "mandi-sunnah",
    nama: "9. Mandi-mandi Sunnah",
    type: "teori",
    content:
      "Disunnahkan mandi pada waktu:\n1. Sholat Jum'at.\n2. Hari Raya (Idul Fitri & Adha).\n3. Sholat Gerhana.\n4. Sholat Istisqa (Minta hujan).\n5. Setelah memandikan jenazah.\n6. Masuk Islam (bagi mualaf).\n7. Ihram Haji/Umrah.\n8. Masuk kota Makkah.",
  },
  {
    catId: "bab2",
    id: "sunnah-mandi",
    nama: "10. Sunnah Dalam Mandi",
    type: "teori",
    content:
      "Hal yang disunnahkan saat proses mandi:\n1. Membaca Basmalah.\n2. Berwudhu sebelum mandi.\n3. Menggosok-gosok badan.\n4. Mendahulukan anggota kanan.\n5. Muwalat (Sambung menyambung tanpa jeda lama).",
  },
  {
    catId: "bab2",
    id: "mandi-haram",
    nama: "11. Larangan Junub & Haid",
    type: "teori",
    content:
      "Haram bagi orang JUNUB:\n1. Sholat.\n2. Thawaf.\n3. Menyentuh & Membawa Al-Qur'an.\n4. Membaca Al-Qur'an.\n5. Berdiam diri di Masjid.\n\nHaram bagi HAID & NIFAS:\n(Semua larangan Junub di atas) ditambah:\n6. Puasa.\n7. Jima' (Berhubungan suami istri).\n8. Talak (Diceraikan).",
  },
  {
    catId: "bab2",
    id: "tayammum",
    nama: "12. Tayammum",
    type: "teori",
    content: "Pengganti wudhu/mandi dengan debu suci.\nSyarat: Tidak ada air, sakit, masuk waktu sholat.\nRukun: Niat, Usap wajah, Usap tangan hingga siku, Tertib.",
  },

  // --- BAB III: ADZAN & IQOMAH ---
  {
    catId: "bab3",
    id: "hukum-adzan",
    nama: "1. Hukum Adzan & Iqomah",
    type: "teori",
    content:
      "ADZAN:\nPemberitahuan masuknya waktu sholat.\n\nIQOMAH:\nPemberitahuan sholat segera didirikan.\n\nHUKUM:\nSunnah Muakkad (Sangat dianjurkan) bagi sholat fardhu.\n\nSYARAT MUADZIN:\n1. Muslim, Berakal, Baligh.\n2. Laki-laki.\n3. Suci dari hadas & najis.\n4. Suara nyaring dan merdu.",
  },
  {
    catId: "bab3",
    id: "adzan",
    nama: "2. Lafadz Adzan",
    type: "bacaan",
    arab: "اللهُ أَكْبَرُ، اللهُ أَكْبَرُ\nاللهُ أَكْبَرُ، اللهُ أَكْبَرُ\nأَشْهَدُ اَنْ لَا اِلَهَ اِلَّا اللهُ\nأَشْهَدُ اَنَّ مُحَمَّدًا رَسُوْلُ اللهِ\nحَيَّ عَلَى الصَّلَاةِ\nحَيَّ عَلَى الْفَلَاحِ\nاللهُ أَكْبَرُ، اللهُ أَكْبَرُ\nلَا اِلَهَ اِلَّا اللهُ",
    latin: "Allahu Akbar (4x)... Asyhadu alla ilaha illallah... (dst)",
    arti: "Allah Maha Besar... Marilah Sholat...",
    audioUrl: "https://www.islamcan.com/audio/adhan/azan1.mp3",
  },
  {
    catId: "bab3",
    id: "adzan-subuh",
    nama: "3. Khusus Adzan Subuh",
    type: "teori",
    content:
      "Pada Adzan Subuh, setelah 'Hayya 'alal falaah', ditambahkan:\n\nاَلصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ\n(Ash-shalaatu khairum minan naum) - 2x\n\nArtinya: 'Shalat itu lebih baik daripada tidur'.",
  },
  {
    catId: "bab3",
    id: "doa-adzan",
    nama: "4. Doa Sesudah Adzan",
    type: "bacaan",
    arab: "اَللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِيْ وَعَدْتَهُ",
    latin: "Allahumma Rabba hadzihid da'watit tammah...",
    arti: "Ya Allah Tuhan pemilik panggilan yang sempurna ini...",
    audioUrl: "https://santri.net/wp-content/uploads/2020/09/Doa-Setelah-Adzan.mp3",
  },
  {
    catId: "bab3",
    id: "jawab-adzan",
    nama: "5. Cara Menjawab Adzan",
    type: "teori",
    content:
      "Disunnahkan menjawab/menirukan lafadz adzan.\n\nKECUALI pada 'Hayya 'alash shalaah' & 'Hayya 'alal falaah', dijawab dengan:\n\nلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللهِ\n(Laa haula wa laa quwwata illa billah)",
  },
  {
    catId: "bab3",
    id: "iqomah",
    nama: "6. Lafadz Iqomah",
    type: "bacaan",
    arab: "اللهُ أَكْبَرُ، اللهُ أَكْبَرُ\nأَشْهَدُ اَنْ لَا اِلَهَ اِلَّا اللهُ\nأَشْهَدُ اَنَّ مُحَمَّدًا رَسُوْلُ اللهِ\nحَيَّ عَلَى الصَّلَاةِ\nحَيَّ عَلَى الْفَلَاحِ\nقَدْ قَامَتِ الصَّلَاةُ، قَدْ قَامَتِ الصَّلَاةُ\nاللهُ أَكْبَرُ، اللهُ أَكْبَرُ\nلَا اِلَهَ اِلَّا اللهُ",
    latin: "Allahu Akbar... Qad qaamatish shalah...",
    arti: "Sholat telah didirikan...",
    audioUrl: "",
  },
  {
    catId: "bab3",
    id: "doa-iqomah",
    nama: "7. Doa Sesudah Iqomah",
    type: "bacaan",
    arab: "اَقَامَهَا اللهُ وَاَدَامَهَا مَادَامَتِ السَّمَاوَاتُ وَاْلاَرْضُ",
    latin: "Aqaamahallahu wa adaamahaa...",
    arti: "Semoga Allah mendirikannya dan mengekalkannya...",
    audioUrl: "",
  },

  // --- BAB IV: SHOLAT FARDHU ---
  {
    catId: "bab4",
    id: "syarat",
    nama: "Syarat & Rukun",
    type: "teori",
    content:
      "Syarat Sah: Suci badan/tempat, menutup aurat, masuk waktu, menghadap kiblat.\nRukun: Niat, Takbiratul Ihram, Berdiri, Al-Fatihah, Ruku, I'tidal, Sujud, Duduk, Tahiyat Akhir, Salam, Tertib.",
  },
  { catId: "bab4", id: "subuh", nama: "Sholat Subuh", type: "sholat", rakaat: 2, niat: "أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ...", latin: "Ushalli fardhash shubhi...", arti: "Niat Subuh." },
  { catId: "bab4", id: "qunut", nama: "Doa Qunut", type: "bacaan", arab: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ...", latin: "Allahummahdinii fiiman hadait...", arti: "Doa Qunut Subuh." },
  { catId: "bab4", id: "dzuhur", nama: "Sholat Dzuhur", type: "sholat", rakaat: 4, niat: "أُصَلِّي فَرْضَ الظُّهْرِ...", latin: "Ushalli fardhadz dzuhri...", arti: "Niat Dzuhur." },
  { catId: "bab4", id: "ashar", nama: "Sholat Ashar", type: "sholat", rakaat: 4, niat: "أُصَلِّي فَرْضَ الْعَصْرِ...", latin: "Ushalli fardhal 'ashri...", arti: "Niat Ashar." },
  { catId: "bab4", id: "maghrib", nama: "Sholat Maghrib", type: "sholat", rakaat: 3, niat: "أُصَلِّي فَرْضَ الْمَغْرِبِ...", latin: "Ushalli fardhal maghribi...", arti: "Niat Maghrib." },
  { catId: "bab4", id: "isya", nama: "Sholat Isya", type: "sholat", rakaat: 4, niat: "أُصَلِّي فَرْضَ الْعِشَاءِ...", latin: "Ushalli fardhal 'isyaa'i...", arti: "Niat Isya." },

  // --- BAB V: 14 SHALAT SUNNAH ---
  {
    catId: "bab5",
    id: "rawatib",
    nama: "1. Shalat Rawatib",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ ... رَكْعَتَيْنِ (قَبْلِيَّةً/بَعْدِيَّةً) لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatal... (qabliyyatan/ba'diyyatan)...",
    arti: "Sunnah pengiring fardhu.",
  },
  {
    catId: "bab5",
    id: "dhuha",
    nama: "2. Shalat Dhuha",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatadh dhuhaa...",
    arti: "Sunnah di pagi hari.",
  },
  {
    catId: "bab5",
    id: "tahiyatul",
    nama: "3. Tahiyatul Masjid",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ تَحِيَّةِ الْمَسْجِدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnata tahiyyatil masjidi...",
    arti: "Sunnah saat masuk masjid.",
  },
  {
    catId: "bab5",
    id: "tahajjud",
    nama: "4. Shalat Tahajjud",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatat tahajjudi...",
    arti: "Sunnah malam hari.",
  },
  {
    catId: "bab5",
    id: "hajat",
    nama: "5. Shalat Hajat",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatal haajati...",
    arti: "Sunnah memohon hajat.",
  },
  {
    catId: "bab5",
    id: "istikharah",
    nama: "6. Shalat Istikharah",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatal istikhaarati...",
    arti: "Sunnah minta petunjuk.",
  },
  {
    catId: "bab5",
    id: "sunat-wudhu",
    nama: "7. Shalat Sunat Wudhu",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ الْوُضُوءِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatal wudhuu-i...",
    arti: "Sunnah setelah wudhu.",
  },
  {
    catId: "bab5",
    id: "tasbih",
    nama: "8. Shalat Tasbih",
    type: "sholat",
    rakaat: 4,
    niat: "أُصَلِّي سُنَّةَ التَّسْبِيحِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatat tasbiihi...",
    arti: "Sholat dengan 300 tasbih.",
  },
  {
    catId: "bab5",
    id: "taubat",
    nama: "9. Shalat Taubat",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
    latin: "Ushalli sunnatat taubati...",
    arti: "Sunnah mohon ampunan.",
  },
  {
    catId: "bab5",
    id: "hari-raya",
    nama: "10. Shalat Hari Raya",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةً لِعِيْدِ (الْفِطْرِ/الْأَضْحَى) رَكْعَتَيْنِ...",
    latin: "Ushalli sunnatal li'idil...",
    arti: "Idul Fitri & Idul Adha.",
  },
  {
    catId: "bab5",
    id: "gerhana",
    nama: "11. Shalat Gerhana",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ الْكُسُوفِ رَكْعَتَيْنِ...",
    latin: "Ushalli sunnatal kusuufi...",
    arti: "Gerhana Matahari/Bulan.",
  },
  {
    catId: "bab5",
    id: "istisqa",
    nama: "12. Shalat Istisqa",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ الاِسْتِسْقَاءِ رَكْعَتَيْنِ...",
    latin: "Ushalli sunnatal istisqaa-i...",
    arti: "Sholat minta hujan.",
  },
  {
    catId: "bab5",
    id: "tarawih",
    nama: "13. Shalat Tarawih",
    type: "sholat",
    rakaat: 2,
    niat: "أُصَلِّي سُنَّةَ التَّرَاوِيْحِ...",
    latin: "Ushalli sunnatat taraawiihi...",
    arti: "Sunnah Ramadhan.",
  },
  { catId: "bab5", id: "witir", nama: "14. Shalat Witir", type: "sholat", rakaat: 1, niat: "أُصَلِّي سُنَّةَ الْوِتْرِ...", latin: "Ushalli sunnatal witri...", arti: "Penutup sholat malam." },

  // --- BAB VI: KUMPULAN DOA ---
  { catId: "bab6", id: "doa-sholat", nama: "1. Doa Sesudah Sholat", type: "bacaan", arab: "اَللّٰهُمَّ اَنْتَ السَّلاَمُ...", latin: "Allahumma antas salaam...", arti: "Doa dzikir ba'da sholat." },
  { catId: "bab6", id: "doa-ampun", nama: "2. Mohon Ampun", type: "bacaan", arab: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا...", latin: "Rabbana zhalamna anfusana...", arti: "Doa Nabi Adam." },
  {
    catId: "bab6",
    id: "doa-makan",
    nama: "4. Doa Akan Makan",
    type: "bacaan",
    arab: "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا...",
    latin: "Allahumma baarik lanaa...",
    arti: "Doa sebelum makan.",
  },
  { catId: "bab6", id: "doa-tidur", nama: "Doa Sebelum Tidur", type: "bacaan", arab: "بِسْمِكَ اللّهُمَّ اَحْيَا وَ بِسْمِكَ اَمُوْتُ", latin: "Bismika Allahumma ahyaa...", arti: "Doa tidur." },

  // --- BAB VII: PUASA RAMADHAN & ZAKAT ---
  { 
    catId: "bab7", id: "syarat-puasa", nama: "1. Panduan Puasa", type: "teori", 
    content: "Syarat Wajib Puasa:\n1. Islam\n2. Baligh & Berakal\n3. Mampu (Tidak sakit parah/tua renta)\n4. Suci dari haid & nifas.\n\nRukun Puasa:\n1. Niat (di malam hari sebelum subuh).\n2. Menahan diri dari hal yang membatalkan puasa mulai terbit fajar (subuh) hingga terbenam matahari (maghrib).\n\nHal yang Membatalkan:\nMakan/minum disengaja, muntah disengaja, berhubungan suami istri di siang hari, keluar haid/nifas, gila, dan murtad." 
  },
  { 
    catId: "bab7", id: "niat-puasa-harian", nama: "2. Niat Puasa (Harian)", type: "bacaan", 
    arab: "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu shauma ghadin 'an adaa'i fardhi syahri Ramadhaana haadzihis sanati lillaahi ta'aalaa.", 
    arti: "Aku niat berpuasa esok hari untuk menunaikan kewajiban puasa bulan Ramadhan tahun ini karena Allah Ta'ala.",
    audioUrl: "" 
  },
  { 
    catId: "bab7", id: "niat-puasa-sebulan", nama: "3. Niat Puasa (Sebulan Penuh)", type: "bacaan", 
    arab: "نَوَيْتُ صَوْمَ جَمِيْعِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu shauma jamii'i syahri Ramadhaana haadzihis sanati lillaahi ta'aalaa.", 
    arti: "Aku niat berpuasa selama satu bulan penuh di bulan Ramadhan tahun ini karena Allah Ta'ala. (Sunnah dibaca di malam pertama Ramadhan untuk jaga-jaga jika suatu malam lupa berniat).",
    audioUrl: "" 
  },
  { 
    catId: "bab7", id: "doa-buka-puasa", nama: "4. Doa Buka Puasa", type: "bacaan", 
    arab: "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ", 
    latin: "Dzahabaz zhama'u wabtallatil 'uruuqu wa tsabatal ajru, insyaa Allah.", 
    arti: "Telah hilang rasa haus, telah basah urat-urat, dan telah pasti ganjaran, dengan kehendak Allah. (HR. Abu Daud)",
    audioUrl: "" 
  },
  { 
    catId: "bab7", id: "zakat-fitrah", nama: "5. Niat Zakat Fitrah (Diri Sendiri)", type: "bacaan", 
    arab: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ نَفْسِيْ فَرْضًا لِلّٰهِ تَعَالَى", 
    latin: "Nawaitu an ukhrija zakaatal fithri 'an nafsii fardhan lillaahi ta'aalaa.", 
    arti: "Aku niat mengeluarkan zakat fitrah untuk diriku sendiri, fardhu karena Allah Ta'ala. (Besarannya 2,5 kg atau 3,5 liter beras/makanan pokok).",
    audioUrl: "" 
  }
];

// 4. DATA GERAKAN (UNIVERSAL & WUDHU)
const universalSteps = [
  { nama: "Takbiratul Ihram", gerakan: "Angkat tangan sejajar telinga.", arab: "اللهُ أَكْبَرُ", latin: "Allahu Akbar", audioUrl: "https://www.islamic.network/audio/invocations/takbir.mp3" },
  { nama: "Doa Iftitah", gerakan: "Bersedekap.", arab: "اللهُ أَكْبَرُ كَبِيرًا... إِنِّي وَجَّهْتُ وَجْهِيَ...", latin: "Allahu akbar kabiiraw... Innii wajjahtu...", audioUrl: "" },
  {
    nama: "Ruku'",
    gerakan: "Membungkuk.",
    arab: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ",
    latin: "Subhaana rabbiyal 'adziimi wa bihamdih",
    audioUrl: "https://www.islamic.network/audio/invocations/ruku.mp3",
  },
  { nama: "I'tidal", gerakan: "Berdiri tegak.", arab: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ", latin: "Sami'allahu liman hamidah", audioUrl: "https://www.islamic.network/audio/invocations/itidal.mp3" },
  {
    nama: "Sujud",
    gerakan: "Dahi di lantai.",
    arab: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ",
    latin: "Subhaana rabbiyal a'laa...",
    audioUrl: "https://www.islamic.network/audio/invocations/sujud.mp3",
  },
  { nama: "Duduk Antara 2 Sujud", gerakan: "Duduk tenang.", arab: "رَبِّ اغْفِرْ لِي...", latin: "Rabbighfirlii...", audioUrl: "https://www.islamic.network/audio/invocations/duduk.mp3" },
  {
    nama: "Tahiyat Akhir",
    gerakan: "Tasyahud akhir.",
    arab: "التَّحِيَّاتُ الْمُبَارَكَاتُ...",
    latin: "At-tahiyyaatul mubaarakaat...",
    audioUrl: "https://www.islamic.network/audio/invocations/tahiyat.mp3",
  },
  { nama: "Salam", gerakan: "Menoleh kanan-kiri.", arab: "السَّلاَمُ عَلَيْكُمْ...", latin: "Assalaamu 'alaikum...", audioUrl: "https://www.islamic.network/audio/invocations/salam.mp3" },
];

const wudhuSteps = [
  { nama: "Membasuh Muka", gerakan: "Ratakan air ke wajah.", arab: "نَوَيْتُ الْوُضُوْءَ...", latin: "Nawaitul wudhu...", audioUrl: "" },
  { nama: "Membasuh Tangan", gerakan: "Basuh hingga siku.", arab: "-", latin: "-", audioUrl: "" },
  { nama: "Mengusap Kepala", gerakan: "Usap sebagian kepala.", arab: "-", latin: "-", audioUrl: "" },
  { nama: "Membasuh Kaki", gerakan: "Basuh hingga mata kaki.", arab: "-", latin: "-", audioUrl: "" },
];

