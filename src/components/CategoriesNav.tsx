'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/service/product";
import { Category } from "@/types/product";
export default function CategoriesNav() {
    const [categories, setCategories] = useState<Category[] | []>();

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getAllCategories();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <nav className="w-full h-10 border-t-2 border-slate-900 dark:border-slate-300 ">
            <ul className="w-full max-w-screen snap-x h-max p-2 flex justify-around text-black dark:text-white">
                {categories?.map((cat) => (
                    <li key={cat.id}>
                        <Link href={`/categories/${cat.id}`} className="p-2 text-sm font-medium">
                            {cat.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}