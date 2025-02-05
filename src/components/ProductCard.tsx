import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="relative w-full h-56">
                <Image
                    src={product.images[0] || "/placeholder.jpg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>
            <CardContent className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <Badge className="w-max bg-blue-600 text-white font-semibold px-3 py-1">${product.price}</Badge>
            </CardContent>
            <CardFooter className="p-4 flex justify-between">
                <Link href={`/products/${product.id}`}>
                    <Button variant="outline">Ver más</Button>
                </Link>
                <Button className="bg-blue-600 text-white">Agregar al carrito</Button>
            </CardFooter>
        </Card>
    );
}
