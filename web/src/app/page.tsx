// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

import { BlurBackground } from '@/components/BlurBackground'
import { Copyright } from '@/components/Copyright'
import { CreateAccount } from '@/components/CreateAccount'
import { Hero } from '@/components/Hero'
import { MemoriesSection } from '@/components/MemoriesSection'

export default function Home() {
  return (
    <MemoriesSection />
  )
}