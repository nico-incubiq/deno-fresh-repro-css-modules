import server, { registerStaticFile } from "./server/server-entry.mjs";

registerStaticFile({"name":"/assets/Wrapper-5d7XTgkZ.css","hash":"e595b7cef394b6137fbbe59be84c4121144851348a78a37bc49ddf9d39c4afc5","filePath":"client/assets/Wrapper-5d7XTgkZ.css","contentType":"text/css; charset=UTF-8"});
registerStaticFile({"name":"/assets/_fresh-route___page1-C5eeBO7K.css","hash":"55352b872924ea3eabc76aada69f242f03185fffae22a5bbed09511088c37dc7","filePath":"client/assets/_fresh-route___page1-C5eeBO7K.css","contentType":"text/css; charset=UTF-8"});
registerStaticFile({"name":"/assets/server-entry-BjGR1nPk.css","hash":"2686150804bd58fd1a7dd777f46b49efa4f389910501b773988711c1f6d10d6a","filePath":"client/assets/server-entry-BjGR1nPk.css","contentType":"text/css; charset=UTF-8"});

export default {
  fetch: server.fetch
};
