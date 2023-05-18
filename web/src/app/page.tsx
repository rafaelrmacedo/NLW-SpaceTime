// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

import { LeftSection } from '@/components/LeftSection'
import { MemoriesSection } from '@/components/MemoriesSection'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen ">
      <LeftSection />
      <MemoriesSection />
    </main>
  )
}
