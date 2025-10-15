import { Form } from "@/components/ui/form";
import React from "react";
import { CgAwards } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { z } from "zod";
import { ResumeField } from "./FormField";
import { FormHeading } from "./FormHeading";
import { FormPlaceHolderSection } from "./FormPlaceHolderSection";
import FormTextArea from "./FormTextArea";
const schema = z.object({
  name: z.string().min(1, { message: "Please enter a name." }),
  age: z.coerce
    .number({ message: "Please enter a number." })
    .positive({ message: "Number must be positive." }),
});

export type Errors = Record<string, string | string[]>;

export async function submitForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const result = schema.safeParse(Object.fromEntries(formData as any));

  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return { errors: fieldErrors as Errors };
  }

  return {
    errors: {} as Errors,
  };
}

export function ResumeForm() {
  return (
    <Form>
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
            field="contact"
            nestedKey="email"
          />
          <ResumeField
            label="Website"
            placeholder="xyz.com"
            field="contact"
            nestedKey="website"
          />
        </div>

        <div className="flex gap-2">
          <ResumeField
            label="LinkedIn"
            placeholder="linkedin url"
            field="contact"
            nestedKey="linkedin"
          />
          <ResumeField
            label="Github"
            placeholder="github url"
            field="contact"
            nestedKey="github"
          />
        </div>

        <div className="flex gap-2">
          <ResumeField
            label="Phone"
            placeholder="+1 101010101"
            field="contact"
            nestedKey="phone"
          />
          <ResumeField
            label="Location"
            placeholder="Mars"
            field="contact"
            nestedKey="location"
          />
        </div>
      </div>

      <hr className="mt-5" />
      <FormTextArea field="summary" />
      <hr className="mt-5" />

      <FormPlaceHolderSection
        heading="ExtraCurricular"
        icon={<MdWorkOutline />}
      />
      <FormPlaceHolderSection
        heading="Education"
        icon={<MdAssuredWorkload />}
      />
      <FormPlaceHolderSection heading="Skills" icon={<SiHyperskill />} />
      <FormPlaceHolderSection heading="Awards" icon={<CgAwards />} />
      <FormPlaceHolderSection
        heading="Certications"
        icon={<PiCertificateLight />}
      />
      <FormPlaceHolderSection heading="Projects" icon={<GrProjects />} />
    </Form>
  );
}
