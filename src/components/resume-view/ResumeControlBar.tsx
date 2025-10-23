import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { FaRegFilePdf } from "react-icons/fa6";
import {
  MdCenterFocusWeak,
  MdOutlineZoomInMap,
  MdOutlineZoomOutMap,
} from "react-icons/md";
import { useControls } from "react-zoom-pan-pinch";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function ControlBtn({
  icon,
  tooltip,
  onClick,
}: {
  icon: React.ReactElement;
  tooltip: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="text-gray-300 text-xs">
        <Button variant="secondary" size="default" onClick={onClick}>
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export function ResumeControlBar() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="flex absolute z-10 top-[90dvh] left-[35%] flex-col items-start gap-8">
      <ButtonGroup>
        <ControlBtn
          onClick={() => zoomIn()}
          icon={<MdOutlineZoomInMap />}
          tooltip={"Zoom in"}
        />
        <ControlBtn
          onClick={() => zoomOut()}
          icon={<MdOutlineZoomOutMap />}
          tooltip={"Zoom out"}
        />
        <ControlBtn
          onClick={() => resetTransform()}
          icon={<MdCenterFocusWeak />}
          tooltip={"Re center"}
        />
        <ControlBtn icon={<FaRegFilePdf />} tooltip={"Download pdf"} />
      </ButtonGroup>
    </div>
  );
}
