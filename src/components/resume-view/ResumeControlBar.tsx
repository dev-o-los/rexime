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
import { toast } from "sonner";
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
    // 1. Get the DOM element from the ref.
    const element = elementRef.current;

    if (!element) {
      toast.success("Cannot find pdf file");
      return;
    }

    try {
      // 2. Use html2canvas-pro to capture the element.
      // We use a high scale for better resolution.
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale = better quality
        useCORS: true, // For external images
        logging: false, // Disables console logging from html2canvas
      });

      // 3. Get the image data and dimensions from the canvas.
      const imgData = canvas.toDataURL("image/png");
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // 4. Create a jsPDF instance for A4 size.
      // unit: 'mm', format: 'a4', orientation: 'portrait'
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // 5. Calculate dimensions to fit A4 width.
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate the aspect ratio
      const ratio = pdfWidth / canvasWidth;
      const imgHeight = canvasHeight * ratio; // Total height of the image in mm

      // 6. Add image, handling multiple pages if content is too long.
      let heightLeft = imgHeight;
      let position = 0; // Top Y-coordinate of the image on the PDF

      // Add the first page (or part of the image)
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add new pages as needed
      while (heightLeft > 0) {
        pdf.addPage();
        position -= pdfHeight; // Move the image "up" by one page height
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // 7. Save the PDF.
      pdf.save(fileName);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

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
        <ControlBtn
          onClick={async () => await generatePdfFromRef(pdfRef, "resume")}
          icon={<FaRegFilePdf />}
          tooltip={"Download pdf"}
        />
      </ButtonGroup>
    </div>
  );
}
