import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommunityProfile from "@/components/CommunityProfile";
import MediaActivities from "@/components/MediaActivities";
import Stakeholders from "@/components/Stakeholders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CommunityProfile />
      <MediaActivities />
      <Stakeholders />
      <Footer />
    </main>
  );
}
