import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"

const IndexPage = ({ data }) => (
  <Layout>
    <main>
      <div className="pageHeader">
        <h1>Blog</h1>
      </div>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Card className="mb-4 card">
            <Card.Body>
              <div className="aboveTitle">
                <small>
                  {post.node.frontmatter.month} {post.node.frontmatter.day},{" "}
                  {post.node.frontmatter.year}{" "}
                  <div className="category">
                    {post.node.frontmatter.category}
                  </div>
                </small>
              </div>
              <Card.Title className="titleLine justify-content-between">
                <Link to={post.node.frontmatter.path}>
                  <h1 className="cardTitle">{post.node.frontmatter.title}</h1>
                </Link>
              </Card.Title>
              <p key={post.node.id}>{post.node.frontmatter.subtitle}</p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            category
            year
            month
            subtitle
            day
          }
        }
      }
    }
  }
`

export default IndexPage
