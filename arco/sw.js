const CONFIG = {"base":"/arco/","files":[{"url":"/arco/arco-mark.svg","integrity":"sha256-xCX2RbHCJbsaD5X27TFSHt7kzIVLn/v+RLtfKvcX79I="},{"url":"/arco/assets/A3-B899Ep8C.mp3","integrity":"sha256-jhCP4ijjTjL2tOYe//cy7sUwWKnm8FqNjnGVmLEyxPk="},{"url":"/arco/assets/A4-DOvdn91G.mp3","integrity":"sha256-pi3ySiyEzqjRjB+orKfBjId7ordqAKWRJW+nTTzlSsM="},{"url":"/arco/assets/A5-CM9sZMm0.mp3","integrity":"sha256-nlzuH+nPaLcZNiPUaifIlW5XLB/yNMoOEVmbVWBQ3sY="},{"url":"/arco/assets/A6-I7BaRKn3.mp3","integrity":"sha256-tgZKZXWSxjwDVh0s4QkmB8FOHYCRRF1QBl0OyBn/b7w="},{"url":"/arco/assets/C4-B2DzZQ9W.mp3","integrity":"sha256-aJ6qTC/X8poswOOG7sRiFW1SOofXASaeXiRY5mBW9PY="},{"url":"/arco/assets/C5-C2EPYtUj.mp3","integrity":"sha256-L1sPdCIGMBD7N55oS/3y2qORHc0iUUE9efoqUwKf3DA="},{"url":"/arco/assets/C6-BcoErVUV.mp3","integrity":"sha256-DTIy7dE7pp/VyvSilQYK4P1TO4oUM64KA4ZE1wcVyQc="},{"url":"/arco/assets/C7-DoR7Z-NX.mp3","integrity":"sha256-aUtRL6yZun9ykMBF2cGOlHJKfrzDGbk3uqvGISWBQoM="},{"url":"/arco/assets/capture-worklet-C9HJnbUH.js","integrity":"sha256-g5w6wP8XlGsKhFNJaCTfrPuaH9MLzmTkh1Xur2sMKEY="},{"url":"/arco/assets/Ds4-ZpjA_cOI.mp3","integrity":"sha256-Zj6Ls+LQ+iOjBSbc16sOQmCcGTwHAlZH70a63PgewhE="},{"url":"/arco/assets/Ds5-rz2hEMxW.mp3","integrity":"sha256-v3EJbmU6t87KORS5/UTYwn/oPBYlZMXbNL0GuU6xS4w="},{"url":"/arco/assets/Ds6-ZnMjIARI.mp3","integrity":"sha256-62QwFNn5JvGl+fUfxKHtjAfG2jbOFk1bIh17h4pT8UI="},{"url":"/arco/assets/Fs4-XuYqV_uK.mp3","integrity":"sha256-YTZS9cluNXNs5qRrxN22uhB20fsWo1pMIsFOZ+/d5Xw="},{"url":"/arco/assets/Fs5-bI3vcOCZ.mp3","integrity":"sha256-7S/fVDJ06nLd1OtjShY1ZTGl9AQLKmDTT7EqXHLL8i8="},{"url":"/arco/assets/Fs6-DO3MyhsQ.mp3","integrity":"sha256-xYTStOlqN7Eskg7TIS0Umr7fJTQjib/cVXsvrIR6sRw="},{"url":"/arco/assets/icon-180.png","integrity":"sha256-Sei2FKc1NkGD1Sa60RwN29WeW1b98BefXGBqJoHc/Ro="},{"url":"/arco/assets/icon-192.png","integrity":"sha256-eAUxhh5x1TbWG+dfZKzn7uqAbwGj8AKXjvl1vPLhBs8="},{"url":"/arco/assets/icon-512.png","integrity":"sha256-OEGL9FOGFnG0t7WdQluTU6ff2DqcllKJuaRIEi//hg8="},{"url":"/arco/assets/index-Cygw4o-Q.js","integrity":"sha256-OBdpkHMraq6C2SaRLLWoj0Seog93H9FtVs/UwySUpvc="},{"url":"/arco/assets/index-DmWriSEp.css","integrity":"sha256-nag+eEmcEJTP+TEkLIHKcllLUNJBm7ihe5UfVrY3YEw="},{"url":"/arco/assets/opensheetmusicdisplay.min-D4FpzpAo.js","integrity":"sha256-dFxU34urIIJRrGGo7Tq8Qj9POzcY8ujY52kH4vkDUo4="},{"url":"/arco/assets/pitch-worker-Gbsp0SEg.js","integrity":"sha256-kBhqnIhZ8/PVHm98cIvuPEY5eIfQJtBsQkudZlOYdTY="},{"url":"/arco/index.html","integrity":"sha256-BZVjravWiJj7Eql7AqYXUxj1M3f7hxpBTVQTYcQNGfk="},{"url":"/arco/manifest.webmanifest","integrity":"sha256-7r1ZBy6cMiOS4zLvh2Bh2XwpEss3p+RawFBA4co/jrg="}],"prefix":"arco-offline:/arco/:","version":"99b018540326d43c49c4"};
/* CONFIG is generated from the final production assets. */
const CACHE = CONFIG.prefix + CONFIG.version;
const paths = new Set(CONFIG.files.map((file) => new URL(file.url, self.location.origin).pathname));
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        await cache.addAll(
          CONFIG.files.map(
            (file) =>
              new Request(file.url, {
                cache: 'reload',
                integrity: file.integrity,
              }),
          ),
        );
      } catch (error) {
        await caches.delete(CACHE);
        throw error;
      }
    })(),
  );
  // Updates wait until all old-version windows close. Never interrupt practice.
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys())
        if (key.startsWith(CONFIG.prefix) && key !== CACHE) await caches.delete(key);
      await self.clients.claim();
    })(),
  );
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const page =
    event.request.mode === 'navigate' &&
    (url.pathname === CONFIG.base || url.pathname === CONFIG.base + 'index.html');
  if (!page && !paths.has(url.pathname)) return;
  const key = page ? CONFIG.base + 'index.html' : url.pathname;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      return (await cache.match(key)) || fetch(event.request);
    })(),
  );
});
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'OFFLINE_STATUS') return;
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const complete = (await Promise.all(CONFIG.files.map((file) => cache.match(file.url)))).every(
        Boolean,
      );
      event.ports[0]?.postMessage({ ready: complete, version: CONFIG.version });
    })(),
  );
});
