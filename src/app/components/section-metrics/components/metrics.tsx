const Metrics = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-3xl mb-48">
      <div className="flex flex-col gap-5 items-center border-b md:border-b-0 md:border-r md:border-r-gray-800 md:pr-8 border-b-gray-800 pb-8 md:pt-8 md:pb-8">
        <h1 className="text-brand font-semibold text-6xl">40+</h1>
        <span className="text-xs text-gray-500">Integrações</span>
      </div>
      <div className="flex flex-col gap-5 items-center md:pl-8 md:pr-8 pt-8 pb-8">
        <h1 className="text-brand font-semibold text-6xl">600%</h1>
        <span className="text-xs text-gray-500">Retorno do inverstimento</span>
      </div>
      <div className="flex flex-col gap-5 items-center md:border-l md:border-l-gray-800 md:pl-8 border-t md:border-t-0 border-t-gray-800 pt-8">
        <h1 className="text-brand font-semibold text-6xl">4K+</h1>
        <span className="text-xs text-gray-500">Clientes globais</span>
      </div>
    </div>
  );
};

export default Metrics;
