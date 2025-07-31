import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface ItemLinkType {
  title: string;
  url: string;
  hasDropDown?: boolean;
  onLinkClick?: () => void;
}

const ItemLink = ({ title, url, hasDropDown, onLinkClick }: ItemLinkType) => {
  return (
    <Link
      className="flex items-center gap-1 font-semibold text-neutral-300 hover:opacity-50 transition-opacity md:text-sm md:py-2 text-lg py-3"
      href={url}
      onClick={onLinkClick}
    >
      {title}{" "}
      {hasDropDown && <FiChevronDown className="md:w-4 md:h-4 w-5 h-5" />}
    </Link>
  );
};

export default ItemLink;
