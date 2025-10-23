import { useId } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FontSelection() {
  const id = useId();

  const items = [
    { value: "1", label: "Roboto" },
    { value: "2", label: "Inter" },
    { value: "3", label: "Playfair" },
  ];

  return (
    <fieldset className="space-y-4">
      {/* <legend className="text-sm leading-none font-medium text-foreground">
        Server location
      </legend> */}
      <RadioGroup className="grid grid-cols-2 gap-2" defaultValue="1">
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            className="relative grid place-content-center h-[10vh] items-start gap-4 rounded-md border border-input p-3 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="after:absolute after:inset-0"
              />
              <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
