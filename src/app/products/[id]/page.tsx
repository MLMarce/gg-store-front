import { ProductIdCard } from "@/components/ProductIdCard";

export default function Page({ params: { id } }: { params: { id: string } }) {
    return (
        <main className="pt-32 w-full h-full">
            <ProductIdCard productId={id} />
        </main>
    );
}
