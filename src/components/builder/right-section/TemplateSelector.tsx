"use client";
import {
  isEditedResumeAtom,
  resumeAtom,
  resumeShowCaseIdxAtom,
} from "@/app/store";
import {
  DUMMY_AMSTERDAM_DATA,
  DUMMY_BERLIN_DATA,
  DUMMY_MODERN_CORPORATE_DATA,
  DUMMY_STANDARD_DATA,
  DUMMY_STUDENT_ENTRY_DATA,
  DUMMY_TECH_ORIENTED_DATA,
  DUMMY_TIMELINE_DATA,
} from "@/lib/constants";
import { ResumeData } from "@/lib/resume-types";
import { updateResume } from "@/lib/supabase/createResume";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { GrTemplate } from "react-icons/gr";
import { ResumeHeading } from "../left-section/ResumeHeading";

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

export default function TemplateSelector({ id }: { id: string }) {
  const [index, setIdx] = useAtom(resumeShowCaseIdxAtom);
  const setResumeData = useSetAtom(resumeAtom);
  const isEditedResume = useAtomValue(isEditedResumeAtom);
  const images = [
    { imagePath: "/resume-simple.png", defaultResume: DUMMY_STANDARD_DATA },
    { imagePath: "/resume-berlin.jpg", defaultResume: DUMMY_BERLIN_DATA },
    { imagePath: "/resume-timeline.png", defaultResume: DUMMY_TIMELINE_DATA },
    { imagePath: "/resume-amsterdam.jpg", defaultResume: DUMMY_AMSTERDAM_DATA },
    {
      imagePath: "/resume-aetherfall.png",
      defaultResume: DUMMY_MODERN_CORPORATE_DATA,
    },
    {
      imagePath: "/resume-lumora.png",
      defaultResume: DUMMY_STUDENT_ENTRY_DATA,
    },
    {
      imagePath: "/resume-kyoto.jpg",
      defaultResume: DUMMY_TECH_ORIENTED_DATA,
    },
  ];

  const handleClick = async (index: number, resume: ResumeData) => {
    if (!isEditedResume) {
      setResumeData(resume);
    }
    setIdx(index);
    await updateResume(id, {
      image: images[index].imagePath,
    });
  };

  return (
    <div>
      <ResumeHeading
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
            onClick={async () => await handleClick(key, data.defaultResume)}
          />
        ))}
      </div>
    </div>
  );
}
