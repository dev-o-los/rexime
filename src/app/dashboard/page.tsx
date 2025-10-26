import { TiltCard } from "@/components/cards/ResumeCard";
import NashBarDash from "@/components/navbar/NavBarDash";
import { IoAddOutline } from "react-icons/io5";
import { ibmplexmono } from "../fonts";

export default function Page() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NashBarDash />
      </div>
      <div className="p-7 flex flex-wrap gap-4">
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
          <h1
            className={`text-center text-xl font-semibold ${ibmplexmono.className}`}
          >
            Google
          </h1>
        </TiltCard>
      </div>
    </div>
  );
}
