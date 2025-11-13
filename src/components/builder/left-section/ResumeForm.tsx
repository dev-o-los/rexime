import { GoPerson } from "react-icons/go";
import { ResumeField } from "../../inputs/ResumeField";
import { ResumeHeading } from "./ResumeHeading";
import { ResumeSections } from "./ResumeSections";
import { Button } from "@/components/ui/button";
import { RiAiGenerate2 } from "react-icons/ri";

export function ResumeForm() {
  return (
    <div>
      <div className="basics">
        <ResumeHeading
          heading="Basics"
          icon={<GoPerson />}
          showMore={false}
          extraBtn={
            <Button size="sm" variant="secondary">
              <RiAiGenerate2 /> Generate With AI
            </Button>
          }
        />
        <ResumeField label="Full Name" placeholder="Enter name" field="name" />
        <ResumeField
          label="Headline"
          placeholder="Awesome headline"
          field="title"
        />

        <div className="flex gap-2">
          <ResumeField
            label="Email"
            placeholder="email@gmail.com"
            field="email"
          />
          <ResumeField label="Website" placeholder="xyz.com" field="website" />
        </div>

        <div className="flex gap-2">
          <ResumeField
            label="LinkedIn"
            placeholder="linkedin url"
            field="linkedin"
          />
          <ResumeField label="Github" placeholder="github url" field="github" />
        </div>

        <div className="flex gap-2">
          <ResumeField label="Phone" placeholder="+1 101010101" field="phone" />
          <ResumeField label="Location" placeholder="Mars" field="location" />
        </div>
      </div>

      <ResumeSections />
    </div>
  );
}
