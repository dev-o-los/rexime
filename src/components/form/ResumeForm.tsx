import { GoPerson } from "react-icons/go";
import { FormHeading } from "./FormHeading";
import { ResumeField } from "./ResumeField";
import { ResumeSections } from "./ResumeSections";

export function ResumeForm() {
  return (
    <div>
      <div className="basics">
        <FormHeading heading="Basics" icon={<GoPerson />} showMore={false} />
        <ResumeField label="Full Name" placeholder="Enter name" field="name" />
        <ResumeField
          label="Title"
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
