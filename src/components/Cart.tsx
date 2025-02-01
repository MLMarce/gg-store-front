'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";

const mockCartItems = [
    { id: '1', title: "Luz de Escritorio 3D Mapa Mundi", price: 5000, quantity: 1 },
    { id: '2', title: "Tira LED RGB 5m", price: 3000, quantity: 2 },
];

export default function CartPage() {
    const [cart, setCart] = useState(mockCartItems);

    const updateQuantity = (id: string, quantity: number) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const removeItem = (id: string) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-3xl mx-auto p-10 md:pt-28 ">
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            <Card>
                <CardContent className="p-4 space-y-4">
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <CartItem key={item.id} id={item.id} title={item.title} image={'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6cSE5V8PG-Vjz_Qx2ZnkMrRLmGkoBmUK_c_9lEIlo4wsIOruGKQva_fb0CYQkj7qpOZCcM1gOap_hNG-vfbl8HIZE5tXYVD9O0S1Qb-VL1diAOlOQj4Y3SBU&usqp=CAc'} price={item.price} quantity={item.quantity} onQuantityChange={updateQuantity} onRemove={removeItem}  />
                        ))
                    ) : (
                        <p className="text-center">Tu carrito está vacío.</p>
                    )}
                    <div className="flex justify-between items-center mt-4 border-t pt-4">
                        <span className="text-lg font-semibold">Total: ${total}</span>
                        <Button>Finalizar Compra</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
