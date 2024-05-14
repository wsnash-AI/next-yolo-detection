/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { }) => {

    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.fallback = { fs: false };

    config.plugins.push(
      new NodePolyfillPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: './node_modules/onnxruntime-web/dist/ort-wasm.wasm',
            to: 'static/chunks/',
          }, {
            from: './node_modules/onnxruntime-web/dist/ort-wasm-simd.wasm',
            to: 'static/chunks/',
          },
          {
            from: './models',
            to: 'static/chunks/app',
          },
        ],
      }),
    );

    return config;
  },
}

module.exports = withBundleAnalyzer(nextConfig)


// module.exports = nextConfig
