"use client";

import { resumeAtom, resumeShowCaseIdxAtom } from "@/app/store";
import { useAtomValue } from "jotai";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import Resume from "../templates/Resume";
import { ResumeAmsterdam } from "../templates/ResumeAmsterdam";
import { ResumeBerlin } from "../templates/ResumeBerlin";
import { ResumeTimeLine } from "../templates/ResumeTimeline";
import { Button } from "../ui/button";
import { ResumeControlBar } from "./ResumeControlBar";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools absolute z-10">
      <Button onClick={() => zoomIn()}>+</Button>
      <Button onClick={() => zoomOut()}>-</Button>
      <Button onClick={() => resetTransform()}>x</Button>
    </div>
  );
};

export default function TemplateShowcase() {
  const data = useAtomValue(resumeAtom);
  const resumeShowCaseIdx = useAtomValue(resumeShowCaseIdxAtom);

  const resumes: Record<number, React.ReactElement> = {
    0: <Resume data={data} />,
    1: <ResumeBerlin data={data} />,
    2: <ResumeTimeLine data={data} />,
    3: <ResumeAmsterdam data={data} />,
  };

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.2}
      maxScale={3}
      centerOnInit={true}
      limitToBounds={false}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div className="relative">
          <ResumeControlBar />
          <TransformComponent>{resumes[resumeShowCaseIdx]}</TransformComponent>
        </div>
      )}
    </TransformWrapper>
  );
}
