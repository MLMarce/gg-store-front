'use client'

import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { getAllProducts } from "@/service/product";


export function ProductsSection() {
    const [sortOption, setSortOption] = useState<string>("default");
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        }
        fetchProducts()
    }, [])

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "price-asc") return parseFloat(a.price) - parseFloat(b.price);
        if (sortOption === "price-desc") return parseFloat(b.price) - parseFloat(a.price);
        return 0;
    });

    return (
        <section className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Nuestros Productos</h2>
                <Select onValueChange={setSortOption}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="default">Por defecto</SelectItem>
                        <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                        <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No hay productos disponibles</p>
                )}
            </div>
        </section>
    );
}
