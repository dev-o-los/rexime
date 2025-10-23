"use client";

import { resumeColorAtom } from "@/app/store";
// import { resumeColorAtom } from "@/app/store"; // <-- Removed this import to fix the error
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSetAtom } from "jotai";
// import { useSetAtom } from "jotai"; // <-- Removed this import to fix the error

// 1. Define all your colors in a single array of objects.
// This makes it easy to add, remove, or change colors.
const resumeColors = [
  {
    value: "bg-gray-100", // The simple value to store
    label: "Gray",
    swatchClass: "border-gray-100 bg-gray-100", // The unique class for this swatch
  },
  {
    value: "bg-blue-500",
    label: "Blue",
    swatchClass: "border-blue-500 bg-blue-500",
  },
  {
    value: "bg-indigo-500",
    label: "Indigo",
    swatchClass: "border-indigo-500 bg-indigo-500",
  },
  {
    value: "bg-pink-500",
    label: "Pink",
    swatchClass: "border-pink-500 bg-pink-500",
  },
  {
    value: "bg-red-500",
    label: "Red",
    swatchClass: "border-red-500 bg-red-500",
  },
  {
    value: "bg-orange-500",
    label: "Orange",
    swatchClass: "border-orange-500 bg-orange-500",
  },
  {
    value: "bg-amber-500",
    label: "Amber",
    swatchClass: "border-amber-500 bg-amber-500",
  },
  {
    value: "bg-emerald-500",
    label: "Emerald",
    swatchClass: "border-emerald-500 bg-emerald-500",
  },
];

const getSwatchClassName = (swatchClass: string) => {
  const baseClasses = `size-6 shadow-none ${swatchClass}`;
  // "border-blue-500 bg-blue-500" -> "data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
  const checkedClasses = swatchClass
    .split(" ")
    .map((cls) => `data-[state=checked]:${cls}`)
    .join(" ");

  return `${baseClasses} ${checkedClasses}`;
};
export default function ColorPicker() {
  const setResumeColor = useSetAtom(resumeColorAtom);

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm leading-none font-medium text-foreground">
        Choose a color
      </legend>
      <RadioGroup
        className="flex gap-1.5"
        defaultValue={resumeColors[0].value}
        onValueChange={function (val) {
          console.log("Color changed to:", val);
          setResumeColor(val);
        }}
      >
        {resumeColors.map((color) => (
          <RadioGroupItem
            key={color.value}
            value={color.value}
            aria-label={color.label}
            className={getSwatchClassName(color.swatchClass)}
          />
        ))}
      </RadioGroup>
    </fieldset>
  );
}
