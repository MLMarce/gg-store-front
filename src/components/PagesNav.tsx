import { House, ShoppingCart, User, Users } from "lucide-react";
import Link from "next/link";

export default function PagesNav() {
    const user = undefined
    return (
        <nav className="w-screen h-14 md:h-max content-center fixed md:relative md:w-max md:flex-[0.6]  bottom-2 md:bottom-0 left-0 bg-slate-950 dark:bg-slate-200 md:bg-transparent dark:md:bg-transparent text-white md:text-slate-800  dark:text-slate-800 dark:md:text-white rounded-xl">
            <ul className="flex justify-center md:justify-end items-center">
                <li className="px-2">
                    <Link href="/" className="flex flex-col items-center justify-center pt-1">
                        <House className="md:hidden" />
                        <p className="p-2 pt-0 md:pt-2 text-sm font-medium">Home</p>
                    </Link>
                </li>
                <li className="px-2">
                    {user ? <Link href="/account" className="flex flex-col items-center justify-center pt-1">
                        <User className="md:hidden" />
                        <p className="p-2 pt-0 md:pt-2  text-sm font-medium">Mi Cuenta</p>
                    </Link> 
                    : <Link href="/login" className="flex flex-col items-center justify-center pt-1">
                        <User className="md:hidden" />
                        <p className="p-2 pt-0 md:pt-2  text-sm font-medium">Iniciar Sesión</p>
                    </Link>}
                </li>
                <li className="px-2">
                    <Link href="/about" className="flex flex-col items-center justify-center pt-1">
                        <Users className="md:hidden" />
                        <p className="p-2 pt-0 md:pt-2  text-sm font-medium">Nosotros</p>
                    </Link>
                </li>
                <li className="px-2">
                    <Link href="/mycart" className="flex flex-col items-center justify-center pt-1">
                        <ShoppingCart className="mr-2" />
                        <p className="p-2 pt-0 md:pt-2  text-sm font-medium md:hidden">Carrito</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}