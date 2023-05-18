import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-robot' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo criada com React, NextJS, Prisma, TypeScript, NodeJS, TailwindCSS e muito mais!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( // Essa função é usada caso queremos adicionar algo em todas as páginas, ou seja, padronizar o layout
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
