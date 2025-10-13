export default function Text({ text }: { text: string }) {
  return (
    <div className="text-[max(3vw,2.5rem)] text-center font-medium">{text}</div>
  );
}
