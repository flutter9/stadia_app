'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "9bfeb985a91e5545d78b906676d8e6fb",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/pubg_banner.jpg": "38cb58617e3c5cd711431710ea9a4ed8",
"/assets/assets/images/destiny.jpg": "3744157231240b6faa100d6c2b641a65",
"/assets/assets/images/apex.jpg": "3d0c36e9ee464ed5cf3e746b20b30f63",
"/assets/assets/images/fc3.jpg": "28e22e87d0dc597d9834b4ee072783c8",
"/assets/assets/images/destiny_banner.jpg": "3c177d80261858245f411bc35863d5e3",
"/assets/assets/images/mk11.jpg": "847908b9e7bb17f24247d12dfe378afd",
"/assets/assets/images/pubg.jpg": "1eb0075317387869e6e2c7cf29a88fcb",
"/assets/assets/images/apex_banner.jpg": "cc7781b98518f07a53c71e530139a287",
"/assets/assets/images/nfs.jpg": "75b63b964326a3a3819334fd633b6be6",
"/assets/assets/images/stadia_mono.png": "d59c4852022c864b5fa115f5500635c5",
"/assets/assets/images/profile.png": "bd80794fddbffb4031fab537cc898680",
"/assets/assets/fonts/Raleway-Bold.ttf": "3b1a9a7b05c1e411253797b2fa3d1e91",
"/assets/assets/fonts/Raleway-Regular.ttf": "6e4a9679e65cc320746c3e5d48e51f28",
"/assets/FontManifest.json": "0e6cf377fc2f472aca19bce897425d97",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "7dc42942118a25acfe5f1c0f974a811b",
"/assets/LICENSE": "c9c4117c5d4f704876572a8c9a6c927a",
"/main.dart.js": "e2377221e47bfb582de2b35c9e1342cb"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
