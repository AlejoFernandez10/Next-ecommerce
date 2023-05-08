/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true,
    serverActions:true
  },
  images:{
    domains:[
      'ciseco-nextjs.vercel.app',
      'preview.themeforest.net'
    ]
  }
}

module.exports = nextConfig
