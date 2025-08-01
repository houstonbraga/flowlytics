import { listIconsIntegrations } from "@/app/data/data";
import Icon from "./Icon";

const ListIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-[864px] mb-16">
      {listIconsIntegrations.map(({src, alt}, index) => (
        <Icon 
          key={index}
          src={src}
          alt={alt}
        />
      ))}
    </div>
  )
}

export default ListIcons