import { NewMemoryForm } from "@/components/NewMemoryForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemoryPage() {

    return (
        <div className="flex flex-1 flex-col gap-4 p-16">
            <Link
                href="/"
                className="flex items-center text-sm text-gray-200 
                hover:text-gray-50 transition-colors underline"
            >
                <ChevronLeft className="h-4 w-4" />
                voltar à timeline
            </Link>

            <NewMemoryForm />
        </div>
    )
}