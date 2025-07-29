import Link from "next/link";

interface ButtonType {
  text: string;
}

export default function Button({ text }: ButtonType) {
  return (
    <Link
      href="/"
      className="bg-brand px-5 py-3 text-white font-semibold rounded-[8px] cursor-pointer hover:opacity-70 transition-opacity"
    >
      {text}
    </Link>
  );
}
