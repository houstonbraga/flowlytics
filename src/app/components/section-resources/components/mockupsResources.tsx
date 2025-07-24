import Image from "next/image"

export default function MockupResources() {
  return (
    <div className="max-w-[888px] max-h-[561px] flex items-center justify-center relative mb-24">
      <Image 
        src='/assets/iphone.png'
        alt='screenmackbook'
        width={244}
        height={497}
        className="absolute -bottom-12 left-0 drop-shadow-5xl"
      />
      <Image 
        src='/assets/screen-macbook.png'
        alt='screenmackbook'
        width={768}
        height={512}
        className="rounded-2xl ml-15"
      />
    </div>
  )
}