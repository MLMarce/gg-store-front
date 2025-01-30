
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="p-8 text-center bg-slate-950 text-white rounded-xl">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra tienda</h1>
            <p className="mb-6">Encuentra los mejores productos al mejor precio.</p>
            <Button className="bg-blue-600 px-6 py-2 rounded-lg">Explorar</Button>
        </section>
    );
}


