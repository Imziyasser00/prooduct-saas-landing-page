import Discord from "@/components/Discord";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OpenSource from "@/components/OpenSource";
import Options from "@/components/Options";
import ProductNews from "@/components/ProductNews";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Options />
    <OpenSource />
    <Testimonials />
    <Discord />
    <ProductNews />
    <Footer />
    </>
  );
}
