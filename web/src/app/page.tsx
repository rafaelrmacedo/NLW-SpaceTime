// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

import EmptyMemories from '@/components/EmptyMemories'
import { cookies } from 'next/headers'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'

dayjs.locale(ptBr)

interface Memory{
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')
  
  if (!isAuthenticated) {
    return (
    <EmptyMemories />
    )
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const memories: Memory[] = response.data

  if (memories.length == 0) {
    return <EmptyMemories />
  }

  return (
    <div className='flex flex-col gap-10 p-8'>
      {memories.map(memory => {
        return (
          <div key={memory.id} className='space-y-4'>
            <time className='flex items-center gap-2 text-small text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50'>
              {dayjs(memory.createdAt).format('D[ de ]MMMM[ de ]YYYY')}
            </time>
            <Image
              src={memory.coverUrl}
              width={592}
              height={280}
              className='aspect-video w-full rounded-lg object-cover'
              alt='Memoria'
            />
            <p className='text-lg leading-relaxed text-gray-100'>
              {memory.excerpt}
            </p>
          </div>
        )
    })}
    </div>
  )
}