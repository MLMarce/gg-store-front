'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CreatedProduct } from "@/types/product";// Simula una función para obtener el producto
import { getProductById } from "@/service/product";

interface ProductIdCardProps {
    productId: string;
}

export function ProductIdCard({ productId }: ProductIdCardProps) {
    const [product, setProduct] = useState<CreatedProduct | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProductById(productId);
                setProduct(data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        if (!product || !selectedSize) return;
        const selectedProductSize = product.productSizes.find((size) => size.size.id === selectedSize);
        if (!selectedProductSize || selectedProductSize.stock <= 0) return;

        console.log("Producto agregado al carrito:", { product, selectedSize });
    };

    if (loading) return <p className="text-center text-lg">Cargando producto...</p>;
    if (!product) return <p className="text-center text-lg text-red-500">Producto no encontrado</p>;

    return (
        <Card className="w-full max-w-5xl mx-auto p-6 shadow-lg">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Carrusel de imágenes */}
                <div className="relative">
                    <Carousel>
                        <CarouselContent>
                            {product.images.map((image, index) => (
                                <CarouselItem key={index} className="flex justify-center">
                                    <img src={image} alt={product.name} className="w-full h-80 object-cover rounded-lg" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                {/* Detalles del producto */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <p className="text-gray-500 text-sm">{product.category.name}</p>
                        <p className="mt-2 text-gray-700">{product.description}</p>
                        <p className="mt-4 text-2xl font-semibold">${product.price}</p>
                    </div>

                    {/* Selección de talles */}
                    <div className="mt-4">
                        <p className="text-gray-700 font-medium">Talles disponibles:</p>
                        <Select onValueChange={setSelectedSize}>
                            <SelectTrigger className="w-full mt-2">
                                <SelectValue placeholder="Selecciona un talle" />
                            </SelectTrigger>
                            <SelectContent>
                                {product.productSizes.map((size) => (
                                    <SelectItem key={size.size.id} value={size.size.id}>
                                        {size.size.name} (Stock: {size.stock})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Botón de agregar al carrito */}
                    <Button
                        className="mt-6"
                        disabled={!selectedSize || (product.productSizes.find((size) => size.size.id === selectedSize)?.stock ?? 0) <= 0}
                        onClick={handleAddToCart}
                    >
                        Agregar al carrito
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
