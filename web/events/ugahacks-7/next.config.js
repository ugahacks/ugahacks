module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/sponsorship-packet',
        destination: 'https://storage.googleapis.com/ugahacks-public/external/UH7SponsorshipPacket.pdf',
        permanent: true,
      },
    ]
  },
}
