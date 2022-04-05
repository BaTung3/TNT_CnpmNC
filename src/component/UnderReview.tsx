// import logo from "././logo.svg";
// import "././App.css";
// import { Button } from "bootstrap";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Checkbox } from "@mui/material";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// import "react-phone-number-input/style.css";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input/react-native-input";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import Card from "react-bootstrap/Card";

const stylepad = {
  "margin-left": "5px",
  padding: "0px",
};

// const [value, setValue] = useState();

function UnderReview() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <header>
        <Container>
          <Row>
            <br></br>
          </Row>
          <Row>
            <Col>
              <div className="hnet-header-logo-menu">
                <img
                  src="data:image/png;base64,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"
                  alt="TERA Logo"
                />
              </div>
            </Col>
            <Col>
              <div className="c-text css-1d279ga">
                <span>Logged-in as:</span> baztung@gmail.com
              </div>
            </Col>
            <Col>
              <div
                style={{ justifyContent: "flex-end" }}
                // align="right"
                className="c-column css-bv1y1v marginLeftAvatarTitle"
                // style={{ "padding-right": "15px" }}
              >
                <h4
                  className="c-text css-dxtu4k"

                  //style="margin-bottom: 5px"
                >
                  NULL
                </h4>
                <span className="c-text css-1d279ga">
                  baztung@gmail.com |<span>Registration no :</span> 67830343
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <hr></hr>

      <Container>
        <Row>
          <Col xs={3}>
            <div className="">
              <h5>1.Property Information</h5>
              <div className="list-group">
                <Button variant="light">
                  {/* BaTung, Link day ne ->>>                 */}
                  <a
                    href={"../component/View1.tsx"}
                    className="list-group-item"
                  >
                    General Information
                  </a>
                  {/* <Link to="../component/View1"> General Information </Link> */}
                </Button>
                <Button variant="light">
                  <a
                    href={"../component/View2.tsx"}
                    className="list-group-item"
                  >
                    Property detail
                  </a>
                  {/* <Link to="../component/View2"> Property detail </Link> */}
                </Button>
                <Button variant="light">
                  <a
                    href={"../component/View3.tsx"}
                    className="list-group-item"
                  >
                    Property Facilities
                  </a>
                  {/* <Link to="../component/View3"> Property Facilities </Link> */}
                </Button>
                <Button variant="light">
                  <a href="../component/Room.tsx" className="list-group-item">
                    Rooms
                  </a>
                </Button>
                <Button variant="light">
                  <a
                    href="../component/RoomFaclity.tsx"
                    className="list-group-item"
                  >
                    Rooms Facility
                  </a>
                </Button>
                <Button variant="light">
                  <a href="../component/Photo.tsx" className="list-group-item">
                    photos
                  </a>
                </Button>
                <Button variant="light">
                  <a
                    href="../component/Payment.tsx"
                    className="list-group-item"
                  >
                    payment information
                  </a>
                </Button>
                <Button variant="light">
                  <a href="../component/Review.tsx" className="list-group-item">
                    review property
                  </a>
                </Button>
                <Button variant="light">
                  <a
                    href="../component/Agreement.tsx"
                    className="list-group-item"
                  >
                    Contact Agreement
                  </a>
                </Button>
                <Button variant="light">
                  <a
                    href="../component/Contract2.tsx"
                    className="list-group-item"
                  >
                    Review Contact
                  </a>
                </Button>
                <Button variant="light">
                  <a
                    href="../component/UnderReview.tsx"
                    className="list-group-item"
                  >
                    Under Review
                  </a>
                  {/* BaTung, Link cuoi ->>>                 */}
                </Button>
                <span> Mandatory Field progress</span>
              </div>
            </div>

            <div className="text-muted">
              <h5>2.Contact agreement</h5>
            </div>

            <div className="text-muted">
              <h5>3.Submission</h5>
            </div>
          </Col>

          <Col xs={9}>
            <Col>
              <Row>
                <tr>
                  <h1>
                    <b>
                      We are currently verifying your property registration
                      Information
                    </b>
                  </h1>
                </tr>
                <Form>
                  <Table
                    responsive
                    className="c-flexbox c-collapse-header c-collapse-header--is-closed grayBackground css-rapf31"
                  >
                    <tr>
                      <tr>
                        <p>
                          Our Team will contact you via email
                          (MeoVan@gmail.com)for any updates relate to your
                          property registration process
                        </p>
                        <p>Warm Regard , Traveloka Accommodation Team</p>
                      </tr>
                      <tr>
                        <Button
                          variant="outline-dark"
                          size="lg"
                          style={{ marginLeft: 16, backgroundColor: "orange" }}
                        >
                          <span>
                            <span>Review Contract </span>
                          </span>
                        </Button>
                      </tr>
                    </tr>
                  </Table>
                  <table>
                    <tr>
                      <h4>Need help about your property registration ?</h4>
                    </tr>
                    <tr>
                      <p>
                        Your Registration ID: <b>674969469</b>
                      </p>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.45711 5.04289C4.06658 4.65237 3.43342 4.65237 3.04289 5.04289C2.65237 5.43342 2.65237 6.06658 3.04289 6.45711L4.45711 5.04289ZM20.9571 6.45711C21.3476 6.06658 21.3476 5.43342 20.9571 5.04289C20.5666 4.65237 19.9334 4.65237 19.5429 5.04289L20.9571 6.45711ZM20.2929 15.7071C20.6834 16.0976 21.3166 16.0976 21.7071 15.7071C22.0976 15.3166 22.0976 14.6834 21.7071 14.2929L20.2929 15.7071ZM2.29289 14.2929C1.90237 14.6834 1.90237 15.3166 2.29289 15.7071C2.68342 16.0976 3.31658 16.0976 3.70711 15.7071L2.29289 14.2929ZM5 6H19V4H5V6ZM20 7V17H22V7H20ZM19 18H5V20H19V18ZM4 17V7H2V17H4ZM3.04289 6.45711L7.29289 10.7071L8.70711 9.29289L4.45711 5.04289L3.04289 6.45711ZM7.29289 10.7071L9.52513 12.9393L10.9393 11.5251L8.70711 9.29289L7.29289 10.7071ZM14.4749 12.9393L16.7071 10.7071L15.2929 9.29289L13.0607 11.5251L14.4749 12.9393ZM16.7071 10.7071L20.9571 6.45711L19.5429 5.04289L15.2929 9.29289L16.7071 10.7071ZM15.2929 10.7071L20.2929 15.7071L21.7071 14.2929L16.7071 9.29289L15.2929 10.7071ZM3.70711 15.7071L8.70711 10.7071L7.29289 9.29289L2.29289 14.2929L3.70711 15.7071ZM5 18C4.44772 18 4 17.5523 4 17H2C2 18.6569 3.34315 20 5 20V18ZM20 17C20 17.5523 19.5523 18 19 18V20C20.6569 20 22 18.6569 22 17H20ZM9.52513 12.9393C10.892 14.3062 13.108 14.3062 14.4749 12.9393L13.0607 11.5251C12.4749 12.1109 11.5251 12.1109 10.9393 11.5251L9.52513 12.9393ZM19 6C19.5523 6 20 6.44772 20 7H22C22 5.34315 20.6569 4 19 4V6ZM5 4C3.34315 4 2 5.34315 2 7H4C4 6.44772 4.44772 6 5 6V4Z"
                            fill="#0194f3"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <tr>Email:</tr>
                        <tr>
                          <a href="mailto:hotelops@traveloka.com">
                            <span className="c-text css-1d279ga">
                              hotelops@traveloka.com
                            </span>
                          </a>
                        </tr>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.56974 3.04319C6.40547 2.88021 7.4164 3.04229 8.03369 3.7587C8.0376 3.76323 8.04143 3.76784 8.04517 3.77251L10.8849 7.31805C11.0118 7.46695 11.115 7.63794 11.1595 7.83391C11.2071 8.04316 11.1787 8.24166 11.1012 8.41672C10.6611 9.41126 9.27277 9.6049 8.71101 10.5299C8.6067 10.7016 8.57158 10.8728 8.64259 11.107C9.04217 12.4251 11.2944 14.7491 12.7155 15.1799C12.9498 15.2509 13.1209 15.2158 13.2926 15.1115C14.2178 14.5497 14.4112 13.1612 15.406 12.7213C15.5811 12.6439 15.7796 12.6156 15.9888 12.6631C16.1848 12.7077 16.3557 12.8109 16.5046 12.9378L20.0499 15.7773C20.0546 15.781 20.0592 15.7848 20.0637 15.7887C20.7801 16.406 20.9422 17.417 20.7793 18.2527C20.2553 20.9406 16.3088 21.0331 14.2025 20.7423C12.0374 20.4434 9.52604 19.3912 6.97874 16.8439C4.43091 14.2961 3.39638 11.8018 3.10672 9.64493C2.82424 7.54156 2.87865 3.56797 5.56974 3.04319Z"
                            fill="#0194f3"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <tr>Phone:</tr>
                        <tr>
                          <a href="tel:+61 290537142">
                            <span className="c-text css-1d279ga">
                              +61 290537142
                            </span>
                          </a>
                        </tr>
                      </td>
                    </tr>
                  </table>
                </Form>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UnderReview;
