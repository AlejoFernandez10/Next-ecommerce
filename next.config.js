/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true,
    serverActions:true
  },
  images:{
    domains:[
      'ciseco-nextjs.vercel.app',
      'preview.themeforest.net',
      'photos.google.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com'
      
    ]
  }
}

module.exports = nextConfig
