import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="portfolio" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/Fh27"><img style={{width:"16px",height:"16px",fill:"none"}} src='https://tse2.mm.bing.net/th?id=OIP.6zue8tZYXodEOE5nUe0T3AHaHN&pid=Api&P=0&h=180' alt="" /></a>

              <a href="https://www.linkedin.com/in/furqan-hasan27/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/hasan.furqan.27/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/hasan_furqan27/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
