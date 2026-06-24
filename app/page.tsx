import Hero from "./components/Hero";
import PartnersSponsors from "./components/PartnersSponsors";
import MediaSection from "./components/MediaSection";
import MediaSection2 from "./components/MediaSection2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PartnersSponsors />
      <MediaSection />
      <MediaSection2 />
    </main>
  );
}
