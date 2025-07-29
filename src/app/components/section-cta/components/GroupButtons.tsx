import Link from "next/link";
import Button from "../../Button";

export function GroupButtons() {
  return (
    <div className="flex justify-center gap-3">
      <Link
        href="/"
        className="border border-gray-400 px-5 py-3 text-gray-600 font-semibold rounded-[8px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        Saber mais
      </Link>
      <Button text="Comece" />
    </div>
  );
}
