// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

import { BlurBackground } from '@/components/BlurBackground'
import { Copyright } from '@/components/Copyright'
import { CreateAccount } from '@/components/CreateAccount'
import { Hero } from '@/components/Hero'
import { Stripes } from '@/components/Stripes'
import { MemoriesSection } from '@/components/MemoriesSection'
import { Profile } from '@/components/Profile'
import { cookies } from 'next/headers'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid grid-cols-2 min-h-screen ">
      <div className="items-center bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col justify-between px-128 py-16 relative overflow-hidden border-r border-white/10">
        <BlurBackground />
        <Stripes />
        {isAuthenticated ? <Profile /> : <CreateAccount />}
        <Hero />
        <Copyright />
      </div>
      <MemoriesSection />
    </main>
  )
}
