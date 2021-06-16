/*
const path = require("path");

const PrerenderSpaPlugin = require("prerender-spa-plugin");
const routerPaths = ["/"];

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, "dist"),
    routes: routerPaths,
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      inject: {
        foo: "bar",
      },
      executablePath: "/usr/bin/chromium",
      renderAfterDocumentEvent: "render-event",
    }),
  }),
];
*/
module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    //plugins: productionPlugins,
  },
};
