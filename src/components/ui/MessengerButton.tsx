"use client";

export default function MessengerButton() {
  return (
    <a
      href="https://m.me/Dowedding.vn"
      target="_blank"
      rel="noopener noreferrer"
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
        bg-[#0084FF]
        shadow-xl
        hover:scale-110
        transition
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="h-8 w-8"
      >
        <path d="M12 2C6.477 2 2 6.145 2 11.25c0 2.907 1.45 5.5 3.72 7.187V22l3.404-1.87c.908.252 1.874.387 2.876.387 5.523 0 10-4.145 10-9.25S17.523 2 12 2zm1.012 12.403l-2.548-2.72-4.97 2.72 5.468-5.805 2.604 2.72 4.914-2.72-5.468 5.805z" />
      </svg>
    </a>
  );
}