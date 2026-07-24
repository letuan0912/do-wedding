"use client";

import { useEffect } from "react";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";

import { toast } from "sonner";

import Toolbar from "./Toolbar";
import { editorExtensions } from "./extensions";

import "./styles.css";

interface RichEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  editable?: boolean;
}

export default function RichEditor({
  value,
  onChange,
  placeholder = "Nhập nội dung...",
  editable = true,
}: RichEditorProps) {
  const editor = useEditor({
    extensions: editorExtensions,

    editable,

    content: value,

    immediatelyRender: false,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },

    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none min-h-[220px] focus:outline-none",
      },
    },
  });

  const uploadImage = async (
    file: File
  ) => {
    const formData = new FormData();

    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        toast.error("Upload ảnh thất bại");
        return null;
      }

      return data.url as string;
    } catch (error) {
      console.error(error);

      toast.error("Upload ảnh thất bại");

      return null;
    }
  };

  useEffect(() => {
    if (!editor) return;

    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "", {
        emitUpdate: false,
      });
    }
  }, [value, editor]);

  useEffect(() => {
    if (!editor) return;

    editor.setEditable(editable);
  }, [editable, editor]);

  useEffect(() => {
    if (!editor) return;

    editor.extensionManager.extensions.forEach(
      (extension) => {
        if (
          extension.name === "placeholder"
        ) {
          extension.options.placeholder =
            placeholder;
        }
      }
    );
  }, [editor, placeholder]);

  useEffect(() => {
    if (!editor) return;

    const dom = editor.view.dom;

    const handlePaste = async (
      e: ClipboardEvent
    ) => {
      const items =
        e.clipboardData?.items;

      if (!items) return;

      for (const item of items) {
        if (
          !item.type.startsWith("image/")
        )
          continue;

        e.preventDefault();

        const file =
          item.getAsFile();

        if (!file) return;

        const url =
          await uploadImage(file);

        if (!url) return;

        editor
          .chain()
          .focus()
          .setImage({
            src: url,
          })
          .run();
      }
    };

    const handleDrop = async (
      e: DragEvent
    ) => {
      const files = Array.from(
        e.dataTransfer?.files ?? []
      );

      const image = files.find((file) =>
        file.type.startsWith("image/")
      );

      if (!image) return;

      e.preventDefault();

      const url =
        await uploadImage(image);

      if (!url) return;

      editor
        .chain()
        .focus()
        .setImage({
          src: url,
        })
        .run();
    };

    dom.addEventListener(
      "paste",
      handlePaste
    );

    dom.addEventListener(
      "drop",
      handleDrop
    );

    return () => {
      dom.removeEventListener(
        "paste",
        handlePaste
      );

      dom.removeEventListener(
        "drop",
        handleDrop
      );
    };
  }, [editor]);

    if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[220px] p-5"
      />
    </div>
  );
}