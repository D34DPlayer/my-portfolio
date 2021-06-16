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
      renderAfterDocumentEvent: "render-event",
    }),
  }),
];

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer: {
    watchOptions: {
      poll: 1000,
    },
  },
  configureWebpack: {
    plugins: productionPlugins,
  },
};
