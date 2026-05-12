import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedPiece from "@/components/home/FeaturedPiece";
import HeritageSection from "@/components/home/HeritageSection";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import ClienteleBar from "@/components/home/ClienteleBar";
import ShowroomsAndTrade from "@/components/home/ShowroomsAndTrade";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
      <FeaturedPiece />
      <HeritageSection />
      <ProjectsGrid />
      <ClienteleBar />
      <ShowroomsAndTrade />
    </main>
  );
}
