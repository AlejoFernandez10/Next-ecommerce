import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

import TwitterProvider from 'next-auth/providers/twitter'

import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions ={
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),


    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    })
  ],
  
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}