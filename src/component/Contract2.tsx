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

function Contract2() {
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
                    <b>Review Your Property Contract Agreement</b>
                  </h1>
                </tr>

                <Form>
                  <Table
                    responsive
                    className="c-flexbox c-collapse-header c-collapse-header--is-closed grayBackground css-rapf31"
                  >
                    <thead>
                      <b>Authorized Signatory Information</b>
                    </thead>
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
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>Tung</td>
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
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>
                        General Manager
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
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>
                        MeoVan@gmail.com
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
                        </div>
                      </td>
                      <td style={{ alignItems: "flex-end" }}>+617689679796</td>
                    </tr>

                    <tr>
                      <Button
                        type="button"
                        className="c-btn c-btn--theme-tera c-btn--variant-blue c-btn--is-outline css-7mp1uz"
                        variant="outline-primary"
                      >
                        <span>
                          <span>Edit Signatory Information</span>
                        </span>
                      </Button>
                    </tr>
                    <tr>
                      <p>
                        <b>Property Contract Agreement</b>
                      </p>
                    </tr>
                    <tr>
                      {" "}
                      <table>
                        <div
                          className="c-block agreeBox"
                          style={{ marginBottom: 16 }}
                        >
                          <span>
                            <div>
                              <p className="hide-in-pdf">
                                The Parties hereby agree to, electronically, the
                                terms of all appendices to this Agreement. The
                                execution of this Agreement and/or use of the
                                Service indicate your acknowledgement and
                                unconditional acceptance of all terms and
                                conditions set out herein. For the avoidance of
                                doubt, the term “hotel” in this Agreement can
                                refer to any kind of accommodation property.
                              </p>
                              <br></br>
                              <p className="hide-in-pdf">
                                The Parties hereby agree that any signature
                                (including any electronic symbol or process
                                attached to, or associated with, an agreement or
                                other document and adopted by a Party with the
                                intent to sign, authenticate or accept such
                                agreement or document) hereto or to any other
                                document related to this Agreement, through
                                electronic means shall have the same legal
                                validity and enforceability as a manually
                                executed signature or use of a paper-based
                                recordkeeping system to the maximum extent
                                permitted by applicable law, including the
                                Singapore’s Electronic Transaction Act (Chapter
                                88), and the Parties hereby waive any objection
                                to the contrary. The Parties agree that any
                                electronically signed document (including this
                                Agreement) shall be deemed (i) to be "written"
                                or "in writing," (ii) to have been signed and
                                (iii) to constitute a record established and
                                maintained in the ordinary course of business
                                and an original written record when printed from
                                electronic files. Such paper copies or
                                "printouts," if introduced as evidence in any
                                judicial, arbitral, mediation or administrative
                                proceeding, will be admissible as between the
                                Parties to the same extent and under the same
                                conditions as other original business records
                                created and maintained in documentary form.
                                Neither Party shall contest the admissibility of
                                true and accurate copies of electronically
                                signed documents on the basis of the best
                                evidence rule or as not satisfying the business
                                records exception to the hearsay rule.
                              </p>

                              <p className="appendix first-appendix">
                                APPENDIX 1: GENERAL TERMS &amp; CONDITIONS
                              </p>

                              <p className="section">OUR SERVICES</p>

                              <p className="section-desc">
                                As part of the Service, We will provide details
                                about your Hotel (and, where applicable, all
                                participating hotels mentioned in the Annex) on
                                traveloka.com and facilitate reservation
                                transactions between you and any person making a
                                booking via Traveloka's websites ("guests"). In
                                doing so:
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  DISTRIBUTION:{" "}
                                </span>
                                We will arrange an appropriate format and
                                subject to our approval, to be distributed with
                                such websites and agencies ("Sites") as we
                                consider appropriate for the purpose of driving
                                last minute and year round reservations for your
                                Hotel, including but not limited to
                                www.traveloka.com.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  EXTRANET:{" "}
                                </span>
                                We will provide you with the access to an online
                                facility called "Extranet" to update your rates
                                and availability (both last minute and full
                                year), and Information. For the purposes of
                                satisfying its obligations under this Agreement,
                                we may assign to the Hotel a unique user ID and
                                password to access the designated module.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  REFER COMPLAINTS:{" "}
                                </span>
                                We will refer disputes or complaints relating to
                                the guest's stay at your Hotel to you for
                                resolution.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  ACCURACY:{" "}
                                </span>
                                We reserve the right, without notice, to amend
                                or delete any Information on the Sites which, in
                                our sole discretion, is defamatory, obscene,
                                materially inaccurate, in breach of any law or
                                advertising code of practice, or provides direct
                                references to your websites, e-mails or
                                telephone numbers.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  COMMISSION:{" "}
                                </span>
                                This Agreement binds you to pay Traveloka a
                                minimum commission as set out in Appendix 2
                                based on the final selling rates, inclusive of
                                all taxes and service charges. The commission
                                level is linked to the ranking of your hotel on
                                our website. At any point in time, you can
                                decide to improve your hotel ranking on our
                                website by increasing the commission through our
                                Extranet.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  NON-EXCLUSIVE BASIS:
                                </span>
                                This Agreement is made on a non-exclusive basis.
                              </p>

                              <p className="section">YOUR OBLIGATIONS</p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  ROOM &amp; TARIFF INFORMATION:{" "}
                                </span>
                                You are responsible for updating the Extranet on
                                a regular basis, ensuring that all Information
                                is accurate and up to date at all times,
                                including prices, details on room availability
                                and all other relevant Information. If the
                                Information you provide is wrong or misleading,
                                or you omit to provide and/or update any
                                relevant Information, you agree to fully
                                indemnify us and hold us harmless against all
                                loss, liability or costs incurred by us and all
                                loss, liability or costs incurred by third
                                parties claimed against us as a result. Neither
                                we nor our business partners can accept
                                responsibility for any incorrect or
                                over-bookings or incorrect rates which result
                                from your failure to accurately update the
                                Extranet.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  CONSOLIDATION OF RECORDS:{" "}
                                </span>
                                You shall maintain records in relation to the
                                Guests' stay in the Hotel and provide them to
                                Traveloka upon Traveloka's request.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  EXTRANET:{" "}
                                </span>
                                The Hotel agrees to update the rates and
                                allotments of room for Traveloka via Extranet.
                                The Hotel shall provide accommodation services
                                to a guest in accordance with the details of the
                                guest's booking as stated on booking
                                confirmation information sent to the guest by
                                Traveloka. Your Hotel can check all ookings made
                                and cancellations via the Extranet. We will also
                                deliver reservations to your Hotel by email or
                                Extranet notification. In case of changes to
                                e-mail address, you must notify us immediately.
                                The Hotel shall not make claim for any damage or
                                loss whether direct or indirect arising from any
                                unauthorised use of the Hotel's user ID and/or
                                password.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  GUARANTEED ROOM:{" "}
                                </span>
                                In the event of an incorrect booking or
                                over-booking caused by your failure to comply
                                with your obligation in the "Room &amp; Tariff
                                Information" clause (referred to above in "Your
                                Obligations", clause 1), you shall : (a) find
                                the guest alternative accommodation of equal or
                                better standard (such as, equal or better star
                                rating, room facilities, room size and hotel
                                facilities as used on Traveloka.com) than the
                                original booking, which is within your Hotel
                                facility and/or at least of at a reasonable
                                distance from the original Hotel, (b) provide
                                complimentary transport to and from the
                                alternative accommodation, and (c) absorb the
                                difference in room rate above the net rate
                                agreed at the time of booking.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  HONOUR CONTRACT:{" "}
                                </span>
                                You are bound to accept the guest as a
                                contractual party, to deal with the reservation
                                in accordance with all the information contained
                                in it, including supplementary information and
                                wishes made known by the guest. Our systems and
                                records that we use to monitor reservations to
                                your Hotel by fax, email, or through the
                                Extranet shall be conclusive evidence.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  RATE PARITY:{" "}
                                </span>
                                You must ensure that the selling rates you
                                update into the Extranet will be at least as
                                favorable as for the same product available for
                                sale or communicated via any other online
                                medium, including your websites ("Rate Parity
                                Guarantee").
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  AVAILABILITY PARITY:{" "}
                                </span>
                                You must ensure that the availability you update
                                into the Extranet will represent all your rate
                                plans and room types as are available for sale
                                or communicated via any other online medium,
                                including your websites ("Availability Parity
                                Guarantee"). As part of the Availability Parity
                                Guarantee, you will ensure that Traveloka will
                                at all times have "last room availability"
                                ("LRA"). LRA means that you must guarantee that
                                your last room available on any other online
                                medium or channel, your own website included,
                                will also be made available to Traveloka.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  PROMOTIONAL PARITY:{" "}
                                </span>
                                You must ensure that the promotions you update
                                into the Extranet, and which can be supported by
                                the Extranet system, will represent all your
                                promotions as are available for sale or
                                communicated via any other online medium or
                                channel, including your websites ("Promotional
                                Parity Guarantee").
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  COPYRIGHTS:{" "}
                                </span>
                                You must ensure that you have all the necessary
                                rights and authority to use, license or
                                authorize to use any copyrights, trade marks,
                                brands or logos referred to in your information.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  TRANSLATIONS AND GUEST REVIEWS EXCLUSIVE:{" "}
                                </span>
                                We may translate, edit and publish guest reviews
                                and your Information. You will not permit those
                                translations that we have made of your
                                Information nor our guest reviews to be used for
                                any other sales channels apart from our own. We
                                cannot be held liable for the content or
                                accuracy of such translations or guest reviews.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  INTELLECTUAL PROPERTY RIGHTS:{" "}
                                </span>
                                Traveloka and/or its affiliated companies are
                                the owners or right holders of certain
                                intellectual property rights, including but not
                                limited to trade marks, copyright, service
                                marks, logos, etc. Nothing in this Agreement
                                shall be construed as granting you a license or
                                any rights, implied or otherwise, to use or
                                possess any of the Traveloka intellectual
                                property rights. You will ensure that you have
                                all the necessary rights and authority to use,
                                license or authorize to use any copyrights,
                                trade marks, brands or logos referred to in your
                                information.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  ONLINE MARKETING INCLUSION:{" "}
                                </span>
                                You authorize us to promote your Hotel using
                                your name with online marketing, including but
                                not limited to email marketing and/or
                                pay-per-click ("PPC") advertising. We may run
                                campaigns at our discretion and we will pay the
                                advertising cost on our online marketing
                                campaigns. You may request reasonable
                                restrictions on the type of promotion channels
                                we select ourselves but you acknowledge that,
                                whilst we will attempt to prevent this, we do
                                not have full control over unsolicited and/or
                                illicit links and references to the Sites.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  SECURITY:{" "}
                                </span>
                                You must ensure that your User ID and
                                password/PIN for the Extranet are kept
                                confidential and not shared or revealed with any
                                unauthorized persons. You must inform us
                                immediately of any actual or suspected security
                                breaches, including but not limited to breaches
                                that involve the Extranet, the Information, or
                                the disclosure of the password/PIN for the
                                Extranet to unauthorized persons.
                              </p>

                              <p className="section-list section-list-point-counter">
                                <span className="pdf-u-font-weight-bold">
                                  CHECK-IN:{" "}
                                </span>
                                <span>
                                  All relevant guests' booking information
                                  (including amendments, if any) will be
                                  submitted to the Hotel prior to arrival of the
                                  guest(s).
                                </span>
                                <br></br>
                                <span className="pdf-section-list-content">
                                  The Hotel must ensure that the guests present
                                  the following items upon check-in:
                                </span>
                                <br></br>
                                <span className="section-list-point">
                                  Voucher and/or e-Voucher from Traveloka; and
                                </span>
                                <span className="section-list-point">
                                  Valid photo ID which matches the name on the
                                  voucher and/or e-Voucher.
                                </span>
                                <span className="pdf-section-list-content">
                                  The Hotel must verify these items. If any of
                                  the above items cannot be presented to the
                                  Hotel, or if the name on the photo ID does not
                                  match the name on the voucher, or in case of
                                  any other discrepancy, the Hotel must contact
                                  Traveloka immediately before allowing this
                                  guest to check-in under our voucher. If the
                                  Hotel fails to verify the data, Traveloka may
                                  choose to decline payment for such booking(s).
                                </span>
                              </p>

                              <p className="section">OTHER CONDITIONS</p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  RANKING:{" "}
                                </span>
                                The order in which hotels are listed on the
                                Sites (the “Ranking”) is determined unilaterally
                                by Traveloka using an automated algorithm which
                                considers factors including, but not limited to,
                                your committed and actual availability,
                                commission percentage, conversion (the ratio of
                                site visits to reservations made), sales of room
                                nights, cancellations, and guest reviews.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  SUSPENSION:{" "}
                                </span>
                                If we suspend the Service to your Hotel, this
                                means that your Hotel will not be able to accept
                                new reservations, and will not be visible on the
                                Sites. Without prejudice to other rights we may
                                choose to exercise, including termination, we
                                may suspend the Service provided to you for any
                                reason, including but not limited to: you
                                posting incorrect or misleading Information on
                                the Extranet; your failure to maintain
                                Information on the Extranet resulting in
                                over-bookings at your Hotel; your failure to
                                accept a reservation at the price shown on a
                                reservation; you overcharging us; us receiving
                                one or more legitimate and serious complaint(s)
                                from one or more guest(s); misuse of the guest
                                review process; repeated or ongoing unresolved
                                Rate, Availability and/or Promotional Parity
                                Guarantee issues; inappropriate or
                                unprofessional behavior towards guests or our
                                staff;any breach of your Obligations; and your
                                breach of any term and condition of this
                                Agreement.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  CHANGES:{" "}
                                </span>
                                This is version 1.0 of the Agreement. We may
                                amend the terms and conditions of this Agreement
                                at any time. Amendments must come into force no
                                earlier than one month after being communicated
                                to you. If you do not actively acknowledge or
                                contest the revised terms before they come into
                                force, your continued participation in the
                                Service shall constitute acceptance of the
                                amended terms. If you do not want to be bound by
                                the amended terms then you may choose to
                                terminate the Agreement in accordance with the
                                “Term and Termination” clause.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  REASONABLE EFFORTS:{" "}
                                </span>
                                We take care to ensure that the Service and
                                Sites remain fully functioning. However it may,
                                on occasions be necessary to close or suspend
                                provision of any of the Services on the Sites
                                for various purposes that Traveloka deems
                                appropriate, including but not limited to the
                                purposes of repair, maintenance or development.
                                Also, access to the Sites by guests or operation
                                of any of the Services by you may be interrupted
                                by circumstances beyond our control. We cannot
                                accept responsibility (to the extent permitted
                                by law) for any error, omission, interruption,
                                defect, downtime, interruption or delay in
                                operation or transmission or other failure to
                                provide the Service and Sites. Traveloka
                                provides, and the Hotel accepts, the Service on
                                an “as is” and “as available” basis and
                                Traveloka makes no representations or warranties
                                with regard to the same.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  LIMITATION OF LIABILITY:{" "}
                                </span>
                                Without prejudice to what is set out in this
                                Agreement, each party's liability is limited and
                                excluded to the maximum extent permitted by law,
                                such as for personal injury and death. In no
                                event shall either party be liable to the other
                                for loss of goodwill, loss of profits, loss of
                                use of data, interruption of business, cost of
                                removal and reinstallation of goods or for any
                                indirect, special, incidental, punitive or
                                consequential damages or other economic loss
                                whether such damages or losses are alleged to
                                have been caused by tortious conduct or breach
                                of contract or otherwise, even if the other
                                party has been informed of the possibility of
                                such damages. Save as otherwise provided for in
                                this Agreement and without prejudice to the
                                indemnity wording, the maximum liability of one
                                party to the other in aggregate for any and all
                                claims made against such other party in
                                contract, tort or otherwise, under or in
                                connection with this Agreement must in any event
                                not exceed the aggregate commission received or
                                paid by such party in the three months preceding
                                the time when the claim is made. Either party's
                                right to make a claim shall be considered waived
                                if no claim is made within 6 months after the
                                event giving rise to such claim.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  INDEMNITY:
                                </span>
                                You agree to hold harmless and indemnify us from
                                any claim, suit or action arising from or in
                                connection with your breach of this Agreement or
                                for any negligent or wrongful act performed by
                                you (including your employees, agents and
                                sub-contractors), including any damages, legal
                                fees and court fees. Traveloka shall not be
                                liable for any damages caused by the guest or
                                any incidental charges incurred by the guest
                                while staying at the Hotel.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  USE OF CUSTOMER DATA - DATA PROTECTION:{" "}
                                </span>
                              </p>

                              <p className="section-sub-list">
                                Each party (including their employees and
                                sub-contractors) shall comply with relevant data
                                protection legislation and its applicable
                                subsidiary regulations and guidelines in force,
                                are met in performing all obligations under this
                                Agreement.
                              </p>

                              <p className="section-sub-list">
                                You may only use the customer data and other
                                personal data we provide for the purposes of
                                providing the accommodation to the guest. You
                                must not use or disclose this personal data in
                                connection with unsolicited marketing activities
                                or offers. You must at all times use reasonable
                                and appropriate security measures to protect
                                personal data against corruption, modification,
                                damage and destruction, as well as against
                                unauthorized access, collection, copying, use or
                                disclosure. Such measures must include, among
                                other things, data encryption and channel
                                encryption, for both personal data in storage
                                and in transit. You must cease to retain the
                                personal data once the purpose for which the
                                personal data is collected is no longer served
                                by retention of the personal data, and retention
                                is no longer necessary for legal or business
                                purposes. For transfer of personal data
                                overseas, you shall ensure that the standard of
                                protection to personal data in the recipient
                                entity is in line with international data
                                protection norms. You must notify us of any
                                actual or suspected security breach as promptly
                                as possible (not later than 1 day after
                                discovering the breach).
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  TERM AND TERMINATION:{" "}
                                </span>
                              </p>

                              <p className="section-sub-list">
                                This Agreement shall be valid for one (1) year
                                from the date of signing by the last signatory
                                and shall be renewed automatically at the end of
                                the period unless terminated by Traveloka by
                                providing a written notice of at least thirty
                                (30) days prior to the expiry of the Agreement.
                                Notwithstanding the foregoing, this Agreement
                                may be terminated at any time for any reason by
                                either party by giving thirty (30) days prior
                                written notice to the other. Any existing
                                reservations from Traveloka at the time of
                                termination must be honored by you, and all
                                provisions herein with respect to these
                                reservations must survive the termination of
                                this Agreement.
                              </p>

                              <p className="section-sub-list">
                                Such termination will be without prejudice to
                                any clauses stated to survive in this Agreement,
                                as well as any accrued rights arising under the
                                Agreement.
                              </p>

                              <p className="section">GENERAL CONDITIONS</p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  ENTIRE AGREEMENT:{" "}
                                </span>
                                This Agreement (including the Appendixes, if
                                any) is the only and whole Agreement between you
                                and us relating to the Service and supersedes
                                and replaces any prior written or oral
                                agreements, representations, warranties or
                                understandings between them. This clause is
                                without prejudice to the provisions relating to
                                changes or the parties' rights to conclude
                                addenda or amendments to this Agreement.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  SEVERABILITY:{" "}
                                </span>
                                In case any provision of this Agreement becomes
                                invalid or unenforceable, the parties shall
                                remain bound by the remainder of the Agreement,
                                and replace the invalid or unenforceable
                                provisions with new provisions having a similar
                                effect to the maximum extent possible.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  WAIVER:{" "}
                                </span>
                                Neither failure nor delay by a party to enforce
                                at any time any one or more of the terms or
                                conditions of this Agreement shall operate as a
                                waiver thereof, or of the right to subsequently
                                enforce all terms and conditions of this
                                Agreement. Any waiver given by a party is only
                                in relation to a specific breach for which the
                                waiver was given expressly in writing.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  ASSIGNMENT:{" "}
                                </span>
                                We may assign the delivery of the Service or
                                parts of it to associated and affiliated
                                companies or third parties. You may not assign
                                the rights and obligations under this Agreement
                                without our prior written consent.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  FORCE MAJEURE:{" "}
                                </span>
                                Neither party shall be liable for any delay or
                                default in performing hereunder if such delay or
                                default is caused by conditions beyond its
                                control including, but not limited to natural
                                disasters, government restrictions, wars,
                                terrorism, insurrections, nuclear
                                incidentsand/or any other cause beyond the
                                control of the party whose performance is
                                affected (“Force Majeure Event”). You shall
                                notify us in writing as soon as possible of any
                                Force Majeure Event and its full details. In the
                                event your obligations are affected by a Force
                                Majeure Event for thirty (30) days or longer, we
                                reserve the right to terminate this Agreement.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  LEGAL COMPLIANCE:{" "}
                                </span>
                                Each party must make best efforts to ensure full
                                compliance with applicable laws and regulations.
                                Both parties agree that, in connection with this
                                Agreement, they will not corruptly solicit or
                                receive or agree to receive, or corruptly give,
                                promise or offer to any person, any
                                gratification as an inducement to or reward for:
                                (i) any person to do or refrain from doing
                                anything, or (ii) any member, officer or servant
                                of a public body doing or refraining to do
                                anything, in respect of any matter or
                                transaction in which such public body is
                                concerned. If one Party breaches this clause,
                                the other Party may terminate this Agreement.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  REPRESENTATIONS &amp; WARRANTIES:{" "}
                                </span>
                              </p>

                              <p className="section-sub-list">
                                The Hotel hereby warrants that it has corporate
                                power and all required licenses, permits and
                                authorizations of any kind to carry on its
                                business as it is now being conducted and has
                                the full right, power, and authority to enter
                                into this Agreement.
                              </p>

                              <p className="section-sub-list">
                                At the time of signing of this Agreement, the
                                Hotel warrants that there are no economic or
                                trade sanctions or equivalent issued by
                                national, foreign or international governmental
                                bodies or authorities applicable to the Hotel,
                                its employees, representatives, owners, or
                                affiliates, which could affect their capacity to
                                enter into this Agreement.
                              </p>

                              <p className="section-sub-list">
                                The hotel will hold Traveloka harmless in case
                                of breach of this provisions.
                              </p>

                              <p className="section-sub-list">
                                The Hotel warrants that all information provided
                                by it to Traveloka or Traveloka's guests are
                                true and accurate as of that date and time.
                              </p>

                              <p className="section-sub-list">
                                The Hotel warrants that it will act in good
                                faith at all times towards Traveloka and provide
                                such assistance and co-operation as practicable
                                upon request by Traveloka, including and not
                                limited to promptly dealing with any complaint
                                or booking enquiry concerning accommodation
                                provided to guests from Traveloka.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  NO PARTNERSHIP:{" "}
                                </span>
                                This Agreement shall not constitute or imply any
                                partnership, joint venture, agency, fiduciary
                                relationship or other relationship between the
                                parties other than the contractual relationship
                                expressly provided for in this Agreement.
                                Neither party shall have, nor represent that it
                                has, any authority to make any commitment on the
                                other party's behalf.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  CONFIDENTIALITY:{" "}
                                </span>
                                You acknowledge that the Service contains
                                confidential and highly sensitive material. You
                                therefore agree to maintain in strict confidence
                                any such and other business sensitive and
                                confidential information (including, for the
                                avoidance of doubt, the terms of this Agreement)
                                and apply security measures no less stringent
                                than the measures which you apply to protect
                                your own like information, but not less than a
                                reasonable degree of care, to prevent
                                unauthorized disclosure and use of the
                                confidential information. Disclosure is only
                                allowed with explicit prior permission or as may
                                be required by law.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  GOVERNING LAW:{" "}
                                </span>
                                This Agreement will be governed by and construed
                                in accordance solely with the laws of the
                                Republic of Singapore. The Parties agree to
                                submit to exclusive jurisdiction of the
                                Singapore courts.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  LANGUAGE:{" "}
                                </span>
                                This Agreement is drawn up in the English
                                language. In case of conflict between the
                                English language version and any such
                                translation, the English language version shall
                                prevail. Headings in this Agreement are inserted
                                for convenience only and shall not affect the
                                interpretation or construction of this
                                Agreement.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  RIGHTS OF THIRD PARTIES:{" "}
                                </span>
                                Except where expressly stated, nothing in this
                                contract is intended to grant to any third party
                                any right to enforce any term of this Agreement
                                or to confer on any third party any benefits
                                under this Agreement.
                              </p>

                              <p className="section-list">
                                <span className="pdf-u-font-weight-bold">
                                  NOTIFICATION:{" "}
                                </span>
                                Notices given pursuant to this Agreement shall
                                be deemed sufficiently given if they are in
                                writing and forwarded by registered post or
                                recorded delivery service or equivalent to us,
                                at our registered address listed above, or
                                otherwise notified.
                              </p>

                              <p className="appendix appendix-list-counter">
                                APPENDIX 2: SPECIFIC TERMS &amp; CONDITIONS
                              </p>

                              <p>
                                The minimum commission rate shall be 17% of the
                                final selling rate, inclusive of all taxes and
                                service charges.
                              </p>

                              <p className="appendix">
                                APPENDIX 3: PAYMENT TERMS &amp; CONDITIONS
                              </p>
                              <p className="appendix-list">
                                <span className="pdf-u-font-weight-bold">
                                  PAYMENT INFORMATION
                                </span>
                              </p>

                              <p className="appendix-sub-list">
                                You are responsible for updating the Extranet,
                                ensuring that all Information is accurate and up
                                to date at all times, regarding payment details.
                              </p>

                              <p className="appendix-sub-list">
                                Any changes made by the Hotel or made on behalf
                                of the Hotel that is submitted and accepted
                                through Extranet regarding commission level,
                                payment method, payment schedule and accounting
                                information will replace information provided on
                                this Agreement, particularly regarding
                                commission level (referred to above in Appendix
                                2); and accounting information, payment schedule
                                &amp; payment method (referred to below in the
                                “Payment” Clause) and accepted as legally
                                binding by both parties.
                              </p>

                              <p className="appendix-sub-list">
                                If the Information you provide is wrong or
                                misleading, or you omit any relevant
                                Information, you agree to fully indemnify us and
                                hold us harmless against all loss, liability or
                                costs incurred by us or claimed by third parties
                                as a result. Neither we nor our business
                                partners can accept responsibility for any
                                incorrect payment information or commission
                                levels which result from your failure to
                                accurately update the Extranet.
                              </p>

                              <p className="appendix-list">
                                <span className="pdf-u-font-weight-bold">
                                  PAYMENT TERMS
                                </span>
                              </p>

                              <p className="appendix-sub-list">
                                Traveloka will settle payment for confirmed
                                reservations via the payment method as agreed
                                upon by both Parties. The parties agree to the
                                following payment terms as indicated in this
                                Appendix. You agree to indemnify us against any
                                liability, such as for any delays, losses or
                                costs, resulting from inaccurate information or
                                omissions provided by you in this Appendix.
                              </p>

                              <p className="appendix-sub-list">
                                Traveloka will pay for net room rates, after
                                deducting Traveloka commission according to the
                                agreed payment terms in this Appendix and as
                                otherwise notified to you by Traveloka. A
                                summary of the transaction receipt will be sent
                                to you at the time of payment. For the avoidance
                                of doubt, any discount provided by the Hotel to
                                a Guest shall not affect any commission amount
                                due and payable to Traveloka.
                              </p>

                              <p className="appendix-sub-list">
                                If you select the payment term “prepaid before
                                guest arrival or before guest check out”, this
                                term will only be valid for the first three
                                months from the date this Agreement is signed.
                                After this period, you must select another
                                payment term. We recommend changing the payment
                                term to “monthly”.
                              </p>

                              <p className="appendix-sub-list">
                                All payment-related charges must be borne by the
                                Hotel. The Hotel will receive payment in the
                                same currency as the currency of the receiving
                                bank account, with the provision that all room
                                tariffs are denominated in the same currency.
                                You may change the receiving currency by giving
                                written notice thirty (30) days prior to the
                                change to be applied by Traveloka.
                              </p>

                              <p className="appendix-sub-list">
                                In case of dispute, discrepancy, investigation
                                or audit by government or law enforcement
                                authorities, you must produce evidence of guest
                                occupancy.
                              </p>

                              <p className="appendix-sub-list">
                                If your Hotel fails to make payment claim within
                                150 days after a guest’s checkout, the Hotel
                                must not assert any claim against Traveloka with
                                respect to that reservation. You must obtain
                                payment from Guests for all incidental charges
                                that they may incur in excess of the room charge
                                as stated in the booking confirmation from us.
                              </p>
                            </div>
                          </span>
                        </div>
                      </table>
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
                    <span>Continue to Verification </span>
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

export default Contract2;
