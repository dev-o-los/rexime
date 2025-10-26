import { SearchIcon } from "lucide-react";
import { useId } from "react";

import { ibmplexmono } from "@/app/fonts";
import { Input } from "@/components/ui/input";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";
import RightNavBarContent from "./RightNavBarContent";

export default function NashBarDash() {
  const id = useId();

  return (
    <header className="border-b px-4 md:px-6 backdrop-blur-3xl">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className={`flex-1 tracking-wider ${ibmplexmono.className}`}>
          Rexime
        </div>
        {/* Middle area */}
        <div className="grow max-sm:hidden">
          {/* Search form */}
          <div className="relative mx-auto w-full max-w-xs">
            <Input
              id={id}
              className="peer h-8 px-8"
              placeholder="Search..."
              type="search"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/80 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
              <kbd className="inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <RightNavBarContent />
          <ThemeToggleBtn />
        </div>
      </div>
    </header>
  );
}
