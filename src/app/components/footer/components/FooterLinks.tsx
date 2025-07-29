import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: { text: string; link: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm text-white font-semibold">{title}</span>
      <div className="flex flex-col gap-2">
        {links.map(({ text, link }, index) => (
          <Link
            key={index}
            href={link}
            className="text-gray-500 hover:text-white transition-colors"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
