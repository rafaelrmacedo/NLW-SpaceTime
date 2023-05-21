import { BlurBackground } from '@/components/BlurBackground'
import { CreateAccount } from '@/components/CreateAccount'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { Stripes } from '@/components/Stripes'

import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'
import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright'

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
  const isAuthenticated = cookies().has('token')
  
  return ( // Essa função é usada caso queremos adicionar algo em todas as páginas, ou seja, padronizar o layout
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
       
        <main className="grid grid-cols-2 min-h-screen ">
        <div className="items-center bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col justify-between px-128 py-16 relative overflow-hidden border-r border-white/10">
          <BlurBackground />
          <Stripes />
          {isAuthenticated ? <Profile /> : <CreateAccount />}
          <Hero />
          <Copyright />
        </div>
          {children} {/* Aqui é onde o conteúdo da página é renderizado */}
        </main>
      </body>
    </html>
  )
}
