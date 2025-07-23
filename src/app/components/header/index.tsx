import GridContainer from "../GridContainer";
import Image from "next/image";
import ItemLink from "./components/itemLink";

const listLinks = [
  {
    title: "Home",
    url: "/home",
    dropdown: false,
  },
  {
    title: "Produtos",
    url: "/products",
    dropdown: true,
  },
  {
    title: "Recursos",
    url: "/resources",
    dropdown: true,
  },
  {
    title: "Preço",
    url: "/resources",
    dropdown: false,
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950 w-full h-18 flex items-center border-b border-b-gray-800">
      <GridContainer className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Image src="/assets/logo.svg" alt="logo" width={140} height={40} />
          <nav className="flex items-center gap-8">
            {listLinks.map(({ title, url, dropdown }, index) => (
              <ItemLink
                key={index}
                title={title}
                url={url}
                hasDropDown={dropdown}
              />
            ))}
          </nav>
        </div>
        <div>
          <Image 
            src='/assets/avatar.jpg'
            alt="avatar"
            width={35}
            height={35}
            className="cursor-pointer rounded-full"
          />
        </div>
      </GridContainer>
    </header>
  );
};

export default Header;
