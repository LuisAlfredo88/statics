importScripts("/static/precache-manifest.d47bdf68edca3418ca10658f3b0278b1.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// eslint-disable-next-line
if (workbox) {
    console.log(`Workbox is loaded`);
    // eslint-disable-next-line
    workbox.precaching.precacheAndRoute(self.__precacheManifest);

} 
else {
    console.log(`Workbox didn't load`);
}

