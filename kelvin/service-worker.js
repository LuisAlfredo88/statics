importScripts("/statics/kelvin/precache-manifest.c926a5facd2524019343f1adcdcb6db6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// eslint-disable-next-line
if (workbox) {
    console.log(`Workbox is loaded`);
    // eslint-disable-next-line
    workbox.precaching.precacheAndRoute(self.__precacheManifest);

} 
else {
    console.log(`Workbox didn't load`);
}

