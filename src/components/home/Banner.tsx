import Link from "next/link";
import { FaDonate } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="hidden md:block relative z-50 w-full px-4 pointer-events-none">
      <div className="absolute left-1/2 -translate-x-1/2 top-4 bg-transparent backdrop-blur-3xl px-4 py-3 text-foreground rounded-xl shadow-lg pointer-events-auto">
        <p className="text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          <FaDonate
            className="me-2 -mt-0.5 inline-flex opacity-60"
            size={16}
            aria-hidden="true"
          />
          Enjoying the resume builder? Your small donation helps us keep it
          fast, reliable, and free for everyone.{" "}
          <span className="text-muted-foreground">·</span>{" "}
          <Link
            href="/donation"
            className="font-medium underline hover:no-underline"
          >
            Donate
          </Link>
        </p>
      </div>
    </div>
  );
}
