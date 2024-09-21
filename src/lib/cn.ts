import { twMerge } from "tailwind-merge"
import clsx, { type ClassValue } from "clsx"

const cn = (...classNames: ClassValue[]) => twMerge(clsx(...classNames))

export default cn
