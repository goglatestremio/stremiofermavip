const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./index");

const port = 10000;
serveHTTP(addonInterface, { port });

console.log(`Server is running at http://0.0.0.0:${port}/manifest.json`);