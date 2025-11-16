"use client";
import {
  isEditedResumeAtom,
  resumeAtom,
  resumeShowCaseIdxAtom,
} from "@/app/store";
import { resumes } from "@/lib/constants";
import { mergeResumes } from "@/lib/mergeResumes";
import { ResumeData } from "@/lib/resume-types";
import { updateResume } from "@/lib/supabase/createResume";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { MouseEventHandler, useEffect } from "react";
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
  const [resume, setResumeData] = useAtom(resumeAtom);
  const isEditedResume = useAtomValue(isEditedResumeAtom);

  useEffect(() => {
    const index = resumes.findIndex(
      (item) => item.imagePath === resume.dummyimage
    );

    setIdx(index === -1 ? 0 : index);
  }, []);

  const handleClick = async (index: number, newResume: ResumeData) => {
    if (!isEditedResume) {
      setResumeData(newResume);
    } else {
      const mergeResume = mergeResumes(resume, newResume);
      setResumeData(mergeResume);
    }
    setIdx(index);
    await updateResume(id, {
      image: resumes[index].imagePath,
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
        {resumes.map((data, key) => (
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
