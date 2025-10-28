import { createClient } from "@/lib/server";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SignOutButton } from "./SignOutButton";

export async function UserInfoButton() {
  const supabase = await createClient();
  const session = await supabase.auth.getUser();
  const user = session.data.user;

  const userName = user?.user_metadata.full_name ?? "Username";
  const imgUrl =
    user?.user_metadata.avatar_url ??
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kLWljb24gbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=";

  const credits = 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-0 rounded-lg py-0 ps-0 dark:bg-white dark:text-black"
        >
          <div className="me-0.5 flex aspect-square h-full p-1.5">
            <Image
              className="h-auto w-full rounded-full"
              src={imgUrl}
              alt="Profile image"
              width={24}
              height={24}
              aria-hidden="true"
            />
          </div>
          {userName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1">
        <DropdownMenuItem className="flex justify-between">
          <span>Credits</span>
          <span>{credits ?? "Error"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/plans">Donate project</Link>
        </DropdownMenuItem>
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
