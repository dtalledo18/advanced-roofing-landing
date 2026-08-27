import Hero from "@/src/components/sections/Hero";
import Introduction from "@/src/components/sections/Introduction";
import About from "@/src/components/sections/About";
import Projects from "@/src/components/sections/Projects";
import InfinityText from "@/src/components/sections/InfinityText";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";
// import Introduction from '@/components/sections/Introduction';
// import About from '@/components/sections/About';
// import Projects from '@/components/sections/Projects';
// import InfinityText from '@/components/sections/InfinityText';
// import Contact from '@/components/sections/Contact';
// import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
      <main className="relative w-full">
        <Hero />
        <Introduction/>
        <About/>
        <Projects />
        <InfinityText/>
        <Contact/>
        <Footer/>
      </main>
  );
}