import CreditsButton from "@/components/buttons/CreditsButton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { globalFetch } from "@/lib/payments/globalFetch";
import { cn } from "@/lib/utils";
import { ProductListResponse } from "dodopayments/resources/index.mjs";
import { CircleCheck } from "lucide-react";

export const dynamic = "force-dynamic"; // ⬅ disables static prerender

interface PlanDetails {
  buttonText: string;
  features: string[];
}

// console.log(products);

const extraDetails: Record<number, PlanDetails> = {
  0: {
    buttonText: "Get 5 credits now",
    features: [
      "5 AI-generated mindmaps",
      "Crisp, export-ready visuals",
      "Ideal for students or quick brainstorming",
    ],
  },
  1: {
    buttonText: "Get 15 credits now",
    features: [
      "15 AI-generated mindmaps",
      "Crisp, export-ready visuals",
      "Best value: 3x more maps for only 2x the price",
    ],
  },
  2: {
    buttonText: "Get 25 credits now",
    features: [
      "25 AI-generated mindmaps",
      "Exclusive priority queue",
      "Crisp, export-ready visuals",
      "Designed for professionals",
    ],
  },
};

export default async function Page() {
  const response = await globalFetch("/api/products");
  const products = (await response.json()) as ProductListResponse[];

  return (
    <div id="pricing" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
      <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">
        Pricing
      </h1>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {products.map((plan, idx) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 !rounded-xl":
                  idx == 1,
              }
            )}
          >
            {idx == 1 && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              ${(plan.price ?? 0) / 100}
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {extraDetails[idx].features.map((feature) => (
                <li key={feature} className="flex w-full items-center gap-2">
                  <CircleCheck className="size-4 text-green-600" />
                  <span className="text-[min(90%,750px)]">{feature}</span>
                </li>
              ))}
            </ul>
            <CreditsButton
              buttonText={extraDetails[idx].buttonText}
              isPopular={idx == 1}
              product={plan}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
