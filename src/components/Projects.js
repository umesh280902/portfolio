import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecommerce from "../assets/img/ecommerce.png";
import blogpost from "../assets/img/blogpost.png";
import rentease from "../assets/img/rentease.png";
import potato from "../assets/img/potato.png";
import weatherimage from "../assets/img/weatherimage.png";
import newsimage from "../assets/img/newsimage.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shoptacle - an ecommerce website",
      description: "Led the development and deployment of a comprehensive e-commerce platform, focusing on user authentication, CRUD operations, and dynamic content rendering using EJS templating.",
      imgUrl: ecommerce,
    },
    {
      title: "Blogpost - a simple blog application",
      description: "A blogpost application where users can search for a blog based on category and perform CRUD operations based on their requirement.",
      imgUrl: blogpost,
    },
    {
      title: "Rentease - a rental property management system application",
      description: "A rental property management website where users can upload their properties to find genuine users who are willing to pay rent, with a feature of finding places using map integration.",
      imgUrl: rentease,
    },
    {
      title: "Business Startup",
      description: "A simple React application where farmers can check the condition of their potatoes.",
      imgUrl: potato,
    },
    {
      title: "Weather Application",
      description: "A simple web application to check weather conditions.",
      imgUrl: weatherimage,
    },
    {
      title: "News Application",
      description: "A simple web application where users can read daily news based on their choice.",
      imgUrl: newsimage,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p style={{textAlign:"justify"}}>
                    This are the project I have made in my last 3 year my projects extends from single react application to a full stack application. In this projects I have worked on frontend functionalities. In my backend I have created full server side code. Also I have worked on integration of the frontend and backend. I have also made container based project my potato project is an idea of working deployment production.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
