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
    <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-6 gap-4 h-screen p-4 ">
      <CodingProfile />
      <Web2Projects />
      <SocialLinks />
      <Experience />
      <Stats />
      <div className="order-first lg:order-none lg:col-span-6 lg:row-span-2 rounded-xl border border-muted shadow-sm relative">
        <ProfileCard />
      </div>
      <TechStack />
      <Personal />
    </div>
  );
}
