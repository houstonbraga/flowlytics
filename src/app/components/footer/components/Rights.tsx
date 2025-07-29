import Image from "next/image"

export function Rights() {
  return (
    <div className="flex justify-between items-center w-full mb-4">
      <Image 
        src='/assets/logo.svg'
        alt="logo"
        width={139}
        height={32}
      />
      <span className="text-xs text-gray-700">© 2025 Flowlytics. Todos os direitos reservados.</span>
    </div>  
  )
}