import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function TiptapHTML({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const finalClasses = twMerge(
    clsx(
      "text-xs", // This is now the default
      "text-gray-600",
      "tiptap",
      className // Your prop can now override 'text-xs'
    )
  );

  return (
    <div className={finalClasses} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
