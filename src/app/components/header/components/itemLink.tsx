import Link from "next/link"
import { FiChevronDown } from "react-icons/fi"

interface ItemLinkType {
  title: string
  url: string
  hasDropDown?: boolean
}

const ItemLink = ({ title, url, hasDropDown }: ItemLinkType) => {
  return (
    <Link
    className="flex items-center gap-1 font-semibold text-neutral-300 hover:opacity-50 transition-opacity"
      href={url}
    >{title} {hasDropDown && <FiChevronDown />}</Link>
  )
}

export default ItemLink