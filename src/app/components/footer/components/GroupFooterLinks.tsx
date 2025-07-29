import { ListLinksFooter } from "@/app/data/data";
import FooterLinks from "./FooterLinks";

const GroupFooterLinks = () => {
  return (
    <div className="flex w-full justify-between flex-wrap gap-8">
      {ListLinksFooter.map(({ title, links }, index) => (
        <FooterLinks key={index} title={title} links={links} />
      ))}
    </div>
  );
};

export default GroupFooterLinks;
