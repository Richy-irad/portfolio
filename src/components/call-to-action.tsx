import Link from "next/link";

export default function CallToAction({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      type="button"
      className="px-4 py-3 border-foreground border-2 rounded-lg capitalize text-foreground font-semibold"
    >
      {text}
    </Link>
  );
}
