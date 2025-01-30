'use client'

import { getAllProducts } from "@/service/product";
import { useEffect } from "react";

export default function ProductsSection() {
    useEffect(() =>{
        const fetchProducts = async () =>{
            const products = await getAllProducts()
            console.log(products)
            return products
        }
        fetchProducts()
    },[])
    return (
        <section id="products" className="w-full h-full">
            <h2 className="section-title">Nuestros últimos productos</h2>
            {/* Productos */}
        </section>
    );
}