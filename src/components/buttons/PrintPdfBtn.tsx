"use client";
import { Button } from "../ui/button";

export function PrintPdfBtn() {
  function printDiv() {
    const printContents = document.getElementById("resume-section")?.innerHTML;
    if (!printContents) return;

    const originalContents = document.body.innerHTML;

    // Replace body content with the specific div content
    document.body.innerHTML = printContents;

    window.print();

    // Restore original page content
    document.body.innerHTML = originalContents;

    // Optional: reload React app to restore JS functionality
    window.location.reload();
  }

  return (
    <Button className="w-full mb-4" onClick={printDiv}>
      Print PDF
    </Button>
  );
}
