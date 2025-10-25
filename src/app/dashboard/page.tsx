import { TiltCard } from "@/components/cards/ResumeCard";
import { IoAddOutline } from "react-icons/io5";
import { ibmplexmono } from "../fonts";

export default function Page() {
  return (
    <div className="p-12 flex flex-wrap gap-4">
      <TiltCard className="">
        <div className="pl-16">
          <IoAddOutline size={70} />
        </div>
        <div>
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
      <TiltCard imageUrl="/resume-simple.png">
        <div className="text-center"></div>
      </TiltCard>
    </div>
  );
}
