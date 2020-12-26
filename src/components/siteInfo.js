import React from "react"
import {graphql, StaticQuery} from "gatsby"
import siteInfo from "./siteInfo.module.scss"

const SiteInfo = () => (
  <StaticQuery query={graphql`
  {
    allWordpressSiteMetadata {
      edges {
        node {
          name
          description
        }
      }
    }
  }
  `} render={props =>(
    <div className={siteInfo.content}>
      <div className={siteInfo.title}>
        {props.allWordpressSiteMetadata.edges[0].node.name}
      </div>
      <div>
        {props.allWordpressSiteMetadata.edges[0].node.description}
      </div>
    </div>
  )} />
)

export default SiteInfo