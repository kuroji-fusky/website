interface PageMetaProps {
  title?: string
  description?: string
}

export function usePageMeta({ title, description }: PageMetaProps) {
  const router = useRoute()
  const SITE_NAME = "Kuroji Fusky's Blog"

  const parseTitle = router.fullPath !== "/" ? `${title} | ${SITE_NAME}` : title

  useSeoMeta({
    title: parseTitle,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    twitterTitle: title,
    twitterDescription: description,
  })
}
