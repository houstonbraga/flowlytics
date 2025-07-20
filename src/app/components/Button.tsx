interface ButtonType {
  text: string
}

export default function Button({ text }: ButtonType) {
  return (
    <button className="bg-brand px-5 py-3 text-white font-semibold rounded-[8px] cursor-pointer hover:opacity-70 transition-colors">
      {text}
    </button>
  )
};