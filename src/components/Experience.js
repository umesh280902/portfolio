import { Container, Row, Col } from "react-bootstrap";
import blogpost from "../assets/img/blogpost.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "CodSoft",
      duration: "Nov - Dec 2023",
      description: "During my internship at CodSoft, I developed a comprehensive blogpost application where users can search for blogs based on categories and perform CRUD operations as per their requirements. This project involved implementing user authentication, designing and managing the database using MongoDB, and ensuring the application was responsive and user-friendly. I also integrated various third-party APIs to enhance the functionality of the application.",
      imgUrl: blogpost
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={blogpost} alt="Experience"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Experience</h2>
                <div className="timeline">
                  {experiences.map((experience, index) => (
                    <div key={index} className="timeline-item">
                      <h3>{experience.title}</h3>
                      <h4>{experience.company}</h4>
                      <h5>{experience.duration}</h5>
                      <p>{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
