import React from "react"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"

const AboutPage = () => {
  return (
    <Layout>
      <div className="pageHeader">
        <h1>About Me</h1>
      </div>
      <Card className="mb-4 card">
        <Card.Body>
          <h1 className="secondTitle">Background</h1>
          <p>
            Hi there! I'm Josh, a sophomore at the Wharton School at UPenn
            pursuing a major in business with concentrations in finance and
            statstics and an MSE in data science with a computer science minor
            (a mouthful, I know). Essentially, I'm a business major with
            interests in finance, computer science, and data science.{" "}
          </p>
          <h1 className="secondTitle">My Investment Style</h1>
          <p>
            When investing, I enjoy thinking about what makes a great business
            and industry: what is the competitive moat? What are the tailwinds?
            What even is a "good price" today? My greatest inspiration is Peter
            Lynch, but I'm also deeply interested in tech. You could call me a
            conservative-growth-tech investor: I wouldn't touch bitcoin, but
            richly-valued growth stocks like TSMC and AMD are not off limits.
          </p>
          <h1 className="secondTitle">Data Science Projects</h1>
          <p>
            I enjoy sports analytics and working with political and economic
            datasets. I've worked in sports analytics for an NFL team and done
            projects ranging from Princeton's ACLED dataset to disparities in
            high school debate. I'll be posting some of my projects to this
            blog. I'm a bit of an overvisualizer: I really like graphs. I hope
            you like graphs too!
          </p>
          <h1 className="secondTitle">Extra</h1>
          <p>
            In my free time, I enjoy reading, playing and watching sports, and
            going to karaoke parties with friends. Feel free to contact me
            through the email on the sidebar.
          </p>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default AboutPage
