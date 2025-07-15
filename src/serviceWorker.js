// Basic Service Worker for Background Sync
self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker Activated');
});
