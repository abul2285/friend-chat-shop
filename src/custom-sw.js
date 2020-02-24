self.addEventListener("install", () => {
  console.log("install");
});

self.addEventListener("activate", () => {
  console.log("activate");
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp("https:.*min.(css|js)"),
  new workbox.strategies.StaleWhileRevalidate({ cacheName: "cache" })
);
