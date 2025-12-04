import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { RefObject } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import {
  MdCenterFocusWeak,
  MdOutlineZoomInMap,
  MdOutlineZoomOutMap,
} from "react-icons/md";
import { useControls } from "react-zoom-pan-pinch";
import { toastManager } from "../../ui/toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

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

export function ResumeControlBar({
  pdfRef,
}: {
  pdfRef: RefObject<HTMLDivElement | null>;
}) {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  const generatePdfFromRef = async (
    elementRef: RefObject<HTMLDivElement | null>,
    fileName: string
  ): Promise<void> => {
    try {
      const element = elementRef.current;
      if (!element) {
        toastManager.add({
          title: "Cannot find resume element to export",
          type: "error",
        });
        return;
      }

      // -----------------------
      // 1️⃣ Clone the element
      // -----------------------
      const clone = element.cloneNode(true) as HTMLDivElement;

      // Create a hidden fixed A4 wrapper
      const wrapper = document.createElement("div");
      wrapper.style.position = "fixed";
      wrapper.style.left = "-9999px";
      wrapper.style.top = "0";
      wrapper.style.width = "794px"; // A4 width in px at 96 DPI
      wrapper.style.height = "1123px"; // A4 height in px at 96 DPI
      wrapper.style.overflow = "hidden";
      wrapper.style.background = "#fff";

      // Make sure cloned content fits perfectly inside A4
      clone.style.width = "100%";
      clone.style.height = "100%";
      clone.style.transform = "scale(1)";
      clone.style.transformOrigin = "top left";

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // -----------------------
      // 2️⃣ Capture as image
      // -----------------------
      const canvas = await html2canvas(wrapper, {
        scale: 2, // for high quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      // Cleanup
      document.body.removeChild(wrapper);

      // -----------------------
      // 3️⃣ Prepare image for PDF
      // -----------------------
      const imgData = canvas.toDataURL("image/png");

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      // Add image to fill A4 exactly
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // -----------------------
      // 4️⃣ Save file
      // -----------------------
      pdf.save(fileName);
    } catch (error) {
      // console.error(error);
      toastManager.add({
        title: "Failed to generate PDF",
        type: "error",
      });
    }
  };

  return (
    <div className="flex absolute z-10 max-sm:top-[85dvh] top-[88dvh] left-[32%] flex-col items-start gap-8">
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
        <ControlBtn
          onClick={async () => await generatePdfFromRef(pdfRef, "resume")}
          icon={<FaRegFilePdf />}
          tooltip={"Download pdf"}
        />
      </ButtonGroup>
    </div>
  );
}
