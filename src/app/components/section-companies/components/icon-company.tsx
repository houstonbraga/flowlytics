import Image from "next/image"

interface IconCompanyType {
  src: string,
  alt: string,
  width: number,
  height: number
}

export function IconCompany({ src, alt, width, height }: IconCompanyType) {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}