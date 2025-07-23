import { FiArrowRight } from "react-icons/fi"

const TagFeature = () => {
  return (
    <div className="inline-flex bg-gray-800 gap-3 rounded-2xl p-1 "> 
      <span className="inline-block font-semibold bg-gray-950 border border-gray-700 px-3 py-1 rounded-2xl text-xs text-brand">Novo recurso</span>
      <a href="/feature" className="flex gap-1 items-center text-[14px] text-white font-semibold hover:opacity-50 transition-opacity border border-gray-700 rounded-2xl px-3">Confira o painel de equipe <FiArrowRight/> </a>
    </div>
  )
}

export default TagFeature