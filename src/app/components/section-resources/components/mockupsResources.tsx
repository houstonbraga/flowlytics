import Image from "next/image"

export default function MockupResources() {
  return (
    <div className="max-w-[888px] max-h-[561px] flex items-center justify-center relative mb-24">
      <Image 
        src='/assets/iphone.png'
        alt='screenmackbook'
        width={244}
        height={497}
        className="absolute bottom-0 left-0"
      />
      <Image 
        src='/assets/screen-macbook.png'
        alt='screenmackbook'
        width={768}
        height={512}
        className="ml-24"
      />
    </div>
  )
}