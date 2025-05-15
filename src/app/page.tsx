import CodingProfile from "@/components/CodingProfile";
import Web2Projects from "@/components/Web2Projects";
import SocialLinks from "@/components/SocialLinks";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import Personal from "@/components/Personal";

export default function Home() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 gap-4 h-screen p-4 ">
      <CodingProfile />
      <Web2Projects />
      <SocialLinks />
      <Experience />
      <Stats />
      <div className="order-first md:order-none md:col-span-6 md:row-span-2 rounded-xl border border-muted shadow-sm relative">

      <ProfileCard />
      </div>
      <TechStack />
      <Personal />
    </div>
  );
}
