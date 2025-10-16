import Image from "next/image";

function ResumeImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-52 rounded-sm"
      height={400}
      width={200}
    />
  );
}

export default function TemplateSelector() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <ResumeImage src="/resume-simple.jpeg" alt="resume-simple" />
      <ResumeImage src="/resume-stylish.jpg" alt="resume-stylish" />
    </div>
  );
}
