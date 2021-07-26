
module.exports = {
  env: {
    title: "My First Next App"
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
  //basePath: "/example.com",
  reactStrictMode: true,
}
