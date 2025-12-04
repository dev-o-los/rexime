"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SpinnerDotted } from "spinners-react";
import { ibmplexmono } from "../fonts";

export default function Loading() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a fallback loader
  }

  return (
    <div
      className={`${ibmplexmono.className} text-center flex flex-col h-screen justify-center items-center`}
    >
      <SpinnerDotted
        className=""
        size="9rem"
        color={theme === "dark" ? "white" : "black"}
      />

      <span className="mt-7">Loading dashboard, please wait...</span>
    </div>
  );
}
