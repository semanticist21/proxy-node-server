const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const runMuiStoreWP = () => {
  const app = express();

  var options = {
    target: "https://store-wp.mui.com", // target host
    changeOrigin: true, // needed for virtual hosted sites
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  };

  app.use("/", createProxyMiddleware(options));

  app.listen(8085);
};

module.exports = { runMuiStoreWP };
