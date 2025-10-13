"use client";

import { signOutGooogle } from "@/lib/actions";
import { toast } from "sonner";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export function SignOutButton() {
  return (
    <DropdownMenuItem
      className="text-destructive cursor-pointer"
      onClick={() => {
        try {
          signOutGooogle();
        } catch (error) {
          toast.error((error as Error).message);
        }
      }}
    >
      Sign out
    </DropdownMenuItem>
  );
}
