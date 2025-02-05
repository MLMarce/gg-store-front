
import { Categories } from "@/components/CategoriesSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Hero, } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
