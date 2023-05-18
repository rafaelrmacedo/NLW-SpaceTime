// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

import { User } from 'lucide-react'

import Image from 'next/image'

import nwlLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen ">
      {/* Left Section */}
      <div className="items-start bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col justify-between px-128 py-16 relative overflow-hidden border-r border-white/10">

        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full blur-full bg-purple-700 opacity-50" />

        {/* Stripes */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-stripes" />

        {/* Create account */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500'/>  
          </div>
          <p className='text-sm leading-snug max-w-[140px]'>
            <span className='underline '>Crie sua conta e salve suas memórias!</span> 
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nwlLogo} alt="logo-nwl-spacetime" />

          <div className='max-w-[420px] space-y-4'>
            <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua Cápsula do Tempo</h1>
            <p className='text-lg leading-relaxed'>
              Colecione momentos marcantes da sua jornada
              e compartilhe (se quiser) com o mundo!
            </p>
          </div>

            <a href="" className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700'>CADASTRAR LEMBRANÇA</a>
        </div>

        {/* Footer */}
        <div className='text-sm leading-relaxed text-gray-200'>
          Feito com 💜 no NLW da{' '}
          <a href="https://rocketseat.com.br" className='underline hover:text-gray-100' rel='noreferrer'>Rocketseat</a> 
        </div>
      </div>
        
      {/* Right Section*/}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex h-full items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{' '} {/* Forçar o espaço */}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
