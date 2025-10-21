import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { RiQuestionLine } from "react-icons/ri";
import { Field, FieldControl, FieldLabel } from "../ui/field";
import { Tooltip } from "../ui/tooltip";

export function DialogField({
  label,
  name,
  placeholder,
  value,
  optional = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  value?: string | undefined;
  optional?: boolean;
}) {
  return (
    <Field name={name} className="w-full">
      <div className="flex items-center gap-2">
        <FieldLabel>{label}</FieldLabel>
        {optional && (
          <Tooltip>
            <TooltipTrigger className="text-gray-300 text-xs">
              <RiQuestionLine />
            </TooltipTrigger>
            <TooltipContent>
              <p>Optional field</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <FieldControl placeholder={placeholder} defaultValue={value} />
    </Field>
  );
}
