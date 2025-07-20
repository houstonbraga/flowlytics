import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: ReactNode
  className?: string
}

export default function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div className={twMerge("w-full grid-container mx-auto px-3", className)}>{children}</div>
  )
}