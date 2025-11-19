"use client";

import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { Toolbar } from "./Toolbar";

const TiptapEditor = ({
  content,
  onContentChange,
}: {
  content?: string;
  onContentChange: (html: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image.configure({
        inline: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
    ],
    content: content ?? "",
    editorProps: {
      attributes: {
        class: "tiptap-editor", // Use the class from globals.css
      },
    },
    onUpdate: ({ editor }) => {
      if (editor.isFocused) {
        onContentChange(editor.getHTML());
      }
    },

    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content ?? "");
    }
  }, [content, editor]);

  if (!editor) return null; // Prevent render before init
  return (
    <div className="text-white">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
