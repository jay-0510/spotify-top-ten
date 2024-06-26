import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-6 font-[Montserrat] gap-1 mb-3">
      <span className="text-sm">
        Made by{" "}
        <Link className=" text-blue-600" href="/contact">
          Jay
        </Link>
      </span>
      <span className="text-xs">
        <Link className=" text-blue-600" href="/about">
          About
        </Link>{" "}
        |{" "}
        <Link className=" text-blue-600" href="/privacy">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link className=" text-blue-600" href="/contact">
          Contact
        </Link>
      </span>
    </div>
  );
}
