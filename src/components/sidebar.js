import React from "react"
import { Link } from "gatsby"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./sidebarData"
import "./sidebar.css"
import { IconContext } from "react-icons"
import "bootstrap/dist/css/bootstrap.min.css"
import profilePic from "../images/medrinking.jpg"
import { Image } from "react-bootstrap"

const Sidebar = ({ siteTitle, sidebar, showSidebar }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", cursor: "pointer" }}>
        <div className="sidebar">
          <Link className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} aria-label="Show sidebar" />
          </Link>
          <div className="header">
            <h1>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {" "}
                {siteTitle}{" "}
              </Link>
            </h1>
          </div>
        </div>
      </IconContext.Provider>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link className="menu-bars">
              <IconContext.Provider
                value={{ color: "#fff", cursor: "pointer" }}
              >
                {" "}
                <AiIcons.AiOutlineClose
                  onClick={showSidebar}
                  aria-label="Close sidebar"
                />{" "}
              </IconContext.Provider>
            </Link>
          </li>
          <li className="profilePic">
            <Image
              src={profilePic}
              fluid
              roundedCircle
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="My Profile Picture"
            />
          </li>
          <li className="nav-text" style={{ height: "40px" }}>
            <h2>Joshua Lee</h2>
          </li>
          <li className="subitem">Student @ Wharton</li>
          <li className="subitem">Class of 2024</li>
          <li className="subitem email">
            <a className="email-link" href="mailto:joshzlee@wharton.upenn.edu">
              {" "}
              <AiIcons.AiOutlineMail> </AiIcons.AiOutlineMail>{" "}
              joshzlee@wharton.upenn.edu
            </a>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} activeClassName="link-active">
                  {item.title}
                </Link>
              </li>
            )
          })}
          <li className="nav-text">
            <a
              href="https://drive.google.com/file/d/1UsJAOrc_-frwLtKj_VVjLbBSZqBNwQgp/view?usp=sharing"
              target="_blank"
            >
              Resum&eacute;
            </a>
          </li>
          <IconContext.Provider
            value={{ color: "rgba(0, 0, 0, 0.7)", size: "20px" }}
          >
            <li className="sidebarIcons">
              <a
                href="https://www.linkedin.com/in/joshua-lee-689499165/"
                aria-label="LinkedIn"
              >
                <AiIcons.AiFillLinkedin />
              </a>
            </li>
            <li className="sidebarIcons">
              <a href="https://github.com/joshuali99/" aria-label="LinkedIn">
                <AiIcons.AiFillGithub />
              </a>
            </li>
          </IconContext.Provider>
          <li className="copyRight">
            © {new Date().getFullYear()}, Built with {` `} Gatsby, ReactJS,
            Bootstrap
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
