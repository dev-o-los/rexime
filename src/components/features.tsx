import {
  FileText,
  LayoutDashboard,
  Palette,
  Type,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Real-Time Editing",
    description:
      "Instantly see your changes reflected in your resume. Update details and preview them live in real-time.",
  },
  {
    icon: Palette,
    title: "Custom Themes & Colors",
    description:
      "Personalize your resume with beautiful color palettes and modern templates to match your professional vibe.",
  },
  {
    icon: Type,
    title: "Font Variety",
    description:
      "Choose from a wide range of elegant and professional font faces to make your resume stand out.",
  },
  {
    icon: FileText,
    title: "Smart Resume Layouts",
    description:
      "Multiple layout options — from minimalist to creative — built to impress recruiters and optimize readability.",
  },
  // {
  //   icon: Download,
  //   title: "One-Click PDF Export",
  //   description:
  //     "Download your resume as a polished PDF instantly with pixel-perfect formatting and no design breakage.",
  // },
  {
    icon: Zap,
    title: "Lightning-Fast & Reactive",
    description:
      "Experience a smooth and responsive interface powered by React — no reloads, no delays, just pure productivity.",
  },
  {
    icon: Users,
    title: "User-Friendly Design",
    description:
      "An intuitive interface built for everyone — from students crafting their first resume to professionals refining their next opportunity.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          Your Resume, Reimagined — Fast, Simple, Beautiful
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
