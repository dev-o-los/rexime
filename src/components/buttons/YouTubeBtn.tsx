"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { Button } from "../ui/button";

export default function YouTubeBtn() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger button in navbar */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full p-6 bg-transparent backdrop-blur-2xl text-base shadow-none"
        >
          <BsYoutube className="h-5! w-5!" /> Watch Demo
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent className="sm:max-w-3xl p-0">
        <DialogHeader>
          <DialogTitle className="px-4 pt-4">Rexime Demo</DialogTitle>
        </DialogHeader>

        <div className="aspect-video w-full">
          {open && (
            <iframe
              className="w-full h-full rounded-b-lg"
              src="https://www.youtube.com/embed/i1Hqv9Sh7mo?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
