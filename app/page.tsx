import Hero from "./components/Hero";
import PartnersSponsors from "./components/PartnersSponsors";
import VisionSection from "./components/VisionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PartnersSponsors />
      <VisionSection />
    </main>
  );
}
