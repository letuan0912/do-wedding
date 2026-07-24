"use client";

import { useRef, useState } from "react";

import { Editor } from "@tiptap/react";
import { toast } from "sonner";

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo2,
  Redo2,
  Link2,
  Image as ImageIcon,
  ImagePlus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Highlighter,
  Code,
  Minus,
  Eraser,
  Table as TableIcon,
  Rows3,
  Columns3,
  Trash2,
  Play,

} from "lucide-react";

import MenuButton from "./MenuButton";

interface ToolbarProps {
  editor: Editor | null;
}

export default function Toolbar({
  editor,
}: ToolbarProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  if (!editor) return null;

  const setLink = () => {
    const previousUrl =
      editor.getAttributes("link").href;

    const url = window.prompt(
      "Nhập đường dẫn",
      previousUrl
    );

    if (url === null) return;

    if (url === "") {
      editor
        .chain()
        .focus()
        .unsetLink()
        .run();

      return;
    }

    editor
      .chain()
      .focus()
      .setLink({
        href: url,
      })
      .run();
  };
    const addImage = () => {
    const url = window.prompt(
      "Nhập URL hình ảnh"
    );

    if (!url) return;

    editor
      .chain()
      .focus()
      .setImage({
        src: url,
      })
      .run();
  };

  const uploadImage = async (
    file: File
  ) => {
    const formData = new FormData();

    formData.append("file", file);

    try {
      setUploading(true);

      const res = await fetch(
        "/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!data.success) {
        toast.error(
          "Upload thất bại"
        );
        return;
      }

      editor
        .chain()
        .focus()
        .setImage({
          src: data.url,
        })
        .run();

      toast.success(
        "Đã tải ảnh"
      );
    } catch (err) {
      console.error(err);

      toast.error(
        "Upload thất bại"
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <>      <input
        hidden
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={async (e) => {
          const files = Array.from(
            e.target.files ?? []
          );

          if (!files.length) return;

          for (const file of files) {
            await uploadImage(file);
          }

          e.target.value = "";
        }}
      />

      <div className="flex flex-wrap gap-2 border-b border-gray-200 bg-gray-50 p-3">
        {/* Undo / Redo */}

        <MenuButton
          title="Hoàn tác"
          icon={<Undo2 size={18} />}
          onClick={() =>
            editor.chain().focus().undo().run()
          }
        />

        <MenuButton
          title="Làm lại"
          icon={<Redo2 size={18} />}
          onClick={() =>
            editor.chain().focus().redo().run()
          }
        />

        <div className="mx-1 w-px bg-gray-300" />

        {/* Text */}

        <MenuButton
          title="Đậm"
          active={editor.isActive("bold")}
          icon={<Bold size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
        />

        <MenuButton
          title="Nghiêng"
          active={editor.isActive("italic")}
          icon={<Italic size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
        />

        <MenuButton
          title="Gạch chân"
          active={editor.isActive("underline")}
          icon={<Underline size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleUnderline()
              .run()
          }
        />

        <MenuButton
          title="Gạch ngang"
          active={editor.isActive("strike")}
          icon={<Strikethrough size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
        />

        <div className="mx-1 w-px bg-gray-300" />        {/* Heading */}

        <MenuButton
          title="Tiêu đề 1"
          active={editor.isActive("heading", {
            level: 1,
          })}
          icon={<Heading1 size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 1,
              })
              .run()
          }
        />

        <MenuButton
          title="Tiêu đề 2"
          active={editor.isActive("heading", {
            level: 2,
          })}
          icon={<Heading2 size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
        />

        <MenuButton
          title="Tiêu đề 3"
          active={editor.isActive("heading", {
            level: 3,
          })}
          icon={<Heading3 size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 3,
              })
              .run()
          }
        />

        <div className="mx-1 w-px bg-gray-300" />

        {/* List */}

        <MenuButton
          title="Danh sách"
          active={editor.isActive("bulletList")}
          icon={<List size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          }
        />

        <MenuButton
          title="Danh sách số"
          active={editor.isActive("orderedList")}
          icon={<ListOrdered size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run()
          }
        />

        <MenuButton
          title="Trích dẫn"
          active={editor.isActive("blockquote")}
          icon={<Quote size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBlockquote()
              .run()
          }
        />

        <div className="mx-1 w-px bg-gray-300" />

        {/* Align */}

        <MenuButton
          title="Căn trái"
          active={editor.isActive({
            textAlign: "left",
          })}
          icon={<AlignLeft size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .setTextAlign("left")
              .run()
          }
        />

        <MenuButton
          title="Căn giữa"
          active={editor.isActive({
            textAlign: "center",
          })}
          icon={<AlignCenter size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .setTextAlign("center")
              .run()
          }
        />

        <MenuButton
          title="Căn phải"
          active={editor.isActive({
            textAlign: "right",
          })}
          icon={<AlignRight size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .setTextAlign("right")
              .run()
          }
        />

        <div className="mx-1 w-px bg-gray-300" />        {/* Highlight / Code */}

        <MenuButton
          title="Highlight"
          active={editor.isActive("highlight")}
          icon={<Highlighter size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHighlight()
              .run()
          }
        />

        <MenuButton
          title="Code Block"
          active={editor.isActive("codeBlock")}
          icon={<Code size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleCodeBlock()
              .run()
          }
        />

        <MenuButton
          title="Horizontal Rule"
          icon={<Minus size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .setHorizontalRule()
              .run()
          }
        />

        <MenuButton
          title="Xóa định dạng"
          icon={<Eraser size={18} />}
          onClick={() =>
            editor
              .chain()
              .focus()
              .unsetAllMarks()
              .clearNodes()
              .run()
          }
        />

        <div className="mx-1 w-px bg-gray-300" />

        {/* Table */}

<div className="mx-1 w-px bg-gray-300" />

<MenuButton
  title="Tạo bảng"
  icon={<TableIcon size={18} />}
  onClick={() =>
    editor
      .chain()
      .focus()
      .insertTable({
        rows: 3,
        cols: 3,
        withHeaderRow: true,
      })
      .run()
  }
/>

<MenuButton
  title="Thêm hàng"
  icon={<Rows3 size={18} />}
  onClick={() =>
    editor
      .chain()
      .focus()
      .addRowAfter()
      .run()
  }
/>

<MenuButton
  title="Thêm cột"
  icon={<Columns3 size={18} />}
  onClick={() =>
    editor
      .chain()
      .focus()
      .addColumnAfter()
      .run()
  }
/>

<MenuButton
  title="Xóa bảng"
  icon={<Trash2 size={18} />}
  onClick={() =>
    editor
      .chain()
      .focus()
      .deleteTable()
      .run()
  }
/>

        {/* Link */}

        <MenuButton
          title="Liên kết"
          active={editor.isActive("link")}
          icon={<Link2 size={18} />}
          onClick={setLink}
        />

        {/* Upload Image */}

        <MenuButton
          title="Upload ảnh"
          disabled={uploading}
          icon={<ImagePlus size={18} />}
          onClick={() =>
            inputRef.current?.click()
          }
        />

        <MenuButton
  title="YouTube"
  icon={<Play size={18} />}
  onClick={() => {
    const url = prompt("Nhập link YouTube");

    if (!url) return;

    editor
      .chain()
      .focus()
      .setYoutubeVideo({
        src: url,
      })
      .run();
  }}
/>

        {/* Image URL */}

        <MenuButton
          title="Ảnh từ URL"
          icon={<ImageIcon size={18} />}
          onClick={addImage}
        />
      </div>
    </>
  );
}