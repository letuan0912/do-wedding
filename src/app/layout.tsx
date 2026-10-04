import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DO WEDDING",
  description: "Luxury Wedding Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}
      >
        <Toaster richColors position="top-right" />

        {children}

        <a
          href="https://m.me/Dowedding.vn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat với DO WEDDING trên Messenger"
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#0084ff]
            shadow-[0_12px_35px_rgba(0,132,255,0.35)]
            transition
            duration-300
            hover:scale-110
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="white"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.145 2 11.25c0 2.907 1.45 5.5 3.72 7.187V22l3.404-1.87c.908.252 1.874.387 2.876.387 5.523 0 10-4.145 10-9.25S17.523 2 12 2zm1.012 12.403-2.548-2.72-4.97 2.72 5.468-5.805 2.604 2.72 4.914-2.72-5.468 5.805z" />
          </svg>
        </a>
      </body>
    </html>
  );
}