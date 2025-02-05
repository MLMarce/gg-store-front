import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CartItemProps {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    stock?: number;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItem({
    id,
    title,
    price,
    image,
    quantity,
    stock = Infinity,
    onQuantityChange,
    onRemove,
}: CartItemProps) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    const handleIncrease = () => {
        if (currentQuantity < stock) {
            const newQuantity = currentQuantity + 1;
            setCurrentQuantity(newQuantity);
            onQuantityChange(id, newQuantity);
        }
    };

    const handleDecrease = () => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            onQuantityChange(id, newQuantity);
        }
    };

    return (
        <Card className="p-4 flex flex-col sm:flex-row items-center gap-4 w-full">
            {/* Imagen del producto */}
            <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="rounded-md object-cover"
            />

            {/* Contenido principal */}
            <CardContent className="flex flex-col sm:flex-row justify-between items-center sm:items-start flex-1 w-full">
                <div className="text-center sm:text-left">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
                </div>

                {/* Controles de cantidad */}
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <Button variant="outline" size="icon" onClick={handleDecrease} disabled={currentQuantity <= 1}>
                        <Minus size={16} />
                    </Button>
                    <span className="w-8 text-center">{currentQuantity}</span>
                    <Button variant="outline" size="icon" onClick={handleIncrease} disabled={currentQuantity >= stock}>
                        <Plus size={16} />
                    </Button>
                </div>
            </CardContent>

            {/* Botón de eliminar */}
            <Button variant="destructive" size="icon" onClick={() => onRemove(id)}>
                <Trash size={16} />
            </Button>
        </Card>
    );
}
