
import CategoriesNav from "./CategoriesNav";
import { ModeToggle } from "./ui/ModeToggle";

export default function Header() {


    return (
        <header className="w-full h-50 flex flex-col bg-slate-100 dark:bg-slate-950 items-end relative p-2 gap-2">
            <ModeToggle />
            <CategoriesNav/>
        </header>
    )
}