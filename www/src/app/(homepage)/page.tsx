import Hero from "./_components/hero";
import About from "./_components/about";
import Services from "./_components/services";
import Process from "./_components/process";
import Testimonies from "./_components/testimonies";
import Location from "./_components/location";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-auto bg-black">
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonies />
      <Location />
      <Footer />
    </main>  
  );
}
