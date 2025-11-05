"use client";

import { selectedDonationAmountAtom } from "@/app/store"; // <-- create this atom
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSetAtom } from "jotai";
import { useId } from "react";

export default function DonationAmountSelection() {
  const id = useId();
  const setDonationAmount = useSetAtom(selectedDonationAmountAtom);

  const items = [
    { value: "1", label: "$1", amount: 1 },
    { value: "2", label: "$2", amount: 2 },
    { value: "3", label: "$5", amount: 5 },
    { value: "4", label: "$10", amount: 10 },
    { value: "5", label: "$20", amount: 20 },
    { value: "6", label: "$50", amount: 50 },
  ];

  return (
    <fieldset className="mt-7">
      <RadioGroup className="grid grid-cols-2 gap-2" defaultValue={"1"}>
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            onClick={() => setDonationAmount(item.amount)}
            className="relative grid place-content-center h-[10vh] items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="after:absolute after:inset-0"
              />
              <Label
                htmlFor={`${id}-${item.value}`}
                className="text-base font-medium"
              >
                {item.label}
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
