import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Team } from "@/components/team";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CallToAction />
      <Team />
      <Footer />
    </>
  );
}