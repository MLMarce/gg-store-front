
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
    return (
        <section className="p-8 text-center bg-blue-600 text-white rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
            <p className="mb-6">Recibe ofertas exclusivas y novedades directamente en tu correo.</p>
            <div className="flex justify-center gap-4">
                <Input type="email" placeholder="Ingresa tu correo" className="w-64 p-2 rounded-lg" />
                <Button className="bg-white text-blue-600 px-6 py-2 rounded-lg">Suscribirse</Button>
            </div>
        </section>
    );
}