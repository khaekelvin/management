"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { Auth0Provider } from '@auth0/auth0-react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const redirectUri = typeof window !== 'undefined' ? window.location.origin + '/dashboard' : '';
  
  return (
    <html lang="en">
      <Auth0Provider
        domain="dev-p63jl88r8hn0qngy.us.auth0.com"
        clientId="qJuocD169mnwQRwYrZ7Ty8oDkNZWLoJo"
        authorizationParams={{
          redirect_uri: redirectUri
        }}
      >
        <body className={inter.className + " overflow-x-hidden"}>{children}</body>
      </Auth0Provider>
    </html>
  );
}
