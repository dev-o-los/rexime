"use client";

import { signOutGooogle } from "@/lib/actions";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { toastManager } from "../ui/toast";

export function SignOutButton() {
  return (
    <DropdownMenuItem
      variant="destructive"
      className="text-destructive cursor-pointer"
      onClick={() => {
        try {
          signOutGooogle();
        } catch (error) {
          toastManager.add({
            title: (error as Error).message,
            type: "error",
          });
        }
      }}
    >
      Sign out
    </DropdownMenuItem>
  );
}
