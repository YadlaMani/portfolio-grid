import CodingProfile from "@/components/CodingProfile";
import Web2Projects from "@/components/Web2Projects";
import SocialLinks from "@/components/SocialLinks";
import Web3Projects from "@/components/Web3Projects";
import Achievements from "@/components/Achievements";
import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import Personal from "@/components/Personal";

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen p-4 bg-background">
      <CodingProfile />
      <Web2Projects />
      <SocialLinks />
      <Web3Projects />
      <Achievements />
      <ProfileCard />
      <TechStack />
      <Personal />
    </div>
  );
}
