import { TiltCard } from "@/components/cards/TiltCard";
import NashBarDash from "@/components/navbar/NavBarDash";
import ResumeList from "@/components/resume-dash/ResumeList";
import { Plus } from "lucide-react";
import { ibmplexmono } from "../fonts";

export default function Page() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NashBarDash />
      </div>
      <div
        className="
        p-7
        grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
        "
      >
        <TiltCard>
          <div>
            <div className="text-center ml-[37%]">
              <Plus size={60} />
            </div>
            <h2
              className={`text-lg font-semibold text-center mb-1 ${ibmplexmono.className}`}
            >
              Build Your Resume
            </h2>

            <p
              className={`text-gray-400 text-center text-xs ${ibmplexmono.className}`}
            >
              Design a resume that stands out to recruiters.
            </p>
          </div>
        </TiltCard>

        <ResumeList />
      </div>
    </div>
  );
}
