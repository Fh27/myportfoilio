import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects = [
    {
      title: "PortFolio Website",
      description: "Design & Development",
      imgUrl: projImg3,
      srsc:"https://furqansportfolio.netlify.app",
    },
    {
      title: "Contact Manager",
      description: "A React Based Project for managing Contacts",
      imgUrl: projImg3,
      srsc:"https://github.com/Fh27",

    },
    {
      title: "Form Assignment",
      description: "A complete MERN stack project ",
      imgUrl: projImg3,
      srsc:"https://github.com/Fh27",

    },
    {
      title: "Human Following Robot",
      description: "Aruino Based Electronic Project",
      imgUrl: projImg3,
      srsc:"https://github.com/Fh27",
    },
    {
      title: "TechNews App",
      description: "React REdux application based webApp",
      imgUrl: projImg3,
      srsc:"https://techappbyfh.netlify.app",
    },
    {
      title: "IOT based Baby Montioring System",
      description: "Aruino Based Electronic Project with Mobile App using Java",
      imgUrl: projImg3,
      srsc:"https://github.com/Fh27",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Project not only demonstrated my technical prowess in web development but also showcased my ability to create a feature-rich and user-friendly web application. The experience gained from this project further solidified my commitment to delivering high-quality solutions that meet and exceed client expectations.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
