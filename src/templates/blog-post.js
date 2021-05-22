import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Card } from "react-bootstrap"
import * as BiIcons from "react-icons/Bi"

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Card className="mt-4 mb-4 card">
        <Card.Body>
          <div className="aboveTitle row justify-content-between">
            <span className="goBack">
              <Link to="/">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BiIcons.BiArrowBack /> &nbsp; Go Back{" "}
                </div>
              </Link>
            </span>
            <small>
              <div className="category">
                {" "}
                {post.frontmatter.month} {post.frontmatter.day},{" "}
                {post.frontmatter.year} | {post.frontmatter.category}
              </div>
            </small>
          </div>
          <Card.Title className="titleLine justify-content-between">
            <h1 className="mainTitle">{post.frontmatter.title}</h1>
          </Card.Title>
          <p className="subtitle"> {post.frontmatter.subtitle}</p>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Card.Body>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        day
        month
        year
        category
        subtitle
      }
    }
  }
`
