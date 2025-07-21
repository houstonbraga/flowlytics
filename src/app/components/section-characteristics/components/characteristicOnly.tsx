import { ReactNode } from "react"

interface CharacteristicsOnlyType {
  icon: ReactNode
  title: string
  description: string
}

export default function CharacteristicsOnly({ icon, title, description }: CharacteristicsOnlyType) {
  return (
    <div className="flex flex-col items-center justify-center max-w-96 text-center">
      <div className="flex justify-center items-center p-3 w-12 h-12 rounded-full bg-purple-100 mb-5">
        {icon}
      </div>
      <h2 className="text-xl mb-2">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}