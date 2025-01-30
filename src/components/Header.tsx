
import Image from "next/image";
import CategoriesNav from "./CategoriesNav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import logoImg from "../../public/logo.png"
import SearchBar from "@/components/SearchBar";
import PagesNav from "./PagesNav";

export default function Header() {


    return (
        <header className="w-full h-50 flex flex-col bg-slate-100 dark:bg-slate-950 items-center p-2 gap-2 fixed top-0 left-0 z-50">
            <div className="w-full flex justify-between items-center">
                <Image src={logoImg} alt="logo de la tienda" className="w-8 h-8 rounded-md" />
                <SearchBar />
                <PagesNav/>
                <ModeToggle />
            </div>

            <CategoriesNav />
        </header>
    )
}