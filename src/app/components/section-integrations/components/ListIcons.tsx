import { listIconsIntegrations } from "@/app/data/data";
import Icon from "./Icon";

const ListIcons = () => {
  return (
    <div className="flex flex-wrap gap-8 max-w-[864px]">
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