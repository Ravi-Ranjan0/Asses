import Blogs from "@/components/Blogs";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Navbar from "@/components/Navbar/page";
import NewsLetter from "@/components/NewsLetter";
import ProductFeatures1 from "@/components/ProductFeatures1";
import ProductFeatures2 from "@/components/ProductFeatures2";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Feature />
    <ProductFeatures1 />
    <ProductFeatures2 />
    <Testimonials />
    <Blogs />
    <LogoSection />
    <NewsLetter />
    <Footer />
    </>
  );
}
