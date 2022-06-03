import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Section from "@/components/Section"
import { CardSkeleton } from "@/components/landing/ProjectCard"
import SEOHead from "@/components/SEOHead"
import styles from "@/styles/Home.module.scss"
import DefaultLayout from "@/layouts/Default"
import Image from "next/image"

const ProjectCard = dynamic(() => import("@/components/landing/ProjectCard"), {
	loading: () => <CardSkeleton />,
	ssr: false
})

export default function Home() {
	const skills = [
		"Full-stack web development",
		"Web and UI/UX Design",
		"Indie music artist",
		"Experienced video editor",
		"Filmmaker",
		"Novice VFX artist"
	]

	const [removeCringe, isRemovedCringe] = useState("")

	useEffect(() => {
		window.addEventListener("scroll", removeDatCringe)
		return () => window.removeEventListener("scroll", removeDatCringe)
	}, [])

	const removeDatCringe = () => {
		let windowHeight = window.scrollY
		if (window !== undefined) {
			if (windowHeight > 200) {
				isRemovedCringe("opacity-0 pointer-events-none")
			}
		}
	}

	return (
		<ParallaxProvider>
			<SEOHead
				title="Home"
				description="Hi! I'm skepfusky, I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines!"
				image="/static/avatars/07.png"
			/>
			<Parallax speed={-200} className="layout-item-wrapper">
				<div className="h-viewport grid place-items-center">
					<div className="flex flex-col gap-y-9">
						<div
							className="bg-gradient-to-t from-borahae-600 to-royalblue-400 rounded-2xl overflow-hidden mx-auto"
							style={{ boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.3)" }}
						>
							<Parallax
								speed={-18}
								className="relative h-[14rem] md:h-[25rem] w-[14rem] md:w-[25rem] "
							>
								<Image
									src="/static/avatars/FormalAvatar-SVG.svg"
									alt="Omg a furry"
									layout="fill"
									objectFit="contain"
								/>
							</Parallax>
						</div>
						<h2 className="text-center">Coming soon...</h2>
						<div id={styles["skill-inline"]} className="w-[30rem]">
							{skills.map((skill, i) => (
								<div id={styles["skill-item"]} key={i}>
									{skill}
								</div>
							))}
						</div>
					</div>
					{/* scrolldown absolute position */}
					<a
						href="#showcase"
						id={styles["scroll-down"]}
						className={removeCringe}
					>
						<span>Scroll down for cringe</span>
						<FaIcon icon={faAngleDown} size="lg" />
					</a>
				</div>
			</Parallax>
			<div
				className="layout-clip"
				style={
					{
						"--clip-path-layout": "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
					} as React.CSSProperties
				}
			></div>
			<div className="layout-seperator relative z-2" id="showcase">
				<div className="layout-item-wrapper">
					<Section heading="Projects" emojiKey="✨" sectionId={styles.showcase}>
						<ProjectCard
							image="/static/avatars/08.png"
							title="This awful website"
							description="This terrible website you're currently browsing is written in Next.js"
							repoLink="skepfusky/skepfusky-website"
						/>
						<ProjectCard
							image="/static/projects/paco-yt-icon.jpg"
							title="Paco Drawing Stats"
							description="A repository that collects a bunch drawing data from Paco Panda, written in Python and Next.js"
							pageLink="/projects/pandapaco-drawing-stats"
							repoLink="skepfusky/pandapaco-drawing-stats"
						/>
						<ProjectCard
							image="/static/projects/searchpets-icon.png"
							title="Searchpets!"
							description="A website that searches characters from a furry comic, Housepets!"
							repoLink="OpenFurs/searchpets"
							pageLink="/projects/searchpets"
							// extLink="https://searchpets.xyz"
						/>
						<ProjectCard
							image="/static/projects/majira-vscode.png"
							title="Majira Strawberry VS Code Theme"
							description="Increase your coding productivity by 69% with this beautiful theme!"
							repoLink="skepfusky/majira-strawberry-vscode"
						/>
						<ProjectCard
							image="/static/projects/scammerino-lol.jpg"
							title="Scammerino"
							description="Play with scammers' feelings with a game of Bingo or rating their patience"
							repoLink="skepfusky/scammerino"
						/>
						<ProjectCard
							image="/static/projects/myfursona.png"
							title="MyFursona"
							pageLink="/projects/myfursona"
							description="An open source project where you an manage your fursona(s)"
							repoLink="MyFursona-Project/MyFursona"
							extLink="https://www.myfursona.art"
						/>
						<ProjectCard
							image="/static/projects/tessinator.png"
							title="Tessinator"
							description="An awful Discord bot when I barely knew anything about Node.js"
							repoLink="skepfusky/tessinator"
						/>
					</Section>
					<Section heading="About me" emojiKey="🦊">
						<div className={styles.section} id={styles["bio"]}>
							<article className="cursor-default">
								<p>
									Heya, I'm <span id="highlight">skepfusky</span> or just simply{" "}
									<span id="highlight">Skep</span>, or also known by my stage
									name <span id="highlight">Kokoro Husky</span> on streaming
									platforms -- I'm a 20-year-old self-employed and self-taught
									hobbyist from the Philippines!
								</p>
								<p>
									I'm not trying to be a celebrity, or even a{" "}
									<strong>
										<em>popufur...</em>
									</strong>{" "}
									I'm just trying to get my name out there as I'm extremely
									passionate about sharing and possibly inspiring future
									generations through my broad set of skills, talent, and art as
									a self-taught individual.
								</p>
							</article>
							<div id={styles["bio-svg"]}>
								{/* todo: cringe svg here */}
								<img
									src="/static/avatars/07.png"
									alt="Skepfusky avatar"
									className="rounded-full w-[16rem]"
								/>
							</div>
						</div>
					</Section>
				</div>
			</div>
		</ParallaxProvider>
	)
}

Home.PageLayout = DefaultLayout
