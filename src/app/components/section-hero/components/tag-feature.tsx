import { FiArrowRight } from "react-icons/fi"

const TagFeature = () => {
  return (
    <div className="inline-flex bg-purple-50 gap-3 rounded-2xl p-1 "> 
      <span className="inline-block bg-white border border-purple-200 px-3 py-1 rounded-2xl text-xs text-brand">Novo recurso</span>
      <a href="/feature" className="flex items-center text-[14px] text-brand font-semibold hover:opacity-50 border border-purple-100 rounded-2xl px-3">Confira o painel de equipe <FiArrowRight/> </a>
    </div>
  )
}

export default TagFeature