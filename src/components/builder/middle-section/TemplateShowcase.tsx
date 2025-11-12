"use client";

import {
  resumeAtom,
  resumeShowCaseIdxAtom,
  selectedFontAtom,
} from "@/app/store";
import ResumeCreativeProfessional from "@/components/templates/ResumeCreativeProfessional";
import ResumeModernCorporate from "@/components/templates/ResumeModernCorporate";
import ResumeStudentEntry from "@/components/templates/ResumeStudentEntry";
import ResumeTechOriented from "@/components/templates/ResumeTechOriented";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Resume from "../../templates/Resume";
import { ResumeAmsterdam } from "../../templates/ResumeAmsterdam";
import { ResumeBerlin } from "../../templates/ResumeBerlin";
import { ResumeTimeLine } from "../../templates/ResumeTimeline";
import { ResumeControlBar } from "./ResumeControlBar";

export default function TemplateShowcase() {
  const data = useAtomValue(resumeAtom);
  const font = useAtomValue(selectedFontAtom);

  const resumeShowCaseIdx = useAtomValue(resumeShowCaseIdxAtom);
  const pdfRef = useRef<HTMLDivElement | null>(null);

  const resumes: Record<number, React.ReactElement> = {
    0: <Resume data={data} font={font} ref={pdfRef} />,
    1: <ResumeBerlin data={data} font={font} ref={pdfRef} />,
    2: <ResumeTimeLine data={data} font={font} ref={pdfRef} />,
    3: <ResumeAmsterdam data={data} font={font} ref={pdfRef} />,
    4: <ResumeCreativeProfessional data={data} font={font} ref={pdfRef} />,
    5: <ResumeModernCorporate data={data} font={font} ref={pdfRef} />,
    6: <ResumeTechOriented data={data} font={font} ref={pdfRef} />,
    7: <ResumeStudentEntry data={data} font={font} ref={pdfRef} />,
  };

  return (
    <div>
      <TransformWrapper
        initialScale={1}
        minScale={0.2}
        maxScale={3}
        centerOnInit={true}
        limitToBounds={false}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <div className="relative grid place-content-center">
            <ResumeControlBar pdfRef={pdfRef} />
            <TransformComponent>
              {resumes[resumeShowCaseIdx]}
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
}
