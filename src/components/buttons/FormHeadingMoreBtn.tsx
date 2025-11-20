"use client";

import { openCustomEditorAtom } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAtom } from "jotai";
import { CgMoreVertical } from "react-icons/cg";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { VscEdit, VscEditorLayout } from "react-icons/vsc";

export default function FormHeadingMoreBtn({ id }: { id?: string }) {
  const [editorIsOpen, setEditorOpen] = useAtom(openCustomEditorAtom);

  const disabled = id !== "skills";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="secondary" size="icon">
          <CgMoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <VscEdit size={16} className="opacity-60" aria-hidden="true" />
          Edit Heading
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={disabled}
          onClick={() => {
            setEditorOpen(!editorIsOpen);
          }}
        >
          <VscEditorLayout
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
          Custom Editor
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">
          <MdOutlineRemoveCircleOutline
            size={16}
            color="red"
            className="opacity-60"
            aria-hidden="true"
          />
          Disable
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
