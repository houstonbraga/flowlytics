import Image from "next/image"

interface IconType {
  src: string
  alt: string
}

export default function Icon({ src, alt }: IconType)  {
  return (
    <Image 
      src={src}
      alt={alt}
      width={80}
      height={80}
    />
  )
}