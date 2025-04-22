import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AVAILABLE_PLATFORMS = [
  "instagram",
  "tiktok",
  "facebook",
  "youtube",
  "twitter",
];
