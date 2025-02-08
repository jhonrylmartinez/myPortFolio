import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PortfolioHeader from "@/components/PortfolioNavbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className=" sticky top-0 z-50">
        <PortfolioHeader />
      </div>

      <div className="p-5">
        {/* Hero Section */}
        <div>
          <HeroSection />
        </div>
        <hr className="w-4/5 mx-auto my-4 border-t-2 border-green-500" />

        {/* About Section */}
        <div className="pt-20"> {/* Added padding to avoid overlap with sticky navbar */}
          <AboutSection />
        </div>
        <hr className="w-4/5 mx-auto my-4 border-t-2 border-green-500" />

        {/* Projects Section */}
        <div>
          <ProjectSection />
        </div>

        <hr className="w-4/5 mx-auto my-4 border-t-2 border-green-500" />

        {/* Contact Section */}
        <div>
          <ContactSection />
        </div>
      </div>
    </>
  );
}
