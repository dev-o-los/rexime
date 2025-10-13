"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import * as React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
const schema = z.object({
  name: z.string().min(1, { message: "Please enter a name." }),
  age: z.coerce
    .number({ message: "Please enter a number." })
    .positive({ message: "Number must be positive." }),
});

type Errors = Record<string, string | string[]>;

async function submitForm(event: React.FormEvent<HTMLFormElement>) {
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

function FormHeading({
  heading,
  icon,
}: {
  heading: string;
  icon: React.ReactElement;
}) {
  return (
    <div className="flex items-center mb-4 mt-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="text-xl">{icon}</div>``
        <h1 className="text-3xl font-semibold">{heading}</h1>
      </div>
      <Button className="rounded-full" variant="secondary" size="icon">
        <IoMdClose />
      </Button>
    </div>
  );
}
function FormPlaceHolderSection({
  heading,
  icon,
}: {
  heading: string;
  icon: React.ReactElement;
}) {
  return (
    <div>
      <FormHeading heading={heading} icon={icon} />
      <Button variant="outline" className="w-full p-6">
        Add a new item
      </Button>
      <hr className="w-full mt-7" />
    </div>
  );
}
export function ResumeForm() {
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});
  const handleClearErrors = (next: Errors) => setErrors(next);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formEl = event.currentTarget;
    setLoading(true);
    const response = await submitForm(event);
    await new Promise((r) => setTimeout(r, 800));
    setErrors(response.errors);
    setLoading(false);
    if (Object.keys(response.errors).length === 0) {
      const formData = new FormData(formEl);
      alert(
        `Name: ${String(formData.get("name") || "")}\nAge: ${String(
          formData.get("age") || ""
        )}`
      );
    }
  };

  return (
    <Form errors={errors} onClearErrors={handleClearErrors} onSubmit={onSubmit}>
      <div className="basics">
        <FormHeading heading="Basics" icon={<GoPerson />} />
        <Field name="name">
          <FieldLabel>Full Name</FieldLabel>
          <FieldControl placeholder="Enter name" disabled={loading} />
          <FieldError />
        </Field>
        <Field name="headline">
          <FieldLabel>Headline</FieldLabel>
          <FieldControl placeholder="awesome headline" disabled={loading} />
          <FieldError />
        </Field>
        <div className="flex gap-2">
          <Field name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl placeholder="email@gmail.com" disabled={loading} />
            <FieldError />
          </Field>
          <Field name="website">
            <FieldLabel>Website</FieldLabel>
            <FieldControl placeholder="xyz.com" disabled={loading} />
            <FieldError />
          </Field>
        </div>
        <div className="flex gap-2">
          <Field name="phone">
            <FieldLabel>Phone</FieldLabel>
            <FieldControl placeholder="+1 101010101" disabled={loading} />
            <FieldError />
          </Field>
          <Field name="location">
            <FieldLabel>Location</FieldLabel>
            <FieldControl placeholder="mars" disabled={loading} />
            <FieldError />
          </Field>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="summary">
        <FormHeading heading="Summary" icon={<BsTextParagraph />} />
        <Textarea className="h-32" placeholder="Write about yourself" />
      </div>
      <hr className="mt-5" />
      <FormPlaceHolderSection heading="Profile" icon={<BsTextParagraph />} />
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
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
    </Form>
  );
}
