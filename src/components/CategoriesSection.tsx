import { Card, CardContent, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function Categories() {
    const categories = [
        { id: 1, name: "Hombres" },
        { id: 2, name: "Mujeres" },
        { id: 3, name: "Niños" },
        { id: 4, name: "Ofertas" }
    ];

    return (
        <section className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Categorías</h2>
            <Carousel className="w-full max-w-2xl mx-auto">
                <CarouselContent>
                    {categories.map((category) => (
                        <CarouselItem key={category.id} className="basis-1/2 md:basis-1/4">
                            <Card className="cursor-pointer hover:shadow-lg bg-slate-900 text-white rounded-xl">
                                <CardContent className="p-4 flex flex-col items-center">
                                    <img
                                        src='https://images.pexels.com/photos/13473246/pexels-photo-13473246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        alt={category.name}
                                        className="w-24 h-24 object-cover mb-4 rounded-full"
                                    />
                                    <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}