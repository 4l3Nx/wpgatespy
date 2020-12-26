import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import menuStyles from "./mainmenu.module.scss"
import SiteInfo from "./siteInfo"

const MainMenu = () => (
  <StaticQuery query={graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: {
      name: {
        eq: "Main menu"
      }
    }){
      edges {
        node {
          items {
            title
            object_slug
          }
        }
      }
    }
  }
  `} render={props => (
  <div className={menuStyles.nav}>
    <SiteInfo/>
    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
      <Link className={menuStyles.link} to={`/${item.object_slug}`} key={item.title}>
        {item.title}
      </Link>
    ))}
  </div>

  )}
  />

)

export default MainMenu;