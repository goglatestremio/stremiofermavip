const { addonBuilder } = require("stremio-addon-sdk");

const builder = new addonBuilder({
  id: "org.stremio.liveaddon",
  version: "1.0.0",
  name: "Stremio Live Addon",
  description: "Watch live TV channels via M3U8 links",
  types: ["movie & series"],
  resources: ["stream"],
  idPrefixes: ["liveaddon"],
  catalogs: []
});

const m3u8Link = "http://a1.lion.wine:80/live/x9Kw7670/8cxU9044/1225472.m3u8";

builder.defineStreamHandler((args) => {
  return Promise.resolve({
    streams: [
      {
        title: "Ferma VIP Live",
        url: m3u8Link
      }
    ]
  });
});

module.exports = builder.getInterface();