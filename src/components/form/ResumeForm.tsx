import { CgAwards } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { FormHeading } from "./FormHeading";
import { FormPlaceHolderSection } from "./FormPlaceHolderSection";
import FormTextArea from "./FormTextArea";
import { ResumeField } from "./ResumeField";

export function ResumeForm() {
  return (
    <div>
      <div className="basics">
        <FormHeading heading="Basics" icon={<GoPerson />} />
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

      <hr className="mt-5" />
      <FormTextArea field="summary" />
      <hr className="mt-5" />

      <FormPlaceHolderSection heading="Experience" icon={<MdWorkOutline />} />
      <FormPlaceHolderSection
        heading="Education"
        icon={<MdAssuredWorkload />}
      />
      <FormPlaceHolderSection heading="Skills" icon={<SiHyperskill />} />
      <FormPlaceHolderSection heading="Projects" icon={<GrProjects />} />
      <FormPlaceHolderSection heading="Awards" icon={<CgAwards />} />
      <FormPlaceHolderSection
        heading="Certifications"
        icon={<PiCertificateLight />}
      />
      <FormPlaceHolderSection
        heading="ExtraCurricular"
        icon={<MdWorkOutline />}
      />
    </div>
  );
}
