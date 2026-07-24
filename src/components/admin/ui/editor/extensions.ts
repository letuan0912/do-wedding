import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import ImageResize from "tiptap-extension-resize-image";
import TextAlign from "@tiptap/extension-text-align";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Youtube from "@tiptap/extension-youtube";

import { createLowlight } from "lowlight";

const lowlight = createLowlight();

export const editorExtensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3],
    },
  }),

  Youtube.configure({
  controls: true,
  nocookie: true,
  modestBranding: true,
  width: 900,
  height: 500,
}),

  Underline,

  Highlight.configure({
    multicolor: true,
  }),

  HorizontalRule,

  CodeBlockLowlight.configure({
    lowlight,
  }),

  Placeholder.configure({
    placeholder: "Nhập nội dung...",
  }),

  Link.configure({
    openOnClick: false,
    autolink: true,
    linkOnPaste: true,
  }),

  ImageResize.configure({
    inline: false,
    allowBase64: true,
  }),

  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Table.configure({
  resizable: true,
}),

TableRow,

TableHeader,

TableCell,
];