"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  text: string;
  link: string;
  variant?: "orange" | "blue" | "green" | "purple" | "pink";
}

const variantColors = {
  orange: "#F4A261",
  blue: "#4A90E2",
  green: "#3CB371",
  purple: "#A78BFA",
  pink: "#EC4899",
};

export default function GlowButton({
  text,
  link,
  variant = "blue",
}: GlowButtonProps) {
  const color = variantColors[variant];

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 text-gray-900 dark:text-white",
        "shadow-[0_0_6px_rgba(0,0,0,0.05)] dark:shadow-[0_0_6px_rgba(255,255,255,0.05)]",
        "hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
        "backdrop-blur-sm border border-gray-300/30 dark:border-white/10 hover:-translate-y-[1px]",
        "text-center select-none"
      )}
      style={{
        backgroundColor: `${color}15`,
        boxShadow: `0 0 12px ${color}40`,
      }}
    >
      {text}
    </Link>
  );
}
