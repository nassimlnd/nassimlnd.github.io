import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import React from "react";

const jetbrainsMono = JetBrains_Mono({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Nassim LOUNADI - Full-stack developer',
  description: "Nassim LOUNADI's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}
