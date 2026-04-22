/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  async redirects() {
    return [
      {
        source: '/careers',
        destination: '/people',
        permanent: true,
      },
      {
        source: '/',
        destination: '/home-variants',
        permanent: false,
      },
    ]
  },
  typescript: {
    // Temporarily ignore build errors due to case-sensitivity issues on macOS
    ignoreBuildErrors: true,
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    qualities: [75, 90, 100],
  },
})
