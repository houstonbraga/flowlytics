import { ReactNode } from "react"

interface CharacteristicsOnlyType {
  icon: ReactNode
  title: string
  description: string
}

export default function CharacteristicsOnly({ icon, title, description }: CharacteristicsOnlyType) {
  return (
    <div className="flex flex-col items-center justify-center max-w-96 text-center">
      <div className="text-brand flex justify-center items-center p-1 w-10 h-10 rounded-full bg-purple-100 mb-5 border-4 border-purple-50">
        {icon}
      </div> 
      <h2 className="text-xl mb-2">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}