import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function SkillSlider({
  level,
  onValueChange,
}: {
  level: number;
  onValueChange: (value: number) => void;
}) {
  const max = 4;
  const skipInterval = 1; // Set to 1 to allow no text skipping
  const ticks = [...Array(max + 1)].map((_, i) => i);

  return (
    <div className="*:not-first:mt-4">
      <div className="pt-2"></div>
      <Label>Confidence Level</Label>
      <div>
        <Slider
          defaultValue={[level]}
          max={max}
          onValueChange={(val) => onValueChange(val[0])}
          aria-label="Slider with ticks"
        />
        <span
          className="mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium text-muted-foreground"
          aria-hidden="true"
        >
          {ticks.map((_, i) => (
            <span
              key={i}
              className="flex w-0 flex-col items-center justify-center gap-2"
            >
              <span
                className={cn(
                  "h-1 w-px bg-muted-foreground/70",
                  (i + 1) % skipInterval !== 0 && "h-0.5"
                )}
              />
              <span className={cn(i % skipInterval !== 0 && "opacity-0")}>
                {i + 1}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
