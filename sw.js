const CACHE_NAME = "ngajiyuk-v3-cache";
const urlsToCache = ["./", "./index.html", "./quran.html", "./kultum.html", "./data.js"];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("File berhasil di-cache!");
      return cache.addAll(urlsToCache);
    }),
  );
});

// Fetch dari Cache (Biar bisa Offline/Cepat)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Kalau ada di cache, pakai yang cache
      }
      return fetch(event.request); // Kalau nggak ada, baru ambil dari internet
    }),
  );
});
