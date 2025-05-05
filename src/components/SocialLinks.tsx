import { Button } from "@/components/ui/button";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaDiscord, FaYoutube } from "react-icons/fa"; // Import icons from react-icons

export default function SocialLinks() {
  return (
    <div className="col-span-3 row-span-1 grid grid-cols-3 gap-4">
      <Button className="bg-black text-white p-4 rounded-full shadow-lg">
        <FaGithub className="h-12 w-12" />
      </Button>
      <Button className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
        <FaTwitter className="h-12 w-12" />
      </Button>
      <Button className="bg-blue-700 text-white p-4 rounded-full shadow-lg">
        <FaLinkedin className="h-12 w-12" />
      </Button>
      <Button className="bg-red-500 text-white p-4 rounded-full shadow-lg">
        <FaEnvelope className="h-12 w-12" />
      </Button>
      <Button className="bg-purple-600 text-white p-4 rounded-full shadow-lg">
        <FaDiscord className="h-12 w-12" />
      </Button>
      <Button className="bg-red-600 text-white p-4 rounded-full shadow-lg">
        <FaYoutube className="h-12 w-12" />
      </Button>
    </div>
  );
}