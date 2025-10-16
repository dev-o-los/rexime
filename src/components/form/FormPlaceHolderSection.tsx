import * as React from "react";
import AddNewItemDialog from "../dialogs/AddNewItemDialog";
import { FormHeading } from "./FormHeading";

export function FormPlaceHolderSection({
  heading,
  icon,
}: {
  heading: string;
  icon: React.ReactElement;
}) {
  return (
    <div>
      <FormHeading heading={heading} icon={icon} />
      <AddNewItemDialog id={heading.toLowerCase()} />
      <hr className="w-full mt-7" />
    </div>
  );
}
