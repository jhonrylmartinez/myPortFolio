import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PortfolioHeader from "@/components/PortfolioNavbar";
import ProjectSection from "@/components/ProjectSection";


export default function Home() {
  return (
    <>
     {/* Header  */}
     <div>
      <PortfolioHeader />
      </div>
     <div className="border border-blue-500 p-5">
      
      
      {/* Hero Section */}
    <div>
    <HeroSection />
    </div>
    <hr className="w-4/5 mx-auto my-4 border-t-2 border-green-500" />



      {/* About Section */}
   <div>
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
