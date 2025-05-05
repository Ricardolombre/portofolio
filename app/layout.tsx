import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ricardo | Développeur Full Stack',
  description: 'Portfolio de Ricardo, développeur passionné par le C++, le web (PHP, React, Node.js) et l’intelligence artificielle. Découvrez mes projets, compétences et expériences.',
  openGraph: {
    title: 'Ricardo | Développeur Full Stack',
    description: 'Portfolio de Ricardo, développeur passionné par le C++, le web (PHP, React, Node.js) et l’intelligence artificielle.',
    url: 'https://ricardo-portofolio.netlify.app', // Remplace par l'URL de ton site
    siteName: 'Portfolio Ricardo',
    images: [
      {
        url: '/profil.jpg', // Mets l’URL publique de ton image
        width: 1200,
        height: 630,
        alt: 'Photo de Ricardo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo | Développeur Full Stack',
    description: 'Portfolio de Ricardo, développeur passionné par le C++, le web et l’IA.',
    images: ['/profil.jpg'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
