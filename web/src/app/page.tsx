// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

const style = {
  fontSize: '2rem',
}

export default function Home() {
  return (
    <div className='h-screen bg-zinc-900 p-6 text-zinc-100'>
      <h2 style={style}>Sua Cápsula do Tempo</h2>
    </div>
  )
}
