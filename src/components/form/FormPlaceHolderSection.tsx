import * as React from "react";
import AddNewItemDialog from "../dialogs/AddNewItemDialog";
import ItemTileDialog from "../dialogs/ItemTileDialog";
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
      <ItemTileDialog />
      <div className="mb-5"></div>
      <AddNewItemDialog id={heading.toLowerCase()} />
      <hr className="w-full mt-7 mb-4" />
    </div>
  );
}
