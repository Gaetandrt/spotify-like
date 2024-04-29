import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function loadImage(imageUrl: string): Promise<File | null> {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    return file;
  } catch (error) {
    console.error("Failed to load image:", error);
    return null;
  }
}
