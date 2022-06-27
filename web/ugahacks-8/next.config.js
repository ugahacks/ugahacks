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
        source: "/recap-7",
        destination:
          "https://storage.googleapis.com/ugahacks-public/external/UGAHacks7-Recap-Packet.pdf",
        permanent: true,
      },
      {
        source: "/sponsorship-packet-8",
        destination:
          "https://storage.googleapis.com/ugahacks-public/external/UH8SponsorshipPacket.pdf",
        permanent: true,
      },
    ];
  },
};
