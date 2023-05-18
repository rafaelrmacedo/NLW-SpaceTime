import { BlurBackground } from '@/components/BlurBackground'
import { Copyright } from '@/components/Copyright'
import { CreateAccount } from '@/components/CreateAccount'
import { Hero } from '@/components/Hero'
import { Stripes } from '@/components/Stripes'

export function LeftSection() {
    return (
        <div className="items-center bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col justify-between px-128 py-16 relative overflow-hidden border-r border-white/10">

        <BlurBackground />
        <Stripes />
        <CreateAccount />
        <Hero />
        <Copyright />
      </div>
    )
}