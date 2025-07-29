const Metrics = () => {
  return (
    <div className="flex max-w-3xl mb-48">
      <div className="flex flex-col gap-5 items-center border-r border-r-gray-800 pr-8">
        <h1 className="text-brand text font-semibold text-6xl">40+</h1>
        <span className="text-xs text-gray-500">Integrações</span>
      </div>
      <div className="flex flex-col gap-5 items-center pl-8 pr-8">
        <h1 className="text-brand text font-semibold text-6xl">600%</h1>
        <span className="text-xs text-gray-500">Retorno do inverstimento</span>
      </div>
      <div className="flex flex-col gap-5 items-center border-l border-l-gray-800 pl-8">
        <h1 className="text-brand text font-semibold text-6xl">4K+</h1>
        <span className="text-xs text-gray-500">Clientes globais</span>
      </div>
    </div>
  )
}

export default Metrics