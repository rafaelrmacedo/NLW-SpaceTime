import { Link } from "lucide-react";

export default function EmptyMemories() {
    return (
        <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex h-full items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{' '} {/* Forçar o espaço */}
            <Link href="/memories/new" className="underline hover:text-gray-50">
              criar agora
            </Link>
            !
          </p>
        </div>
      </div>
    )
}