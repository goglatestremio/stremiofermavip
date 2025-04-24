const { addonBuilder } = require("stremio-addon-sdk");

const addon = new addonBuilder({
  id: "org.stremio.liveaddon",
  version: "1.0.0",
  name: "Stremio Live Addon",
  description: "Watch live TV channels via M3U8 links",
  types: ["tv"], // ✅ required array
  resources: ["stream"],
  idPrefixes: ["liveaddon"],
  catalogs: [] // ✅ this was missing!
});

const m3u8Link = "http://a1.lion.wine:80/live/x9Kw7670/8cxU9044/1225472.m3u8";

addon.addStreamHandler(async (args) => {
  return {
    streams: [
      {
        url: m3u8Link
      }
    ]
  };
});

module.exports = addon.getInterface();