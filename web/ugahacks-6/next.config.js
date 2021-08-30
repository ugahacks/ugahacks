module.exports = {
  reactStrictMode: true,
  env: {
    HOSTNAME: "localhost"
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
