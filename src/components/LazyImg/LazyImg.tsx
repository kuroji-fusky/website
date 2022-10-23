import Image from "next/image"
import { useState } from "react"

interface ImgLoadingProps {
	src: string
	alt?: string
	cover?: boolean
	className?: string
	priority?: boolean
	lazy?: boolean
}

export default function LazyImg(props: ImgLoadingProps) {
	const [loaded, setLoaded] = useState(false)
	const isLoaded = !loaded ? "animate-pulse opacity-100" : " animate-none opacity-0"

	return (
		<>
			<div
				className={`absolute inset-0 bg-sona-borahaealt-600 ${isLoaded} ${props.className ?? undefined
					}`}
				aria-hidden="true"
			></div>
			<Image
				src={props.src}
				alt={props.alt ?? undefined}
				className={props.className ?? undefined}
				layout="fill"
				objectFit="cover"
				loading={props.lazy ? "lazy" : undefined}
				onLoadingComplete={() => setLoaded(true)}
				priority={props.priority ?? undefined}
			/>
		</>
	)
}
