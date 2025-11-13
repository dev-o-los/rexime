import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmptyObject(obj: Record<string, any>): boolean {
  return Object.values(obj).every(
    (val) => val === "" || val === "0" || val === undefined || val === null
  );
}

export const isDiffDialog = (id: string) =>
  id === "skills" || id === "languages" || id == "achievements";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const isNotEditorEmpty = (html?: string) => {
  if (!html) return true;
  const clean = html
    .replace(/\s+/g, "") // remove whitespace
    .replace(/<p><br><\/p>/g, "") // remove <p><br></p>
    .replace(/<p><\/p>/g, ""); // remove empty <p></p>
  return clean.length !== 0;
};
