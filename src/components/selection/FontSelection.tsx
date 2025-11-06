"use client";

import { useId } from "react";

import {
  ebGaramond,
  ibmplexmono,
  inter,
  lato,
  merriweather,
  montserrat,
  openSans,
  playfair,
  raleway,
  roboto,
  serif,
  sourceSans3,
} from "@/app/fonts";
import { selectedFontAtom } from "@/app/store";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSetAtom } from "jotai";

export default function FontSelection() {
  const id = useId();
  const setSelectedFont = useSetAtom(selectedFontAtom);

  const items = [
    // --- Generic Tailwind Fonts ---
    { value: "1", label: "Font Serif", font: "font-serif" },
    { value: "2", label: "Font Sans", font: "font-sans" },

    { value: "3", label: "Roboto", font: roboto.className },
    { value: "4", label: "Inter", font: inter.className },
    { value: "5", label: "Playfair Display", font: playfair.className },
    { value: "6", label: "PT Serif", font: serif.className },
    { value: "7", label: "IBM Plex Mono", font: ibmplexmono.className },

    // --- New popular resume fonts ---
    { value: "8", label: "Lato", font: lato.className },
    { value: "9", label: "Montserrat", font: montserrat.className },
    { value: "10", label: "Merriweather", font: merriweather.className },
    { value: "11", label: "Open Sans", font: openSans.className },
    { value: "12", label: "Raleway", font: raleway.className },
    { value: "13", label: "EB Garamond", font: ebGaramond.className },
    { value: "14", label: "Source Sans 3", font: sourceSans3.className },
  ];

  return (
    <fieldset className="space-y-4">
      <RadioGroup className="grid grid-cols-2 gap-2" defaultValue={"1"}>
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            onClick={() => setSelectedFont(item.font)}
            className="relative grid place-content-center h-[10vh] items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="after:absolute after:inset-0"
              />
              <Label htmlFor={`${id}-${item.value}`} className={item.font}>
                {item.label}
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
