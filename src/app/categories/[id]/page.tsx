"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/components/ProductCard"; // Reutilizamos la card
import { getCategoryById } from "@/service/product";

interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    images: string[];
}

interface Category {
    id: string;
    name: string;
    products: Product[];
}

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const id = (await params).id
                const data = await getCategoryById(id)
                setCategory(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, []);

    if (!category) return <p className="text-center mt-10">Categoría no encontrada.</p>;

    return (
        <main className="max-w-6xl mx-auto py-10 pt-36 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">{category.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-48 w-full rounded-lg" />
                    ))
                    : category?.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </main>
    );
}
