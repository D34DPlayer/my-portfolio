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
      headless: true,
      args: ["--no-sand-box"],
      executablePath: process.env.CHROMIUM_PATH,
      renderAfterDocumentEvent: "render-event",
    }),
  }),
];

const production = process.env.NODE_ENV == "production";

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: production ? productionPlugins : [],
  },
};
