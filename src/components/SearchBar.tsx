import { Search } from "lucide-react";


export default function SearchBar() {

    return (
        <label className="flex-[0.3] p-[1px] flex items-center bg-transparent border-b-[1px] border-slate-900/40 dark:border-slate-300/45">
            <input type="search" placeholder="¿Qué estás buscando?" className="p-2 flex-1 outline-none bg-transparent " />
            <Search />
        </label>
    )
}