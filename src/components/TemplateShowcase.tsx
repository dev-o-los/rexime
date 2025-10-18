"use client";

import { resumeAtom, resumeShowCaseIdxAtom } from "@/app/store";
import { useAtomValue } from "jotai";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import Resume from "./templates/Resume";
import { ResumeBerlin } from "./templates/ResumeBerlin";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

export default function TemplateShowcase() {
  const data = useAtomValue(resumeAtom);
  const resumeShowCaseIdx = useAtomValue(resumeShowCaseIdxAtom);

  const resumes: Record<number, React.ReactElement> = {
    0: <Resume data={data} />,
    1: <ResumeBerlin data={data} />,
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
        <>
          {/* <Controls /> */}
          <TransformComponent>{resumes[resumeShowCaseIdx]}</TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
