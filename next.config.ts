/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This allows Next.js to optimize images from Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
    // Optional: Keep this if you want the best image compression in 2026
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;