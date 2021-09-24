module.exports = {
  reactStrictMode: true,
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
      {
        source: "/sponsorship-packet",
        destination:
          "https://storage.googleapis.com/ugahacks-public/external/UGAHacks6-Sponsorship-Packet.pdf",
        permanent: true,
      },
    ];
  },
};
