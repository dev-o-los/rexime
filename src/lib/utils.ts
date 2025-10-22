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
