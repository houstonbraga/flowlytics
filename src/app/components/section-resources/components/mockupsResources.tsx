import Image from "next/image"

export default function MockupResources() {
  return (
    <div className="w-full max-w-[888px] h-[561px] flex items-center justify-center relative mx-auto mb-24">
      <Image 
        src='/assets/screen-macbook.png'
        alt='screenmackbook'
        width={768}
        height={512}
        className="absolute top-0 right-0 rounded-2xl"
      />
      <Image 
        src='/assets/iphone.png'
        alt='screenmackbook'
        width={244}
        height={497}
        className="absolute bottom-0 left-0"
      />
    </div>
  )
}