"use client";

import { resumeAtom } from "@/app/store";
import { useAtomValue } from "jotai";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import Resume from "./templates/Resume";

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

export default function TemplateSelector() {
  const data = useAtomValue(resumeAtom);

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
          <TransformComponent>
            <Resume data={data} />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
