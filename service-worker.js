self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("thiagogama-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});
