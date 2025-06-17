import Image from "next/image";
import Hero from "./_components/hero";
import About from "./_components/about";
import Services from "./_components/services";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-auto">
      <Hero />
      {/* <About /> */}
      <Services />
      <Footer />
    </main>  
  );
}
