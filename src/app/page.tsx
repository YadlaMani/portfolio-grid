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
    <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-6 gap-4 min-h-screen lg:h-screen p-4 box-border lg:overflow-hidden">
      {/* Top Left: Coding Profile */}
      <div className="min-h-55 lg:min-h-0 lg:col-span-2 lg:row-span-2">
        <CodingProfile />
      </div>

      {/* Top Middle: Web2 Projects */}
      <div className="min-h-70 lg:min-h-0 lg:col-span-7 lg:row-span-2">
        <Web2Projects />
      </div>

      {/* Top Right: Social Links */}
      <div className="lg:col-span-3 lg:row-span-1">
        <SocialLinks />
      </div>

      {/* Right Column: Experience (Tall) */}
      <div className="lg:col-span-3 lg:row-span-3">
        <Experience />
      </div>

      {/* Middle Left: Stats/GitHub */}
      <div className="min-h-55 lg:min-h-0 lg:col-span-3 lg:row-span-2">
        <Stats />
      </div>

      {/* Middle Center: Profile Card */}
      <div className="order-first lg:order-none lg:col-span-6 lg:row-span-2">
        <ProfileCard />
      </div>

      {/* Bottom Wide: Tech Stack */}
      <div className="lg:col-span-9 lg:row-span-2">
        <TechStack />
      </div>

      {/* Bottom Right: Personal/Image */}
      <div className="h-65 lg:h-auto lg:col-span-3 lg:row-span-2">
        <Personal />
      </div>
    </div>
  );
}
