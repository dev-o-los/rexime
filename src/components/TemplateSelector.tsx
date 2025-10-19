"use client";
import { resumeAtom, resumeShowCaseIdxAtom } from "@/app/store";
import {
  mockBerlinData,
  sampleData,
  sampleDataAmsterDam,
  sampleDataTimeLine,
} from "@/lib/constants";
import { ResumeData } from "@/lib/resume-types";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { GrTemplate } from "react-icons/gr";
import { FormHeading } from "./form/FormHeading";

function ResumeImage({
  src,
  alt,
  onClick,
  isSel,
}: {
  src: string;
  alt: string;
  onClick: MouseEventHandler<HTMLImageElement>;
  isSel: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`h-52 rounded-lg cursor-pointer ${
        isSel && "border p-0.5 border-white"
      }`}
      height={400}
      width={200}
      onClick={onClick}
    />
  );
}

export default function TemplateSelector() {
  const [index, setIdx] = useAtom(resumeShowCaseIdxAtom);
  const setResume = useSetAtom(resumeAtom);
  const images = [
    { imagePath: "/resume-simple.png", defaultResume: sampleData },
    { imagePath: "/resume-berlin.jpg", defaultResume: mockBerlinData },
    { imagePath: "/resume-timeline.png", defaultResume: sampleDataTimeLine },
    { imagePath: "/resume-amsterdam.jpg", defaultResume: sampleDataAmsterDam },
  ];

  const handleClick = (index: number, resume: ResumeData) => {
    setIdx(index);
    setResume(resume);
  };

  return (
    <div>
      <FormHeading
        heading={"Templates"}
        icon={<GrTemplate />}
        showMore={false}
      />
      <div className="grid grid-cols-2 gap-3">
        {images.map((data, key) => (
          <ResumeImage
            isSel={index == key}
            key={key}
            src={data.imagePath}
            alt={data.imagePath.slice(1)}
            onClick={() => handleClick(key, data.defaultResume)}
          />
        ))}
      </div>
    </div>
  );
}
