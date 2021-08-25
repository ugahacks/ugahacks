module.exports = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source: '/recap',
	destination: 'https://storage.googleapis.com/ugahacks-public/external/UGAHacks6-Recap-Packet.pdf',
	permanent: true,
      },
    ]
  },
}
