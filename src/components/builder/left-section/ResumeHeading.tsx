// import { CgMoreVertical } from "react-icons/cg";

import FormHeadingMoreBtn from "../../buttons/FormHeadingMoreBtn";

export function ResumeHeading({
  heading,
  icon,
  showMore = true,
  extraBtn,
}: {
  heading: string;
  icon: React.ReactElement;
  extraBtn?: React.ReactElement;
  showMore?: boolean;
}) {
  return (
    <div className="flex items-center mb-4 mt-2 justify-between">
      <div className="flex items-center gap-3">
        <div className="text-xl">{icon}</div>
        <h1 className="text-3xl font-semibold">{heading}</h1>
      </div>
      {showMore && <FormHeadingMoreBtn />}
      {extraBtn}
    </div>
  );
}
