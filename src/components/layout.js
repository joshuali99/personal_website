/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "../components/sidebar"
import "./layout.css"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const Layout = ({ children, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const sidebar = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const showSidebar = () => dispatch({ bool: "TOGGLE_BOOLEAN" })

  return (
    <>
      <Sidebar
        siteTitle={data.site.siteMetadata?.title || "Title"}
        sidebar={sidebar.bool}
        showSidebar={showSidebar}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          padding: `0 1.0875rem 1.45rem`,
          zIndex: `-1`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer>
      </div>
    </>
  )
}

export default Layout
