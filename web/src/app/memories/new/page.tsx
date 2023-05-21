import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemoryPage() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link
                href="/"
                className="flex items-center text-sm text-gray-200 
                hover:text-gray-50 transition-colors underline"
            >
                <ChevronLeft className="h-4 w-4" />
                voltar à timeline
            </Link>

            <form className="flex w-full flex-col gap-2">
                <div className="flex items-center gap-4">
                    <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-50">
                        <Camera className="w-4 h-4"/>
                        Anexar mídia
                    </label>
                    <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-50"/>
                        <input type="checkbox" name="isPublic" id="isPublic" value="true" className="rounded border-gray-400
                    bg-gray-700 text-purple-500" />
                        Tornar memória pública
                </div>
                <input type="file" id="media" className="invisible h-0 w-0" />

                <textarea name="content" spellCheck={false}
                    className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed 
                    text-gray-100 placeholder:text-gray-400 focus:ring-0"
                    placeholder="Escreva aqui sua memória..."
                />
            </form>
        </div>
    )
}