import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="col-span-3 row-span-1 grid grid-cols-4 gap-2">
      <Image
        src="/github.png"
        alt="GitHub"
        width={52}
        height={52}
        className="rounded border border-gray-300 p-1 mx-auto"
      />
      <Image
        src="/twitter.png"
        alt="Twitter"
        width={52}
        height={52}
        className="rounded border border-gray-300 p-1 mx-auto"
      />
      <Image
        src="/gmail.png"
        alt="Gmail"
        width={52}
        height={52}
        className="rounded border border-gray-300 p-1 mx-auto"
      />
      <Image
        src="/discord.png"
        alt="Discord"
        width={52}
        height={52}
        className="rounded border border-gray-300 p-1 mx-auto"
      />
      <Image
        src="/linkedin.png"
        alt="LinkedIn"
        width={52}
        height={52}
        className="rounded border border-gray-300 p-1 mx-auto"
      />
      <div className="col-span-2 flex items-center justify-center border border-gray-300 rounded p-2 text-sm font-medium text-gray-700 bg-gray-50 mx-auto">
        Say Hello!
      </div>
      <Image
        src="/panda-hi.jpeg"
        alt="Panda"
        width={52}
        height={52}
        className="rounded border border-gray-300 p-1 mx-auto"
      />
      <div className="border border-gray-300 rounded p-2 bg-gray-50 mx-auto w-[52px] h-[52px]">
        <Image
          src="/panda-hi.jpeg"
          alt="Panda"
          width={52}
          height={52}
          className="rounded"
        />
      </div>
    </div>
  );
}
