import Hero from "@/components/Hero";
import CommunityProfile from "@/components/CommunityProfile";
import MediaActivities from "@/components/MediaActivities";
import Stakeholders from "@/components/Stakeholders";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CommunityProfile />
      <MediaActivities />
      <Stakeholders />
    </main>
  );
}
