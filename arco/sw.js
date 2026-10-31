const CONFIG = {"base":"/arco/","files":[{"url":"/arco/arco-mark.svg","integrity":"sha256-xCX2RbHCJbsaD5X27TFSHt7kzIVLn/v+RLtfKvcX79I="},{"url":"/arco/assets/A3-B899Ep8C.mp3","integrity":"sha256-jhCP4ijjTjL2tOYe//cy7sUwWKnm8FqNjnGVmLEyxPk="},{"url":"/arco/assets/A4-DOvdn91G.mp3","integrity":"sha256-pi3ySiyEzqjRjB+orKfBjId7ordqAKWRJW+nTTzlSsM="},{"url":"/arco/assets/A5-CM9sZMm0.mp3","integrity":"sha256-nlzuH+nPaLcZNiPUaifIlW5XLB/yNMoOEVmbVWBQ3sY="},{"url":"/arco/assets/A6-I7BaRKn3.mp3","integrity":"sha256-tgZKZXWSxjwDVh0s4QkmB8FOHYCRRF1QBl0OyBn/b7w="},{"url":"/arco/assets/C4-B2DzZQ9W.mp3","integrity":"sha256-aJ6qTC/X8poswOOG7sRiFW1SOofXASaeXiRY5mBW9PY="},{"url":"/arco/assets/C5-C2EPYtUj.mp3","integrity":"sha256-L1sPdCIGMBD7N55oS/3y2qORHc0iUUE9efoqUwKf3DA="},{"url":"/arco/assets/C6-BcoErVUV.mp3","integrity":"sha256-DTIy7dE7pp/VyvSilQYK4P1TO4oUM64KA4ZE1wcVyQc="},{"url":"/arco/assets/C7-DoR7Z-NX.mp3","integrity":"sha256-aUtRL6yZun9ykMBF2cGOlHJKfrzDGbk3uqvGISWBQoM="},{"url":"/arco/assets/capture-worklet-CJRFVNAO.js","integrity":"sha256-jK3fF8zsz+6w+0SvaEfdB1GDB0kFGNB/B1na1P6dhzI="},{"url":"/arco/assets/Ds4-ZpjA_cOI.mp3","integrity":"sha256-Zj6Ls+LQ+iOjBSbc16sOQmCcGTwHAlZH70a63PgewhE="},{"url":"/arco/assets/Ds5-rz2hEMxW.mp3","integrity":"sha256-v3EJbmU6t87KORS5/UTYwn/oPBYlZMXbNL0GuU6xS4w="},{"url":"/arco/assets/Ds6-ZnMjIARI.mp3","integrity":"sha256-62QwFNn5JvGl+fUfxKHtjAfG2jbOFk1bIh17h4pT8UI="},{"url":"/arco/assets/Fs4-XuYqV_uK.mp3","integrity":"sha256-YTZS9cluNXNs5qRrxN22uhB20fsWo1pMIsFOZ+/d5Xw="},{"url":"/arco/assets/Fs5-bI3vcOCZ.mp3","integrity":"sha256-7S/fVDJ06nLd1OtjShY1ZTGl9AQLKmDTT7EqXHLL8i8="},{"url":"/arco/assets/Fs6-DO3MyhsQ.mp3","integrity":"sha256-xYTStOlqN7Eskg7TIS0Umr7fJTQjib/cVXsvrIR6sRw="},{"url":"/arco/assets/icon-180.png","integrity":"sha256-Sei2FKc1NkGD1Sa60RwN29WeW1b98BefXGBqJoHc/Ro="},{"url":"/arco/assets/icon-192.png","integrity":"sha256-eAUxhh5x1TbWG+dfZKzn7uqAbwGj8AKXjvl1vPLhBs8="},{"url":"/arco/assets/icon-512.png","integrity":"sha256-OEGL9FOGFnG0t7WdQluTU6ff2DqcllKJuaRIEi//hg8="},{"url":"/arco/assets/index-BuLmIYBS.js","integrity":"sha256-12rd+8atGhXny0PfHTm8r8ajMXPZasIB369DzpCfQFY="},{"url":"/arco/assets/index-Cc9Y_yFq.css","integrity":"sha256-Ns2W8ROINwKQuzpEGzcxamcrq97Mf/YoC62u+34fdV8="},{"url":"/arco/assets/opensheetmusicdisplay.min-D4FpzpAo.js","integrity":"sha256-dFxU34urIIJRrGGo7Tq8Qj9POzcY8ujY52kH4vkDUo4="},{"url":"/arco/assets/pitch-worker-CFhERybe.js","integrity":"sha256-y9/SquJqpIh5N7Cz7DyCEpyHG14kj2JLy1J1A+70AAs="},{"url":"/arco/fonts/ArcoMusic-subset.woff2","integrity":"sha256-/OIWtZF2EGFmJHRsjVS/Noe0xMS0Jwov+qFsefmeI0Q="},{"url":"/arco/fonts/ArcoSans-VF.woff2","integrity":"sha256-lTo+6wng0sXHv8FjpAGnVOXwlxhi6odXA3CX/6oZNDY="},{"url":"/arco/fonts/LICENSES.txt","integrity":"sha256-RSfJgEbNyStmp0B6K5iKw2S0Og/CvYRGhgTULWgWMiM="},{"url":"/arco/fonts/OFL-Noto.txt","integrity":"sha256-FnnLYFRJkLTCRFMgxtUpjkuwwI/wDbtaUm83k/2qHm8="},{"url":"/arco/index.html","integrity":"sha256-DTDs3uNEj2s5jPq/YL90GET7l4aFqEO5UqeVXtwtYPU="},{"url":"/arco/manifest.webmanifest","integrity":"sha256-7r1ZBy6cMiOS4zLvh2Bh2XwpEss3p+RawFBA4co/jrg="}],"prefix":"arco-offline:/arco/:","version":"b97181200c051563fbbb","buildNumber":"20261030-013"};
/* CONFIG is generated from the final production assets. */
const CACHE = CONFIG.prefix + CONFIG.version;
const activationMarker = CONFIG.base + '__offline_manual_activation__';
// Each installation records its generation, one above every recorded generation,
// before downloading. Activation compares generations to find older versions.
const packageRecord = CONFIG.base + '__offline_package__';
// OfflineAccess stops waiting for a status reply after 15 s.
const statusWaitMs = 10000;
const paths = new Set(CONFIG.files.map((file) => new URL(file.url, self.location.origin).pathname));
// Lookups name the cache instead of opening it: opening creates an absent cache.
const missingFiles = async () => {
  const found = await Promise.all(
    CONFIG.files.map((file) => caches.match(file.url, { cacheName: CACHE })),
  );
  return CONFIG.files.filter((file, index) => !found[index]);
};
const completePackage = async () => (await missingFiles()).length === 0;
const ownedCaches = async () =>
  (await caches.keys()).filter((name) => name.startsWith(CONFIG.prefix));
