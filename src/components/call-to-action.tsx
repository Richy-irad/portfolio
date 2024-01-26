export default function CallToAction({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="px-4 py-3 border-foreground border-2 rounded-lg capitalize text-foreground font-semibold"
    >
      {text}
    </button>
  );
}
