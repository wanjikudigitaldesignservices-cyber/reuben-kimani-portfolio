import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectMarquee } from "@/components/ProjectMarquee";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { LiveReactions } from "@/components/LiveReactions";
import { AboutSection } from "@/components/AboutSection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProjectMarquee />
        <ServicesSection />
        <FeaturedProjects />
        <LiveReactions />
        <AboutSection />
        <GuestbookSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
