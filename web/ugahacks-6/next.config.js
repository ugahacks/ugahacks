module.exports = {
  reactStrictMode: true,
  env: {
    HOSTNAME: "localhost",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/recap",
        destination:
          "https://storage.googleapis.com/ugahacks-public/external/UGAHacks6-Recap-Packet.pdf",
        permanent: true,
      },
    ];
  },
};