const readRecord = async (name) => {
  try {
    const record = await (await caches.match(packageRecord, { cacheName: name }))?.json();
    return Number.isSafeInteger(record?.generation) ? record : null;
  } catch {
    return null;
  }
};
const writeRecord = (cache, generation) =>
  cache.put(
    packageRecord,
    new Response(
      JSON.stringify({ version: CONFIG.version, buildNumber: CONFIG.buildNumber, generation }),
      { headers: { 'Content-Type': 'application/json' } },
    ),
  );
const download = (file) =>
  fetch(new Request(file.url, { cache: 'reload', integrity: file.integrity }));
const integrityOf = async (response) => {
  const digest = new Uint8Array(
    await crypto.subtle.digest('SHA-256', await response.arrayBuffer()),
  );
  let binary = '';
  for (const byte of digest) binary += String.fromCharCode(byte);
  return 'sha256-' + btoa(binary);
};
// Copies files whose bytes another owned version already holds and verifies
// them against this package's integrity. Built file names carry content hashes,
// so an update reuses every unchanged file and downloads only the changed ones.
// A source cache deleted meanwhile, or a mismatching copy, leaves the file missing.
async function reuse(cache, missing) {
  const sources = (await ownedCaches()).filter((name) => name !== CACHE);
  if (!sources.length) return missing;
  const still = [];
  for (const file of missing) {
    let copied = false;
    for (const name of sources) {
      try {
        const response = await caches.match(file.url, { cacheName: name });
        if (!response?.ok || (await integrityOf(response.clone())) !== file.integrity) continue;
        await cache.put(file.url, response);
        copied = true;
        break;
      } catch {
        // Unreadable or removed source: try the next one, then the network.
      }
    }
    if (!copied) still.push(file);
  }
  return still;
}
// Stores verified copies of missing files, from older owned versions first and
// then from the network. A repaired package without a record gets generation 0,
// so it never outranks a version installed after it.
async function fill(generation = 0) {
  const missing = await missingFiles();
  const recorded = await readRecord(CACHE);
  if (!missing.length && recorded) return true;
  const cache = await caches.open(CACHE);
  if (!recorded) await writeRecord(cache, generation);
  const remaining = await reuse(cache, missing);
  await Promise.all(
    remaining.map(async (file) => {
      try {
        const response = await download(file);
        if (response.ok && (await integrityOf(response.clone())) === file.integrity)
          await cache.put(file.url, response);
      } catch {
        // Offline or unverifiable: the file stays missing until a later repair.
      }
    }),
  );
  return completePackage();
}
const inScope = (client) => {
  const url = new URL(client.url);
  return url.origin === self.location.origin && url.pathname.startsWith(CONFIG.base);
};
// A status reply can give up before a slow repair finishes; windows re-check on this message.
async function announceReady() {
  const message = {
    type: 'OFFLINE_PACKAGE_READY',
    version: CONFIG.version,
    buildNumber: CONFIG.buildNumber,
  };
  try {
    for (const client of await self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      if (inScope(client)) client.postMessage(message);
  } catch {
    // Windows still learn the state at their next status check.
  }
}
let repairing = null;
// One repair at a time; concurrent requests share it.
const repair = () =>
  (repairing ??= fill()
    .catch(() => false)
    .then(async (ready) => {
      if (ready) await announceReady();
      return ready;
    })
    .finally(() => {
      repairing = null;
    }));
const within = (promise, ms) => {
  let timer;
  return Promise.race([
    promise,
    new Promise((resolve) => (timer = setTimeout(resolve, ms, false))),
  ]).finally(() => clearTimeout(timer));
};
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      let generation = 1;
      for (const name of await ownedCaches())
        generation = Math.max(generation, ((await readRecord(name))?.generation ?? 0) + 1);
      const cache = await caches.open(CACHE);
      try {
        // Recorded before downloading, so an older version activating meanwhile keeps this cache.
        await writeRecord(cache, generation);
        await cache.delete(activationMarker);
        // Unchanged files are copied from older versions; only changed ones are downloaded.
        // If this cache was deleted during the first pass, `cache` is detached: the
        // second pass reopens it by name and fills it again.
        if (!(await fill(generation)) && !(await fill(generation)))
          throw new Error('Incomplete offline package');
      } catch (error) {
        await caches.delete(CACHE);
        throw error;
      }
    })(),
  );
  // Automatic updates wait for old windows to close; manual activation is explicit.
});
// Deletes versions installed before this one. A later generation belongs to an
// installing or waiting version, or to an interrupted install that a later
// activation reclaims. A cache without a record comes from a build before package
// records and can belong to an installing or waiting version of such a build.
// After an explicit handover the previous version stays: the handing-over document can
// still request its lazy chunks. That is the version the document named (`keep`) or,
// for a page that did not name one, the latest older generation or, when no older
// cache has a record, the caches without one.
async function reclaim(keepPrevious, keep) {
  const own = await readRecord(CACHE);
  if (!own) return;
  const others = [];
  for (const name of await ownedCaches())
    if (name !== CACHE) others.push({ name, record: await readRecord(name) });
  let previous = null;
  for (const other of others)
    if (
      other.record &&
      other.record.generation < own.generation &&
      (!previous || other.record.generation > previous.record.generation)
    )
      previous = other;
  const { installing, waiting } = self.registration;
  const otherWorker = !!installing || (!!waiting && waiting !== self.serviceWorker);
  const named = keepPrevious && keep && others.some((other) => other.name === keep);
  for (const { name, record } of others) {
    if (named ? name === keep : keepPrevious && (record ? name === previous?.name : !previous))
      continue;
    if (record ? record.generation < own.generation : !otherWorker) await caches.delete(name);
  }
}
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Old documents can finish requests across explicit handover, including lazy chunks.
      // A later activation reclaims that previous version.
      const marker = await caches.match(activationMarker, { cacheName: CACHE });
      let keep = null;
      try {
        const from = marker && (await marker.clone().json())?.from;
        if (typeof from === 'string' && from && from !== CONFIG.version)
          keep = CONFIG.prefix + from;
      } catch {
        // A marker without a named version (earlier pages) keeps the latest older version.
      }
      await reclaim(!!marker, keep);
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
  const oldAsset = url.pathname.startsWith(CONFIG.base + 'assets/');
  if (!page && !paths.has(url.pathname) && !oldAsset) return;
  const key = page ? CONFIG.base + 'index.html' : url.pathname;
  const answer = (async () => {
    const current = await caches.match(key, { cacheName: CACHE });
    if (current) return { response: current };
    // A missing package file starts a repair; the response never waits for it.
    const repaired = paths.has(key) ? repair() : undefined;
    if (oldAsset)
      for (const name of await caches.keys()) {
        if (!name.startsWith(CONFIG.prefix) || name === CACHE) continue;
        const previous = await caches.match(key, { cacheName: name });
        if (previous) return { response: previous, repaired };
      }
    return { response: fetch(event.request), repaired };
  })();
  event.respondWith(answer.then((result) => result.response));
  event.waitUntil(
    answer.then(
      (result) => result.repaired,
      () => {},
    ),
  );
});
async function reply(event, ready) {
  const status = { ready, version: CONFIG.version, buildNumber: CONFIG.buildNumber };
  if (event.data.type === 'OFFLINE_STATUS') {
    event.ports[0]?.postMessage(status);
    return;
  }
  const source = event.source;
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  const otherWindows = clients.some((client) => inScope(client) && client.id !== source?.id);
  if (
    !ready ||
    event.data.version !== CONFIG.version ||
    !source ||
    !inScope(source) ||
    otherWindows
  ) {
    event.ports[0]?.postMessage({
      ...status,
      accepted: false,
      reason: otherWindows ? 'other-windows' : 'unavailable',
    });
    return;
  }
  // Names the version the handing-over document runs, so activation keeps that cache.
  const from = typeof event.data.from === 'string' ? event.data.from : null;
  await (
    await caches.open(CACHE)
  ).put(
    activationMarker,
    new Response(JSON.stringify({ retain: 'previous assets', from }), {
      headers: { 'Content-Type': 'application/json' },
    }),
  );
  event.ports[0]?.postMessage({ ...status, accepted: true });
  await self.skipWaiting();
}
self.addEventListener('message', (event) => {
  if (!['OFFLINE_STATUS', 'ACTIVATE_UPDATE'].includes(event.data?.type)) return;
  event.waitUntil(
    (async () => {
      // A package missing files is repaired first; the reply waits at most statusWaitMs.
      const repaired = (await completePackage()) ? null : repair();
      try {
        await reply(event, !repaired || (await within(repaired, statusWaitMs)));
      } finally {
        await repaired;
      }
    })(),
  );
});
