module.exports = {
  reactStrictMode: true,
  env: {
    GITHUB_ID: "49cb224258e96f64c74f",
    GITHUB_SECRET: "5819ea7dace6657333f0f14044aa884d73714a5f",
    GOOGLE_ID: "436222925278-b10ko5o6anq8iknvtat06utc875kh9uo.apps.googleusercontent.com",
    GOOGLE_SECRET: "oWfXfR3RE0wGcN8aqYABoDrR"
  }
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
