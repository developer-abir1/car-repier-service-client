import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-5 bg-color">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Internationals</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Auto mobile</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Car service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Most popular Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Service pro</a>
              </li>
            </ul>
          </MDBCol >
          
          <MDBCol md="2">
          <h5 className="title">mobile.de</h5>
            <ul className="listItem">
              <li className="list-unstyled">
                <a href="#!">Jobs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Mobile apps</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Auto mobile</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Free Service</a>
              </li>
              <li style={{textDecoration:'none'}} className="list-inline-item">
                <a href="#!">Covide 19</a>
              </li>
              </ul>
          </MDBCol>
          <MDBCol md="6">
          <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> abirkhan12254@gamil.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;