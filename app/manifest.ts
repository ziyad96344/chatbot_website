import { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'XotBot',
    short_name: 'XotBot',
    description: 'XotBot transforms raw website data into intelligent AI chatbot assistants. From knowledge extraction to cognitive AI deployment in under 5 minutes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
