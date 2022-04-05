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

function Agreement() {
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
                  <a href="../component/View1.tsx" className="list-group-item">
                    General Information
                  </a>
                </Button>
                <Button variant="light">
                  <a href="../component/View2.tsx" className="list-group-item">
                    Property detail
                  </a>
                </Button>
                <Button variant="light">
                  <a href="../component/View3.tsx" className="list-group-item">
                    Property Facilities
                  </a>
                </Button>
                <Button variant="light">
                  <a className="list-group-item">Rooms</a>
                </Button>
                <Button variant="light">
                  <a className="list-group-item">Rooms Facility</a>
                </Button>
                <Button variant="light">
                  <a className="list-group-item">photos</a>
                </Button>
                <Button variant="light">
                  <a className="list-group-item">payment information</a>
                </Button>
                <Button variant="light">
                  <a className="list-group-item">review property</a>
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
                    <b>Contract Signatory Information</b>
                  </h1>
                </tr>
                <tr>
                  <span>
                    The person below acknowledge that s/he is legally authorized
                    to sign the Contract Agreement. All fields are mandatory.
                  </span>
                </tr>
                <Form>
                  <Table
                    responsive
                    className="c-flexbox c-collapse-header c-collapse-header--is-closed grayBackground css-rapf31"
                  >
                    <tr>
                      <td>
                        <div
                          className="c-block flex_1"
                          style={{ marginRight: 16 }}
                        >
                          <label
                            className="c-label c-label--theme-tera css-cn0vwd"
                            style={{ marginBottom: 0 }}
                          >
                            <span>Full Name</span>
                          </label>
                          <span className="c-text css-1hvjmdo">
                            <span>as stated in a valid ID Card</span>
                          </span>
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>
                        <ReactBootstrap.FormGroup
                          className="mb-3"
                          controlId="formName"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Please type your full name here..."
                          />
                        </ReactBootstrap.FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div
                          className="c-block flex_1"
                          style={{ marginRight: 16 }}
                        >
                          <label
                            className="c-label c-label--theme-tera css-cn0vwd"
                            style={{ marginBottom: 0 }}
                          >
                            <span>Role</span>
                          </label>
                          <span className="c-text css-1hvjmdo">
                            <span>To be stated in signed contract</span>
                          </span>
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>
                        <ReactBootstrap.FormGroup
                          className="mb-3"
                          controlId="formName"
                        >
                          <Form.Control type="text" placeholder="Select" />
                        </ReactBootstrap.FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div
                          className="c-block flex_1"
                          style={{ marginRight: 16 }}
                        >
                          <label
                            className="c-label c-label--theme-tera css-cn0vwd"
                            style={{ marginBottom: 0 }}
                          >
                            <span>Email Address</span>
                          </label>
                          <span className="c-text css-1hvjmdo">
                            <span>For OTP verification purpose</span>
                          </span>
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>
                        <ReactBootstrap.FormGroup
                          className="mb-3"
                          controlId="formName"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Please type a valid email address here..."
                          />
                        </ReactBootstrap.FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div
                          className="c-block flex_1"
                          style={{ marginRight: 16 }}
                        >
                          <label
                            className="c-label c-label--theme-tera css-cn0vwd"
                            style={{ marginBottom: 0 }}
                          >
                            <span>Mobile Phone Number</span>
                          </label>
                          <span className="c-text css-1hvjmdo">
                            <span>For OTP verification purpose</span>
                          </span>
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>
                        <td>
                          <div className="c-block css-2ftmoj">
                            <img
                              width={25.99}
                              height={20}
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22flag-icon-css-au%22%20width%3D%22640%22%20height%3D%22480%22%3E%3Cg%20stroke-width%3D%221pt%22%3E%3Cpath%20fill%3D%22%23006%22%20d%3D%22M0%200h640v480H0z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200v28l307%20222h38.7v-28L38.7%200H0zm345.7%200v28l-307%20222H0v-28L307%200h38.7z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M144%200v250h57.6V0H144zM0%2083.3v83.4h345.7V83.3H0z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23c00%22%20d%3D%22M0%20100v50h345.7v-50H0zM155.6%200v250H190V0h-34.5zM0%20250l115.2-83.3H141L25.8%20250H0zM0%200l115.2%2083.3H89.5L0%2018.6V0zm204.7%2083.3L319.9%200h25.8L230.5%2083.3h-25.8zm141%20166.7l-115.2-83.3h25.7l89.5%2064.7V250z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M299.8%20392.5l-43.7%203.8%206%2043.4L232%20408l-30.1%2031.7%206-43.4-43.7-3.8%2037.7-22.3-24.3-36.5%2041%2015.5%2013.4-41.7%2013.5%2041.7%2041-15.5-24.3%2036.5m224.4%2062.3L476%20416.7l17.8%206.7%205.8-18.1%205.8%2018.1%2017.8-6.7-10.5%2015.8%2016.4%209.7-19%201.7%202.6%2018.9-13-13.9-13.2%2013.9%202.6-18.9-19-1.6m16.4-291.9L476%20134.6l17.8%206.7%205.8-18.1%205.8%2018.1%2017.8-6.7-10.5%2015.8%2016.4%209.8-19%201.6%202.6%2018.9-13-13.8-13.2%2013.7%202.6-18.8-19-1.6M380.8%20265l-10.5-15.8%2017.8%206.7%205.8-18.1%205.9%2018.1%2017.8-6.7-10.6%2015.8%2016.4%209.7-19%201.7%202.7%2018.9-13.2-13.9-13%2013.9%202.5-18.9-19-1.6m216.3-38L570%20221l17.8%206.7%205.8-18.1%205.9%2018.1%2017.8-6.7-10.5%2015.8%2016.3%209.7-19%201.7%202.6%2018.8-13-13.8-13.2%2013.8%202.6-18.8-19-1.7M542%20320l-10.3%206.5%202.9-11.9-9.3-7.8%2012.1-1%204.6-11.2%204.7%2011.3%2012.1.9-9.3%207.8%202.9%2011.9%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                              alt="Australia"
                            ></img>
                          </div>
                        </td>
                        <td>
                          <PhoneInput country={"vn"} />
                        </td>
                      </td>
                    </tr>

                    <tr>
                      <div className="c-checkbox c-checkbox--theme-tera css-1x1rsp6">
                        <td>
                          <Checkbox defaultChecked />
                        </td>
                        <td>
                          <span>
                            I hereby acknowledge that I am the authorized
                            signatory for the contract (Business Owner, CEO,
                            President, or equivalent)
                          </span>
                        </td>
                      </div>
                    </tr>
                  </Table>
                </Form>
              </Row>
            </Col>

            <Row align="right" display="inline">
              <Col>
                <Button variant="outline-dark" size="lg">
                  Save and go to previous section
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  style={{ marginLeft: 16, backgroundColor: "orange" }}
                >
                  <span>
                    <span>Review Contract </span>
                  </span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{ alignItems: "flex-end" }}>Need Help?</div>
              </Col>
              <Col>
                <div style={{ alignItems: "flex-end" }}>
                  or Save and countinu later
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Agreement;
