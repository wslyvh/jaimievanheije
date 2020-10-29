import { useStaticQuery, graphql } from "gatsby"
import { SiteMetadata } from "../types/siteMetadata"

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return site.siteMetadata
}
