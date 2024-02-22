const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

var options = {
  target: "https://mui.com", // target host
  changeOrigin: true, // needed for virtual hosted sites
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers["Access-Control-Allow-Origin"] = "*";
  },
};

app.use(
  "/",
  createProxyMiddleware(options)
);

app.listen(8083);
