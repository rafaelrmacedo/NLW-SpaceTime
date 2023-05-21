import Image from 'next/image'
import { getUser } from '@/lib/auth'

export function Profile() {
    const { name, avatarUrl } = getUser()

    return (
        <div className="flex items-center gap-3 text-left">
            <Image src={avatarUrl} width={40} height={40} alt={name + "'s profile photo"} className='w-10 h-10 rounded-full'/>
            <p className='text-sm leading-snug max-w-[140px]'>
                {name}
                <a href="/api/auth/logout" className='underline block text-red-400 hover:text-red-300'>Sair</a>
            </p>
        </div>
    )
}