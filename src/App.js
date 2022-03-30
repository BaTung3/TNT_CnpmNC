import logo from "./logo.svg";
import "./App.css";
import { Button } from "bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

const stylepad = {
  "margin-left": "5px",
  padding: "0px",
};

function App() {
  return (
    <div>
      <div id="__next">
        <div class="css-tm7399">
          <div class="css-74f4ob">
            <div class="hnetHeader">
              <div class="hnetHeaderWrapper">
                <div
                  class="c-container css-993e3p" //style="margin-top: 8px"
                >
                  <div
                    class="c-row css-1724821"
                    //style="padding-right: 15px; padding-left: 15px"
                  >
                    <div class="c-column css-15e6iv3">
                      <div class="hnet-header-logo-menu">
                        <img
                          src="data:image/png;base64,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"
                          alt="TERA Logo"
                        />
                      </div>
                    </div>
                    <div class="c-column css-15e6iv3">
                      <span class="c-text css-1d279ga">
                        <span>Logged-in as:</span> baztung@gmail.com
                      </span>
                    </div>
                    <div
                      align="right"
                      class="c-column css-bv1y1v marginLeftAvatarTitle"
                      //style="padding-right: 15px"
                    >
                      <h4
                        class="c-text css-dxtu4k"
                        //style="margin-bottom: 5px"
                      >
                        NULL
                      </h4>
                      <span class="c-text css-1d279ga">
                        baztung@gmail.com |<span>Registration no :</span>{" "}
                        67830343
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hnet-headerMarginBottom"></div>
          </div>
        </div>
        <div class="_1gAb6isH7eIxnbcZi_Go9x">
          <div class="c-container css-993e3p">
            <div class="c-block css-38lglc css-1r3jf81">
              <div class="c-flexbox css-1omlsru">
                <div align="center" class="c-block css-mgngcc">
                  <div
                    class="c-loader c-loader--dotted c-loader--color-blue c-loader--size-md css-1fd6rce"
                    //style="margin-bottom: 24px"
                  >
                    <div class="c-loader__dot"></div>
                    <div class="c-loader__dot"></div>
                    <div class="c-loader__dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="c-row css-7nqw1l"
              //style="margin-bottom: 68px"
            >
              <div class="c-column css-15e6iv3">
                <div class="css-157tl12">
                  <span class="css-1sbrkly">
                    <div class="c-sidebar css-1l57xvu">
                      <div
                        class="c-block"
                        //style="margin-bottom: 16px"
                      >
                        <div
                          class="c-card css-vve6pp item_title c-card--has-body"
                          //style="width: 250px"
                        >
                          <div class="c-card-body css-7ihjuk">
                            <span class="c-text css-12air5h">
                              1. Property Information
                            </span>
                          </div>
                        </div>
                        <a class="c-sidebar-item c-sidebar-item--is-active css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>General Information</span>
                            </span>
                            <span
                              class="c-badge c-badge--color-red c-badge--pill css-1tlfaec"
                              //style="padding-right: 10px; padding-left: 10px"
                            >
                              9
                            </span>
                          </div>
                        </a>
                        <a class="c-sidebar-item css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Property Detail</span>
                            </span>
                            <span
                              class="c-badge c-badge--color-red c-badge--pill css-1tlfaec"
                              //style="padding-right: 10px; padding-left: 10px"
                            >
                              4
                            </span>
                          </div>
                        </a>
                        <a class="c-sidebar-item css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Property Facilities</span>
                            </span>
                            <svg
                              class="c-icon css-36kz25"
                              viewBox="0 0 24 24"
                              preserveAspectRatio="xMidYMid meet"
                              //style="color: rgb(11, 193, 117);height: 24px;width: 24px;"
                            >
                              <g id="check-circle">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a class="c-sidebar-item css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Rooms</span>
                            </span>
                            <span
                              class="c-badge c-badge--color-red c-badge--pill css-1tlfaec"
                              //style="padding-right: 10px; padding-left: 10px"
                            >
                              6
                            </span>
                          </div>
                        </a>
                        <a class="c-sidebar-item css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Room Facilities</span>
                            </span>
                            <svg
                              class="c-icon css-36kz25"
                              viewBox="0 0 24 24"
                              preserveAspectRatio="xMidYMid meet"
                              //style="color: rgb(11, 193, 117);height: 24px;width: 24px;"
                            >
                              <g id="check-circle">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a class="c-sidebar-item css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Photos</span>
                            </span>
                            <span
                              class="c-badge c-badge--color-red c-badge--pill css-1tlfaec"
                              //style="padding-right: 10px; padding-left: 10px"
                            >
                              2
                            </span>
                          </div>
                        </a>
                        <a class="c-sidebar-item css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Payment Information</span>
                            </span>
                            <span
                              class="c-badge c-badge--color-red c-badge--pill css-1tlfaec"
                              //style="padding-right: 10px; padding-left: 10px"
                            >
                              1
                            </span>
                          </div>
                        </a>
                        <a class="c-sidebar-item c-sidebar-item--is-disabled css-1sts0qf">
                          <div class="c-flexbox css-nb2z2f">
                            <span class="c-text css-1d279ga">
                              <span>Review Property</span>
                            </span>
                          </div>
                        </a>
                        <div class="c-block card_inactive">
                          <span>Mandatory Fields Progress</span>: 38%
                        </div>
                      </div>
                      <div
                        class="c-block"
                        //style="margin-bottom: 16px"
                      >
                        <div
                          class="c-card css-vve6pp item_title item_title__disabled c-card--has-body"
                          //style="width: 250px"
                        >
                          <div class="c-card-body css-7ihjuk">
                            <span class="c-text css-12air5h">
                              2. Contract Agreement
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="c-block" //style="margin-bottom: 16px">
                        <div
                          class="c-card css-vve6pp item_title item_title__disabled c-card--has-body"
                          //style="width: 250px"
                        >
                          <div class="c-card-body css-7ihjuk">
                            <span class="c-text css-12air5h">
                              3. Submission
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="c-column css-1wnq2uv">
                <div class="c-row css-7nqw1l" //style="margin-bottom: 16px">
                  <div class="c-column css-bv1y1v">
                    <h2 class="c-text css-dxtu4k">
                      <span>General Information</span>
                    </h2>
                  </div>
                </div>
                <div class="c-row css-7nqw1l">
                  <div class="c-column css-bv1y1v">
                    <div
                      class="c-box c-box--theme-tera css-so7arl"
                      //style="margin-bottom: 30px"
                    >
                      <div class="c-box-section c-box-section--header c-box-section--clearfix css-1mezapo">
                        <span>Property Details</span>
                      </div>
                      <div class="c-box-section c-box-section--clearfix css-1mezapo">
                        <div class="c-row css-7nqw1l">
                          <div
                            class="c-column css-1skutvr"
                            //style="margin-top: 8px"
                          >
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>Property Name</span>
                              <span class="c-label__required">*</span>
                            </label>
                          </div>
                          <div class="c-column css-g7l5sb">
                            <div class="c-input-group c-input-group--theme-tera css-15ssrb5">
                              <div class="c-input-group__inner">
                                <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder">
                                      <input
                                        name="generalInformation,propertyDetails,propertyName"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul class="css-1n4xsu1 --simple">
                                <li>
                                  <span>This section must be filled.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div
                            class="c-column css-1skutvr"
                            //style="margin-top: 8px"
                          >
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>Legal Entity Name</span>
                            </label>
                          </div>
                          <div class="c-column css-g7l5sb">
                            <div class="c-input-group c-input-group--theme-tera css-15ssrb5">
                              <div class="c-input-group__inner">
                                <div class="c-input c-input--theme-tera -control-container css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder">
                                      <input
                                        name="generalInformation,propertyDetails,legalEntityName"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div class="c-column css-1skutvr">
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>
                                Does This Property Have Different Name
                                Previously?
                              </span>
                            </label>
                          </div>
                          <div
                            class="c-column css-g7l5sb"
                            //style="margin-top: 8px"
                          >
                            <div
                              touched="true"
                              value="NO_PAST_NAME"
                              class="c-radio-group c-radio-group--theme-tera -control-container css-11huf6m css-fb668q"
                            >
                              <div class="c-radio c-radio--theme-tera c-radio--is-inline css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,previousNameBoolean"
                                  type="radio"
                                  value="YES_PAST_NAME"
                                  id="radio-343"
                                />
                                <label class="" for="radio-343">
                                  <span>Yes</span>
                                </label>
                              </div>
                              <div
                                class="c-radio c-radio--theme-tera c-radio--is-inline css-v3y73k"
                                //style="margin-left: 16px"
                              >
                                <input
                                  name="generalInformation,propertyDetails,previousNameBoolean"
                                  type="radio"
                                  value="NO_PAST_NAME"
                                  checked=""
                                  id="radio-344"
                                />
                                <label class="" for="radio-344">
                                  <span>No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div class="c-column css-1skutvr">
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>
                                Does This Property Belong to Particular Hotel
                                Chain?
                              </span>
                            </label>
                          </div>
                          <div
                            class="c-column css-g7l5sb"
                            //style="margin-top: 8px"
                          >
                            <div
                              touched="true"
                              value="NO_HOTEL_CHAIN"
                              class="c-radio-group c-radio-group--theme-tera -control-container css-11huf6m css-fb668q"
                            >
                              <div class="c-radio c-radio--theme-tera c-radio--is-inline css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,hotelChainBoolean"
                                  type="radio"
                                  value="YES_HOTEL_CHAIN"
                                  id="radio-346"
                                />
                                <label class="" for="radio-346">
                                  <span>Yes</span>
                                </label>
                              </div>
                              <div
                                class="c-radio c-radio--theme-tera c-radio--is-inline css-v3y73k"
                                //style="margin-left: 16px"
                              >
                                <input
                                  name="generalInformation,propertyDetails,hotelChainBoolean"
                                  type="radio"
                                  value="NO_HOTEL_CHAIN"
                                  checked=""
                                  id="radio-347"
                                />
                                <label class="" for="radio-347">
                                  <span>No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div class="c-column css-1skutvr">
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>Property Type</span>
                              <span class="c-label__required">*</span>
                            </label>
                          </div>
                          <div
                            class="c-column css-bv1y1v"
                            //style="margin-top: 8px"
                          >
                            <div
                              touched="true"
                              value="OTHER"
                              class="c-radio-group c-radio-group--theme-tera -control-container css-11huf6m css-fb668q"
                            >
                              <div class="c-radio c-radio--theme-tera css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,propertyType"
                                  type="radio"
                                  value="HOTEL"
                                  id="radio-349"
                                />
                                <label class="" for="radio-349">
                                  <div class="css-19whsmz">
                                    <b>
                                      <span>Hotel</span>
                                    </b>
                                    <br />
                                    <span>
                                      Establishment that provides
                                      accommodations, meals, and other services
                                      for paying guests (travellers, tourists)
                                    </span>
                                  </div>
                                </label>
                              </div>
                              <div class="c-radio c-radio--theme-tera css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,propertyType"
                                  type="radio"
                                  value="HOSTEL_BACKPACKER_ACCOMMODATION"
                                  id="radio-350"
                                />
                                <label class="" for="radio-350">
                                  <div class="css-19whsmz">
                                    <b>
                                      <span>Hostel</span>
                                    </b>
                                    <br />
                                    <span>
                                      Budget accommodation (usually shared-room
                                      type) rent by individual travellers
                                      (backpackers) or groups
                                    </span>
                                  </div>
                                </label>
                              </div>
                              <div class="c-radio c-radio--theme-tera css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,propertyType"
                                  type="radio"
                                  value="VILLA"
                                  id="radio-351"
                                />
                                <label class="" for="radio-351">
                                  <div class="css-19whsmz">
                                    <b>
                                      <span>Villa</span>
                                    </b>
                                    <br />
                                    <span>
                                      Furnished country house located in
                                      countryside area that is often rented for
                                      vacation purpose
                                    </span>
                                  </div>
                                </label>
                              </div>
                              <div class="c-radio c-radio--theme-tera css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,propertyType"
                                  type="radio"
                                  value="RESORT"
                                  id="radio-352"
                                />
                                <label class="" for="radio-352">
                                  <div class="css-19whsmz">
                                    <b>
                                      <span>Resort</span>
                                    </b>
                                    <br />
                                    <span>
                                      A fancy accommodation that is located in a
                                      very scenic or sometimes remote location
                                      without compromising modern technology and
                                      amenities
                                    </span>
                                  </div>
                                </label>
                              </div>
                              <div class="c-radio c-radio--theme-tera css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,propertyType"
                                  type="radio"
                                  value="APARTMENT"
                                  id="radio-353"
                                />
                                <label class="" for="radio-353">
                                  <div class="css-19whsmz">
                                    <b>
                                      <span>Apartment</span>
                                    </b>
                                    <br />
                                    <span>
                                      Serviced apartment complex with
                                      hotel-style booking system that enables
                                      travellers to stay for a period of time
                                    </span>
                                  </div>
                                </label>
                              </div>
                              <div class="c-radio c-radio--theme-tera css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,propertyType"
                                  type="radio"
                                  value="BED_AND_BREAKFAST"
                                  id="radio-354"
                                />
                                <label class="" for="radio-354">
                                  <div class="css-19whsmz">
                                    <b>
                                      <span>Bed and Breakfast</span>
                                    </b>
                                    <br />
                                    <span>
                                      An establishment that offers a spare room
                                      in private accommodation (e.g. private
                                      house, boarding house). It also provides
                                      breakfast
                                    </span>
                                  </div>
                                </label>
                              </div>
                              <div
                                class="c-flexbox css-k008qs"
                                //style="margin-top: 16px; margin-bottom: -15px"
                              >
                                <div
                                  class="c-radio c-radio--theme-tera css-v3y73k"
                                  //style="margin-top: 8px"
                                >
                                  <input
                                    name="generalInformation,propertyDetails,propertyType"
                                    type="radio"
                                    value="OTHER"
                                    checked=""
                                    id="radio-355"
                                  />
                                  <label class="" for="radio-355">
                                    <b>
                                      <span>Other</span>
                                    </b>
                                  </label>
                                </div>
                                <div
                                  class="c-block"
                                  //style="margin-left: 16px"
                                >
                                  <div
                                    class="c-select c-select--theme-tera -control-container css-yngrtg css-fb668q"
                                    //style="width: 250px"
                                  >
                                    <div class="select has-value">
                                      <input
                                        type="hidden"
                                        name="generalInformation,propertyDetails,otherPropertyType"
                                        value="HOMESTAY"
                                      />
                                      <div class="select-control">
                                        <div class="select-placeholder">
                                          <span>Homestay</span>
                                        </div>
                                        <div
                                          class="select-input"
                                          tabindex="0"
                                          //style="display: inline-block"
                                        >
                                          &nbsp;
                                        </div>
                                        <span class="select-arrow-zone">
                                          <span class="select-arrow"></span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="c-line css-1bw7h3e"></div>
                        <div class="c-row css-7nqw1l">
                          <div class="c-column css-1skutvr">
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>Property Address</span>
                            </label>
                          </div>
                          <div class="c-column css-bv1y1v">
                            <div class="c-block">
                              <label class="c-label c-label--theme-tera css-cn0vwd">
                                <span>Location</span>
                                <span class="c-label__required">*</span>
                              </label>
                              <div
                                name="generalInformation,propertyDetails,mapsLocation"
                                form="[object Object]"
                                value="[object Object]"
                                class="c-google-maps css-l4dssk"
                                //style="margin-bottom: 0px"
                              >
                                <div
                                //style="height: 100%;position: relative;overflow: hidden;"
                                >
                                  <div
                                  //style="height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgb(229, 227, 223);"
                                  >
                                    <div
                                      class="gm-style"
                                      //style="position: absolute;z-index: 0;left: 0px;top: 0px;height: 100%;width: 100%;padding: 0px;border-width: 0px;margin: 0px"
                                    >
                                      <div>
                                        <button
                                          draggable="false"
                                          aria-label="Phím tắt"
                                          title="Phím tắt"
                                          type="button"
                                          //style="
                                          background: none transparent;
                                          display: block;
                                          border: none;
                                          margin: 0px;
                                          padding: 0px;
                                          text-transform: none;
                                          appearance: none;
                                          position: absolute;
                                          cursor: pointer;
                                          user-select: none;
                                          z-index: 1000002;
                                          outline-offset: 3px;
                                          right: 0px;
                                          bottom: 0px;
                                          transform: translateX(100%);
                                        "
                                        ></button>
                                      </div>
                                      <div
                                        tabindex="0"
                                        aria-label="Map"
                                        aria-roledescription="map"
                                        role="group"
                                        //style="
                                        position: absolute;
                                        z-index: 0;
                                        left: 0px;
                                        top: 0px;
                                        height: 100%;
                                        width: 100%;
                                        padding: 0px;
                                        border-width: 0px;
                                        margin: 0px;
                                        cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'),
                                          default;
                                        touch-action: pan-x pan-y;
                                      "
                                      >
                                        <div
                                          //style="
                                          z-index: 1;
                                          position: absolute;
                                          left: 50%;
                                          top: 50%;
                                          width: 100%;
                                          transform: translate(0px, 0px);
                                        "
                                        >
                                          <div
                                            //style="
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            z-index: 100;
                                            width: 100%;
                                          "
                                          >
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 0px;
                                              top: 0px;
                                              z-index: 0;
                                            "
                                            >
                                              <div
                                                //style="
                                                position: absolute;
                                                z-index: 985;
                                                transform: matrix(
                                                  1,
                                                  0,
                                                  0,
                                                  1,
                                                  0,
                                                  0
                                                );
                                              "
                                              >
                                                <div
                                                  //style="
                                                  position: absolute;
                                                  left: 0px;
                                                  top: 0px;
                                                  width: 256px;
                                                  height: 256px;
                                                "
                                                >
                                                  <div
                                                    //style="
                                                    width: 256px;
                                                    height: 256px;
                                                  "
                                                  ></div>
                                                </div>
                                                <div
                                                  //style="
                                                  position: absolute;
                                                  left: -256px;
                                                  top: 0px;
                                                  width: 256px;
                                                  height: 256px;
                                                "
                                                >
                                                  <div
                                                    //style="
                                                    width: 256px;
                                                    height: 256px;
                                                  "
                                                  ></div>
                                                </div>
                                                <div
                                                  //style="
                                                  position: absolute;
                                                  left: -256px;
                                                  top: -256px;
                                                  width: 256px;
                                                  height: 256px;
                                                "
                                                >
                                                  <div
                                                    //style="
                                                    width: 256px;
                                                    height: 256px;
                                                  "
                                                  ></div>
                                                </div>
                                                <div
                                                  //style="
                                                  position: absolute;
                                                  left: 0px;
                                                  top: -256px;
                                                  width: 256px;
                                                  height: 256px;
                                                "
                                                >
                                                  <div
                                                    //style="
                                                    width: 256px;
                                                    height: 256px;
                                                  "
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            //style="
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            z-index: 101;
                                            width: 100%;
                                          "
                                          ></div>
                                          <div
                                            //style="
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            z-index: 102;
                                            width: 100%;
                                          "
                                          ></div>
                                          <div
                                            //style="
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            z-index: 103;
                                            width: 100%;
                                          "
                                          >
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 0px;
                                              top: 0px;
                                              z-index: -1;
                                            "
                                            >
                                              <div
                                                //style="
                                                position: absolute;
                                                z-index: 985;
                                                transform: matrix(
                                                  1,
                                                  0,
                                                  0,
                                                  1,
                                                  0,
                                                  0
                                                );
                                              "
                                              >
                                                <div
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  overflow: hidden;
                                                  position: absolute;
                                                  left: 0px;
                                                  top: 0px;
                                                "
                                                ></div>
                                                <div
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  overflow: hidden;
                                                  position: absolute;
                                                  left: -256px;
                                                  top: 0px;
                                                "
                                                ></div>
                                                <div
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  overflow: hidden;
                                                  position: absolute;
                                                  left: -256px;
                                                  top: -256px;
                                                "
                                                ></div>
                                                <div
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  overflow: hidden;
                                                  position: absolute;
                                                  left: 0px;
                                                  top: -256px;
                                                "
                                                ></div>
                                              </div>
                                            </div>
                                            <div
                                              //style="
                                              width: 27px;
                                              height: 43px;
                                              overflow: hidden;
                                              position: absolute;
                                              left: -14px;
                                              top: -43px;
                                              z-index: 0;
                                            "
                                            >
                                              <img
                                                alt=""
                                                src="./Traveloka - TERA_files/spotlight-poi2.png"
                                                draggable="false"
                                                //style="
                                                position: absolute;
                                                left: 0px;
                                                top: 0px;
                                                width: 27px;
                                                height: 43px;
                                                user-select: none;
                                                border: 0px;
                                                padding: 0px;
                                                margin: 0px;
                                                max-width: none;
                                              "
                                              />
                                            </div>
                                          </div>
                                          <div
                                            //style="
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            z-index: 0;
                                          "
                                          >
                                            <div
                                              //style="
                                              position: absolute;
                                              z-index: 985;
                                              transform: matrix(
                                                1,
                                                0,
                                                0,
                                                1,
                                                0,
                                                0
                                              );
                                            "
                                            >
                                              <div
                                                //style="
                                                position: absolute;
                                                left: 0px;
                                                top: 0px;
                                                width: 256px;
                                                height: 256px;
                                                transition: opacity 200ms linear
                                                  0s;
                                              "
                                              >
                                                <img
                                                  draggable="false"
                                                  alt=""
                                                  role="presentation"
                                                  src="./Traveloka - TERA_files/vt"
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  user-select: none;
                                                  border: 0px;
                                                  padding: 0px;
                                                  margin: 0px;
                                                  max-width: none;
                                                "
                                                />
                                              </div>
                                              <div
                                                //style="
                                                position: absolute;
                                                left: -256px;
                                                top: 0px;
                                                width: 256px;
                                                height: 256px;
                                                transition: opacity 200ms linear
                                                  0s;
                                              "
                                              >
                                                <img
                                                  draggable="false"
                                                  alt=""
                                                  role="presentation"
                                                  src="./Traveloka - TERA_files/vt(1)"
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  user-select: none;
                                                  border: 0px;
                                                  padding: 0px;
                                                  margin: 0px;
                                                  max-width: none;
                                                "
                                                />
                                              </div>
                                              <div
                                                //style="
                                                position: absolute;
                                                left: -256px;
                                                top: -256px;
                                                width: 256px;
                                                height: 256px;
                                                transition: opacity 200ms linear
                                                  0s;
                                              "
                                              >
                                                <img
                                                  draggable="false"
                                                  alt=""
                                                  role="presentation"
                                                  src="./Traveloka - TERA_files/vt(2)"
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  user-select: none;
                                                  border: 0px;
                                                  padding: 0px;
                                                  margin: 0px;
                                                  max-width: none;
                                                "
                                                />
                                              </div>
                                              <div
                                                //style="
                                                position: absolute;
                                                left: 0px;
                                                top: -256px;
                                                width: 256px;
                                                height: 256px;
                                                transition: opacity 200ms linear
                                                  0s;
                                              "
                                              >
                                                <img
                                                  draggable="false"
                                                  alt=""
                                                  role="presentation"
                                                  src="./Traveloka - TERA_files/vt(3)"
                                                  //style="
                                                  width: 256px;
                                                  height: 256px;
                                                  user-select: none;
                                                  border: 0px;
                                                  padding: 0px;
                                                  margin: 0px;
                                                  max-width: none;
                                                "
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          //style="
                                          z-index: 3;
                                          position: absolute;
                                          height: 100%;
                                          width: 100%;
                                          padding: 0px;
                                          border-width: 0px;
                                          margin: 0px;
                                          left: 0px;
                                          top: 0px;
                                          touch-action: pan-x pan-y;
                                        "
                                        >
                                          <div
                                            //style="
                                            z-index: 4;
                                            position: absolute;
                                            left: 50%;
                                            top: 50%;
                                            width: 100%;
                                            transform: translate(0px, 0px);
                                          "
                                          >
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 0px;
                                              top: 0px;
                                              z-index: 104;
                                              width: 100%;
                                            "
                                            ></div>
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 0px;
                                              top: 0px;
                                              z-index: 105;
                                              width: 100%;
                                            "
                                            ></div>
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 0px;
                                              top: 0px;
                                              z-index: 106;
                                              width: 100%;
                                            "
                                            >
                                              <span
                                                id="07E24AC9-CF6F-4076-8A48-C994827B56DF"
                                                //style="display: none"
                                              >
                                                Để đi theo chỉ dẫn, hãy nhấn các
                                                phím mũi tên.
                                              </span>
                                              <div
                                                title=""
                                                tabindex="-1"
                                                //style="
                                                width: 43px;
                                                height: 59px;
                                                overflow: hidden;
                                                position: absolute;
                                                cursor: pointer;
                                                touch-action: none;
                                                left: -22px;
                                                top: -51px;
                                                z-index: 0;
                                              "
                                              >
                                                <img
                                                  alt=""
                                                  src="./Traveloka - TERA_files/transparent.png"
                                                  draggable="false"
                                                  //style="
                                                  width: 43px;
                                                  height: 59px;
                                                  user-select: none;
                                                  border: 0px;
                                                  padding: 0px;
                                                  margin: 0px;
                                                  max-width: none;
                                                "
                                                />
                                              </div>
                                            </div>
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 0px;
                                              top: 0px;
                                              z-index: 107;
                                              width: 100%;
                                            "
                                            ></div>
                                          </div>
                                        </div>
                                        <div
                                          class="gm-style-moc"
                                          //style="
                                          z-index: 4;
                                          position: absolute;
                                          height: 100%;
                                          width: 100%;
                                          padding: 0px;
                                          border-width: 0px;
                                          margin: 0px;
                                          left: 0px;
                                          top: 0px;
                                          opacity: 0;
                                        "
                                        >
                                          <p class="gm-style-mot"></p>
                                        </div>
                                      </div>
                                      <iframe
                                        aria-hidden="true"
                                        frameborder="0"
                                        tabindex="-1"
                                        //style="
                                        z-index: -1;
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0px;
                                        left: 0px;
                                        border: none;
                                      "
                                        data-ruffle-polyfilled=""
                                        src="./Traveloka - TERA_files/saved_resource.html"
                                      ></iframe>
                                      <div
                                        //style="
                                        pointer-events: none;
                                        width: 100%;
                                        height: 100%;
                                        box-sizing: border-box;
                                        position: absolute;
                                        z-index: 1000002;
                                        opacity: 0;
                                        border: 2px solid rgb(26, 115, 232);
                                      "
                                      ></div>
                                      <div>
                                        <div
                                          class="gmnoprint"
                                          role="menubar"
                                          //style="
                                          margin: 10px;
                                          z-index: 0;
                                          position: absolute;
                                          cursor: pointer;
                                          left: 0px;
                                          top: 0px;
                                        "
                                        >
                                          <div
                                            class="gm-style-mtc"
                                            //style="
                                            float: left;
                                            position: relative;
                                          "
                                          >
                                            <button
                                              draggable="false"
                                              aria-label="Hiển thị bản đồ phố"
                                              title="Hiển thị bản đồ phố"
                                              type="button"
                                              role="menuitemradio"
                                              aria-checked="true"
                                              //style="
                                              background: none padding-box
                                                rgb(255, 255, 255);
                                              display: table-cell;
                                              border: 0px;
                                              margin: 0px;
                                              padding: 0px 23px;
                                              text-transform: none;
                                              appearance: none;
                                              position: relative;
                                              cursor: pointer;
                                              user-select: none;
                                              direction: ltr;
                                              overflow: hidden;
                                              text-align: center;
                                              height: 40px;
                                              vertical-align: middle;
                                              color: rgb(0, 0, 0);
                                              font-family: Roboto, Arial,
                                                sans-serif;
                                              font-size: 18px;
                                              border-bottom-left-radius: 2px;
                                              border-top-left-radius: 2px;
                                              box-shadow: rgba(0, 0, 0, 0.3) 0px
                                                1px 4px -1px;
                                              min-width: 56px;
                                              font-weight: 500;
                                            "
                                              id="6A3C9541-C2E7-481E-9E7A-155B593D30AE"
                                              aria-expanded="false"
                                            >
                                              Bản đồ
                                            </button>
                                            <ul
                                              role="menu"
                                              aria-labelledby="6A3C9541-C2E7-481E-9E7A-155B593D30AE"
                                              //style="
                                              background-color: white;
                                              list-style: none;
                                              padding: 2px;
                                              margin: 0px;
                                              z-index: -1;
                                              border-bottom-left-radius: 2px;
                                              border-bottom-right-radius: 2px;
                                              box-shadow: rgba(0, 0, 0, 0.3) 0px
                                                1px 4px -1px;
                                              position: absolute;
                                              left: 0px;
                                              top: 40px;
                                              text-align: left;
                                              display: none;
                                            "
                                            >
                                              <li
                                                tabindex="-1"
                                                role="menuitemcheckbox"
                                                aria-label="Hiển thị bản đồ phố với địa hình"
                                                draggable="false"
                                                title="Hiển thị bản đồ phố với địa hình"
                                                aria-checked="false"
                                                class="ssQIHO-checkbox-menu-item"
                                                //style="
                                                color: black;
                                                font-family: Roboto, Arial,
                                                  sans-serif;
                                                user-select: none;
                                                font-size: 18px;
                                                background-color: rgb(
                                                  255,
                                                  255,
                                                  255
                                                );
                                                padding: 7px 8px 7px 7px;
                                                direction: ltr;
                                                text-align: left;
                                                white-space: nowrap;
                                              "
                                              >
                                                <span>
                                                  <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22/%3E%3C/svg%3E"
                                                    alt=""
                                                    //style="
                                                    height: 1em;
                                                    width: 1em;
                                                    transform: translateY(
                                                      0.15em
                                                    );
                                                    display: none;
                                                  "
                                                  />
                                                  <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E"
                                                    alt=""
                                                    //style="
                                                    height: 1em;
                                                    width: 1em;
                                                    transform: translateY(
                                                      0.15em
                                                    );
                                                  "
                                                  />
                                                </span>
                                                <label //style="cursor: inherit">
                                                  Địa hình
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div
                                            class="gm-style-mtc"
                                            //style="
                                            float: left;
                                            position: relative;
                                          "
                                          >
                                            <button
                                              draggable="false"
                                              aria-label="Hiển thị hình ảnh qua vệ tinh"
                                              title="Hiển thị hình ảnh qua vệ tinh"
                                              type="button"
                                              role="menuitemradio"
                                              aria-checked="false"
                                              //style="
                                              background: none padding-box
                                                rgb(255, 255, 255);
                                              display: table-cell;
                                              border: 0px;
                                              margin: 0px;
                                              padding: 0px 23px;
                                              text-transform: none;
                                              appearance: none;
                                              position: relative;
                                              cursor: pointer;
                                              user-select: none;
                                              direction: ltr;
                                              overflow: hidden;
                                              text-align: center;
                                              height: 40px;
                                              vertical-align: middle;
                                              color: rgb(86, 86, 86);
                                              font-family: Roboto, Arial,
                                                sans-serif;
                                              font-size: 18px;
                                              border-bottom-right-radius: 2px;
                                              border-top-right-radius: 2px;
                                              box-shadow: rgba(0, 0, 0, 0.3) 0px
                                                1px 4px -1px;
                                              min-width: 56px;
                                            "
                                              id="DCA33F1D-25EA-494C-819C-BE0B7CDBAEA8"
                                              aria-expanded="false"
                                            >
                                              Vệ tinh
                                            </button>
                                            <ul
                                              role="menu"
                                              aria-labelledby="DCA33F1D-25EA-494C-819C-BE0B7CDBAEA8"
                                              //style="
                                              background-color: white;
                                              list-style: none;
                                              padding: 2px;
                                              margin: 0px;
                                              z-index: -1;
                                              border-bottom-left-radius: 2px;
                                              border-bottom-right-radius: 2px;
                                              box-shadow: rgba(0, 0, 0, 0.3) 0px
                                                1px 4px -1px;
                                              position: absolute;
                                              right: 0px;
                                              top: 40px;
                                              text-align: left;
                                              display: none;
                                            "
                                            >
                                              <li
                                                tabindex="-1"
                                                role="menuitemcheckbox"
                                                aria-label="Hiển thị hình ảnh có tên phố"
                                                draggable="false"
                                                title="Hiển thị hình ảnh có tên phố"
                                                aria-checked="true"
                                                class="ssQIHO-checkbox-menu-item"
                                                //style="
                                                color: black;
                                                font-family: Roboto, Arial,
                                                  sans-serif;
                                                user-select: none;
                                                font-size: 18px;
                                                background-color: rgb(
                                                  255,
                                                  255,
                                                  255
                                                );
                                                padding: 7px 8px 7px 7px;
                                                direction: ltr;
                                                text-align: left;
                                                white-space: nowrap;
                                              "
                                              >
                                                <span>
                                                  <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22/%3E%3C/svg%3E"
                                                    alt=""
                                                    //style="
                                                    height: 1em;
                                                    width: 1em;
                                                    transform: translateY(
                                                      0.15em
                                                    );
                                                  "
                                                  />
                                                  <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E"
                                                    alt=""
                                                    //style="
                                                    height: 1em;
                                                    width: 1em;
                                                    transform: translateY(
                                                      0.15em
                                                    );
                                                    display: none;
                                                  "
                                                  />
                                                </span>
                                                <label //style="cursor: inherit">
                                                  Nhãn
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div></div>
                                      <div></div>
                                      <div></div>
                                      <div>
                                        <button
                                          draggable="false"
                                          aria-label="Chuyển đổi chế độ xem toàn màn hình"
                                          title="Chuyển đổi chế độ xem toàn màn hình"
                                          type="button"
                                          class="gm-control-active gm-fullscreen-control"
                                          //style="
                                          background: none rgb(255, 255, 255);
                                          border: 0px;
                                          margin: 10px;
                                          padding: 0px;
                                          text-transform: none;
                                          appearance: none;
                                          position: absolute;
                                          cursor: pointer;
                                          user-select: none;
                                          border-radius: 2px;
                                          height: 40px;
                                          width: 40px;
                                          box-shadow: rgba(0, 0, 0, 0.3) 0px 1px
                                            4px -1px;
                                          overflow: hidden;
                                          top: 0px;
                                          right: 0px;
                                        "
                                        >
                                          <img
                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                            alt=""
                                            //style="height: 18px; width: 18px"
                                          />
                                          <img
                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                            alt=""
                                            //style="height: 18px; width: 18px"
                                          />
                                          <img
                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                            alt=""
                                            //style="height: 18px; width: 18px"
                                          />
                                        </button>
                                      </div>
                                      <div></div>
                                      <div></div>
                                      <div></div>
                                      <div>
                                        <input
                                          type="text"
                                          placeholder="Search in Google Map"
                                          class="pac-target-input"
                                          autocomplete="off"
                                          //style="
                                          border: 1px solid transparent;
                                          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px
                                            1px;
                                          box-sizing: border-box;
                                          font-size: 13px;
                                          height: 28px;
                                          margin-top: 10px;
                                          margin-right: 10px;
                                          outline: none;
                                          padding: 0px 12px;
                                          width: 300px;
                                          border-radius: 2px;
                                          z-index: 0;
                                          position: absolute;
                                          bottom: 26px;
                                          left: 0px;
                                        "
                                        />
                                        <div
                                          class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                                          draggable="false"
                                          data-control-width="0"
                                          data-control-height="0"
                                          //style="
                                          margin: 10px;
                                          user-select: none;
                                          position: absolute;
                                          display: none;
                                          bottom: 26px;
                                          left: 0px;
                                        "
                                        >
                                          <div
                                            class="gmnoprint"
                                            data-control-width="40"
                                            data-control-height="40"
                                            //style="
                                            display: none;
                                            position: absolute;
                                          "
                                          >
                                            <div
                                              //style="
                                              background-color: rgb(
                                                255,
                                                255,
                                                255
                                              );
                                              box-shadow: rgba(0, 0, 0, 0.3) 0px
                                                1px 4px -1px;
                                              border-radius: 2px;
                                              width: 40px;
                                              height: 40px;
                                            "
                                            >
                                              <button
                                                draggable="false"
                                                aria-label="Xoay bản đồ theo chiều kim đồng hồ"
                                                title="Xoay bản đồ theo chiều kim đồng hồ"
                                                type="button"
                                                class="gm-control-active"
                                                //style="
                                                background: none;
                                                display: none;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                left: 0px;
                                                top: 0px;
                                                overflow: hidden;
                                                width: 40px;
                                                height: 40px;
                                              "
                                              >
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                  //style="
                                                  width: 20px;
                                                  height: 20px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                  //style="
                                                  width: 20px;
                                                  height: 20px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                  //style="
                                                  width: 20px;
                                                  height: 20px;
                                                "
                                                />
                                              </button>
                                              <div
                                                //style="
                                                position: relative;
                                                overflow: hidden;
                                                width: 30px;
                                                height: 1px;
                                                margin: 0px 5px;
                                                background-color: rgb(
                                                  230,
                                                  230,
                                                  230
                                                );
                                                display: none;
                                              "
                                              ></div>
                                              <button
                                                draggable="false"
                                                aria-label="Xoay bản đồ ngược chiều kim đồng hồ"
                                                title="Xoay bản đồ ngược chiều kim đồng hồ"
                                                type="button"
                                                class="gm-control-active"
                                                //style="
                                                background: none;
                                                display: none;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                left: 0px;
                                                top: 0px;
                                                overflow: hidden;
                                                width: 40px;
                                                height: 40px;
                                                transform: scaleX(-1);
                                              "
                                              >
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                  //style="
                                                  width: 20px;
                                                  height: 20px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                  //style="
                                                  width: 20px;
                                                  height: 20px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                  //style="
                                                  width: 20px;
                                                  height: 20px;
                                                "
                                                />
                                              </button>
                                              <div
                                                //style="
                                                position: relative;
                                                overflow: hidden;
                                                width: 30px;
                                                height: 1px;
                                                margin: 0px 5px;
                                                background-color: rgb(
                                                  230,
                                                  230,
                                                  230
                                                );
                                                display: none;
                                              "
                                              ></div>
                                              <button
                                                draggable="false"
                                                aria-label="Nghiêng bản đồ"
                                                title="Nghiêng bản đồ"
                                                type="button"
                                                class="gm-tilt gm-control-active"
                                                //style="
                                                background: none;
                                                display: block;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                top: 0px;
                                                left: 0px;
                                                overflow: hidden;
                                                width: 40px;
                                                height: 40px;
                                              "
                                              >
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                                  //style="width: 18px"
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                                  //style="width: 18px"
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                                  //style="width: 18px"
                                                />
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                                          draggable="false"
                                          data-control-width="40"
                                          data-control-height="153"
                                          //style="
                                          margin: 10px;
                                          user-select: none;
                                          position: absolute;
                                          bottom: 167px;
                                          right: 40px;
                                        "
                                        >
                                          <div
                                            class="gm-svpc"
                                            dir="ltr"
                                            title="Kéo Người hình mắc áo vào bản đồ để mở Chế độ xem phố"
                                            data-control-width="40"
                                            data-control-height="40"
                                            //style="
                                            background-color: rgb(
                                              255,
                                              255,
                                              255
                                            );
                                            box-shadow: rgba(0, 0, 0, 0.3) 0px
                                              1px 4px -1px;
                                            border-radius: 2px;
                                            width: 40px;
                                            height: 40px;
                                            cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'),
                                              default;
                                            touch-action: none;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                          "
                                          >
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 50%;
                                              top: 50%;
                                            "
                                            ></div>
                                            <div
                                              //style="
                                              position: absolute;
                                              left: 50%;
                                              top: 50%;
                                            "
                                            >
                                              <img
                                                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2023%2038%22%3E%3Cpath%20d%3D%22M16.6%2038.1h-5.5l-.2-2.9-.2%202.9h-5.5L5%2025.3l-.8%202a1.53%201.53%200%2001-1.9.9l-1.2-.4a1.58%201.58%200%2001-1-1.9v-.1c.3-.9%203.1-11.2%203.1-11.2a2.66%202.66%200%20012.3-2l.6-.5a6.93%206.93%200%20014.7-12%206.8%206.8%200%20014.9%202%207%207%200%20012%204.9%206.65%206.65%200%2001-2.2%205l.7.5a2.78%202.78%200%20012.4%202s2.9%2011.2%202.9%2011.3a1.53%201.53%200%2001-.9%201.9l-1.3.4a1.63%201.63%200%2001-1.9-.9l-.7-1.8-.1%2012.7zm-3.6-2h1.7L14.9%2020.3l1.9-.3%202.4%206.3.3-.1c-.2-.8-.8-3.2-2.8-10.9a.63.63%200%2000-.6-.5h-.6l-1.1-.9h-1.9l-.3-2a4.83%204.83%200%20003.5-4.7A4.78%204.78%200%200011%202.3H10.8a4.9%204.9%200%2000-1.4%209.6l-.3%202h-1.9l-1%20.9h-.6a.74.74%200%2000-.6.5c-2%207.5-2.7%2010-3%2010.9l.3.1L4.8%2020l1.9.3.2%2015.8h1.6l.6-8.4a1.52%201.52%200%20011.5-1.4%201.5%201.5%200%20011.5%201.4l.9%208.4zm-10.9-9.6zm17.5-.1z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23333%22%20opacity%3D%22.7%22/%3E%3Cpath%20d%3D%22M5.9%2013.6l1.1-.9h7.8l1.2.9%22%20fill%3D%22%23ce592c%22/%3E%3Cellipse%20cx%3D%2210.9%22%20cy%3D%2213.1%22%20rx%3D%222.7%22%20ry%3D%22.3%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ce592c%22%20opacity%3D%22.5%22/%3E%3Cpath%20d%3D%22M20.6%2026.1l-2.9-11.3a1.71%201.71%200%2000-1.6-1.2H5.699999999999999a1.69%201.69%200%2000-1.5%201.3l-3.1%2011.3a.61.61%200%2000.3.7l1.1.4a.61.61%200%2000.7-.3l2.7-6.7.2%2016.8h3.6l.6-9.3a.47.47%200%2001.44-.5h.06c.4%200%20.4.2.5.5l.6%209.3h3.6L15.7%2020.3l2.5%206.6a.52.52%200%2000.66.31l1.2-.4a.57.57%200%2000.5-.7z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M7%2013.6l3.9%206.7%203.9-6.7%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Ccircle%20cx%3D%2210.9%22%20cy%3D%227%22%20r%3D%225.9%22%20fill%3D%22%23fdbf2d%22/%3E%3C/svg%3E"
                                                aria-label="Kiểm soát người hình mắc áo trong chế độ xem phố"
                                                //style="
                                                height: 30px;
                                                width: 30px;
                                                position: absolute;
                                                transform: translate(
                                                  -50%,
                                                  -50%
                                                );
                                                pointer-events: none;
                                              "
                                              />
                                              <img
                                                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2038%22%3E%3Cpath%20d%3D%22M22%2026.6l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3l-2.5-6.6-.2%2016.8h-9.4L6.6%2021l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7z%22%20fill%3D%22%23333%22%20fill-opacity%3D%22.2%22/%3E%26quot%3B%3C/svg%3E"
                                                aria-label="Người hình mắc áo ở đầu Bản đồ"
                                                //style="
                                                display: none;
                                                height: 30px;
                                                width: 30px;
                                                position: absolute;
                                                transform: translate(
                                                  -50%,
                                                  -50%
                                                );
                                                pointer-events: none;
                                              "
                                              />
                                              <img
                                                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2040%2050%22%3E%3Cpath%20d%3D%22M34-30.4l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3L28.4-36l-.2%2016.8h-9.4L18.6-36l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7zM34%2029.6l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3L28.4%2024l-.2%2016.8h-9.4L18.6%2024l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7z%22%20fill%3D%22%23333%22%20fill-opacity%3D%22.2%22/%3E%3Cpath%20d%3D%22M15.4%2038.8h-4a1.64%201.64%200%2001-1.4-1.1l-3.1-8a.9.9%200%2001-.5.1l-1.4.1a1.62%201.62%200%2001-1.6-1.4L2.3%2015.4l1.6-1.3a6.87%206.87%200%2001-3-4.6A7.14%207.14%200%20012%204a7.6%207.6%200%20014.7-3.1A7.14%207.14%200%200112.2%202a7.28%207.28%200%20012.3%209.6l2.1-.1.1%201c0%20.2.1.5.1.8a2.41%202.41%200%20011%201s1.9%203.2%202.8%204.9c.7%201.2%202.1%204.2%202.8%205.9a2.1%202.1%200%2001-.8%202.6l-.6.4a1.63%201.63%200%2001-1.5.2l-.6-.3a8.93%208.93%200%2000.5%201.3%207.91%207.91%200%20001.8%202.6l.6.3v4.6l-4.5-.1a7.32%207.32%200%2001-2.5-1.5l-.4%203.6zm-10-19.2l3.5%209.8%202.9%207.5h1.6V35l-1.9-9.4%203.1%205.4a8.24%208.24%200%20003.8%203.8h2.1v-1.4a14%2014%200%2001-2.2-3.1%2044.55%2044.55%200%2001-2.2-8l-1.3-6.3%203.2%205.6c.6%201.1%202.1%203.6%202.8%204.9l.6-.4c-.8-1.6-2.1-4.6-2.8-5.8-.9-1.7-2.8-4.9-2.8-4.9a.54.54%200%2000-.4-.3l-.7-.1-.1-.7a4.33%204.33%200%2000-.1-.5l-5.3.3%202.2-1.9a4.3%204.3%200%2000.9-1%205.17%205.17%200%2000.8-4%205.67%205.67%200%2000-2.2-3.4%205.09%205.09%200%2000-4-.8%205.67%205.67%200%2000-3.4%202.2%205.17%205.17%200%2000-.8%204%205.67%205.67%200%20002.2%203.4%203.13%203.13%200%20001%20.5l1.6.6-3.2%202.6%201%2011.5h.4l-.3-8.2z%22%20fill%3D%22%23333%22/%3E%3Cpath%20d%3D%22M3.35%2015.9l1.1%2012.5a.39.39%200%2000.36.42h.14l1.4-.1a.66.66%200%2000.5-.4l-.2-3.8-3.3-8.6z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M5.2%2028.8l1.1-.1a.66.66%200%2000.5-.4l-.2-3.8-1.2-3.1z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3Cpath%20d%3D%22M21.4%2035.7l-3.8-1.2-2.7-7.8L12%2015.5l3.4-2.9c.2%202.4%202.2%2014.1%203.7%2017.1%200%200%201.3%202.6%202.3%203.1v2.9m-8.4-8.1l-2-.3%202.5%2010.1.9.4v-2.9%22%20fill%3D%22%23e5892b%22/%3E%3Cpath%20d%3D%22M17.8%2025.4c-.4-1.5-.7-3.1-1.1-4.8-.1-.4-.1-.7-.2-1.1l-1.1-2-1.7-1.6s.9%205%202.4%207.1a19.12%2019.12%200%20001.7%202.4z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Cpath%20d%3D%22M14.4%2037.8h-3a.43.43%200%2001-.4-.4l-3-7.8-1.7-4.8-3-9%208.9-.4s2.9%2011.3%204.3%2014.4c1.9%204.1%203.1%204.7%205%205.8h-3.2s-4.1-1.2-5.9-7.7a.59.59%200%2000-.6-.4.62.62%200%2000-.3.7s.5%202.4.9%203.6a34.87%2034.87%200%20002%206z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M15.4%2012.7l-3.3%202.9-8.9.4%203.3-2.7%22%20fill%3D%22%23ce592b%22/%3E%3Cpath%20d%3D%22M9.1%2021.1l1.4-6.2-5.9.5%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Cpath%20d%3D%22M12%2013.5a4.75%204.75%200%2001-2.6%201.1c-1.5.3-2.9.2-2.9%200s1.1-.6%202.7-1%22%20fill%3D%22%23bb3d19%22/%3E%3Ccircle%20cx%3D%227.92%22%20cy%3D%228.19%22%20r%3D%226.3%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M4.7%2013.6a6.21%206.21%200%20008.4-1.9v-.1a8.89%208.89%200%2001-8.4%202z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3Cpath%20d%3D%22M21.2%2027.2l.6-.4a1.09%201.09%200%2000.4-1.3c-.7-1.5-2.1-4.6-2.8-5.8-.9-1.7-2.8-4.9-2.8-4.9a1.6%201.6%200%2000-2.17-.65l-.23.15a1.68%201.68%200%2000-.4%202.1s2.3%203.9%203.1%205.3c.6%201%202.1%203.7%202.9%205.1a.94.94%200%20001.24.49l.16-.09z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M19.4%2019.8c-.9-1.7-2.8-4.9-2.8-4.9a1.6%201.6%200%2000-2.17-.65l-.23.15-.3.3c1.1%201.5%202.9%203.8%203.9%205.4%201.1%201.8%202.9%205%203.8%206.7l.1-.1a1.09%201.09%200%2000.4-1.3%2057.67%2057.67%200%2000-2.7-5.6z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3C/svg%3E"
                                                aria-label="Kiểm soát người hình mắc áo trong chế độ xem phố"
                                                //style="
                                                display: none;
                                                height: 40px;
                                                width: 40px;
                                                position: absolute;
                                                transform: translate(
                                                  -60%,
                                                  -45%
                                                );
                                                pointer-events: none;
                                              "
                                              />
                                            </div>
                                          </div>
                                          <div
                                            class="gmnoprint"
                                            data-control-width="40"
                                            data-control-height="81"
                                            //style="
                                            position: absolute;
                                            left: 0px;
                                            top: 72px;
                                          "
                                          >
                                            <div
                                              draggable="false"
                                              //style="
                                              user-select: none;
                                              box-shadow: rgba(0, 0, 0, 0.3) 0px
                                                1px 4px -1px;
                                              border-radius: 2px;
                                              cursor: pointer;
                                              background-color: rgb(
                                                255,
                                                255,
                                                255
                                              );
                                              width: 40px;
                                              height: 81px;
                                            "
                                            >
                                              <button
                                                draggable="false"
                                                aria-label="Phóng to"
                                                title="Phóng to"
                                                type="button"
                                                class="gm-control-active"
                                                //style="
                                                background: none;
                                                display: block;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                overflow: hidden;
                                                width: 40px;
                                                height: 40px;
                                                top: 0px;
                                                left: 0px;
                                              "
                                              >
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                              </button>
                                              <div
                                                //style="
                                                position: relative;
                                                overflow: hidden;
                                                width: 30px;
                                                height: 1px;
                                                margin: 0px 5px;
                                                background-color: rgb(
                                                  230,
                                                  230,
                                                  230
                                                );
                                                top: 0px;
                                              "
                                              ></div>
                                              <button
                                                draggable="false"
                                                aria-label="Thu nhỏ"
                                                title="Thu nhỏ"
                                                type="button"
                                                class="gm-control-active"
                                                //style="
                                                background: none;
                                                display: block;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                overflow: hidden;
                                                width: 40px;
                                                height: 40px;
                                                top: 0px;
                                                left: 0px;
                                              "
                                              >
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                                <img
                                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                  alt=""
                                                  //style="
                                                  height: 18px;
                                                  width: 18px;
                                                "
                                                />
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          //style="
                                          margin: 0px 5px;
                                          z-index: 1000000;
                                          position: absolute;
                                          left: 0px;
                                          bottom: 0px;
                                        "
                                        >
                                          <a
                                            target="_blank"
                                            rel="noopener"
                                            title="Mở khu vực này trong Google Maps (mở cửa sổ mới)"
                                            aria-label="Mở khu vực này trong Google Maps (mở cửa sổ mới)"
                                            href="https://maps.google.com/maps?ll=0,0&amp;z=15&amp;t=m&amp;hl=vi-VN&amp;gl=US&amp;mapclient=apiv3"
                                            //style="display: inline"
                                          >
                                            <div //style="width: 66px; height: 26px">
                                              <img
                                                alt="Google"
                                                src="./Traveloka - TERA_files/google4.png"
                                                draggable="false"
                                                //style="
                                                position: absolute;
                                                left: 0px;
                                                top: 0px;
                                                width: 66px;
                                                height: 26px;
                                                user-select: none;
                                                border: 0px;
                                                padding: 0px;
                                                margin: 0px;
                                              "
                                              />
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                      <div></div>
                                      <div>
                                        <div
                                          class="gmnoprint"
                                          //style="
                                          z-index: 1000001;
                                          position: absolute;
                                          right: 209px;
                                          bottom: 0px;
                                        "
                                        >
                                          <div
                                            draggable="false"
                                            class="gm-style-cc"
                                            //style="
                                            user-select: none;
                                            height: 14px;
                                            line-height: 14px;
                                          "
                                          >
                                            <div
                                              //style="
                                              opacity: 0.7;
                                              width: 100%;
                                              height: 100%;
                                              position: absolute;
                                            "
                                            >
                                              <div //style="width: 1px"></div>
                                              <div
                                                //style="
                                                background-color: rgb(
                                                  245,
                                                  245,
                                                  245
                                                );
                                                width: auto;
                                                height: 100%;
                                                margin-left: 1px;
                                              "
                                              ></div>
                                            </div>
                                            <div
                                              //style="
                                              position: relative;
                                              padding-right: 6px;
                                              padding-left: 6px;
                                              box-sizing: border-box;
                                              font-family: Roboto, Arial,
                                                sans-serif;
                                              font-size: 10px;
                                              color: rgb(0, 0, 0);
                                              white-space: nowrap;
                                              direction: ltr;
                                              text-align: right;
                                              vertical-align: middle;
                                              display: inline-block;
                                            "
                                            >
                                              <button
                                                draggable="false"
                                                aria-label="Phím tắt"
                                                title="Phím tắt"
                                                type="button"
                                                //style="
                                                background: none;
                                                display: inline-block;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                color: rgb(0, 0, 0);
                                                font-family: inherit;
                                                line-height: inherit;
                                              "
                                              >
                                                Phím tắt
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="gmnoprint"
                                          //style="
                                          z-index: 1000001;
                                          position: absolute;
                                          right: 100px;
                                          bottom: 0px;
                                          width: 109px;
                                        "
                                        >
                                          <div
                                            draggable="false"
                                            class="gm-style-cc"
                                            //style="
                                            user-select: none;
                                            height: 14px;
                                            line-height: 14px;
                                          "
                                          >
                                            <div
                                              //style="
                                              opacity: 0.7;
                                              width: 100%;
                                              height: 100%;
                                              position: absolute;
                                            "
                                            >
                                              <div //style="width: 1px"></div>
                                              <div
                                                //style="
                                                background-color: rgb(
                                                  245,
                                                  245,
                                                  245
                                                );
                                                width: auto;
                                                height: 100%;
                                                margin-left: 1px;
                                              "
                                              ></div>
                                            </div>
                                            <div
                                              //style="
                                              position: relative;
                                              padding-right: 6px;
                                              padding-left: 6px;
                                              box-sizing: border-box;
                                              font-family: Roboto, Arial,
                                                sans-serif;
                                              font-size: 10px;
                                              color: rgb(0, 0, 0);
                                              white-space: nowrap;
                                              direction: ltr;
                                              text-align: right;
                                              vertical-align: middle;
                                              display: inline-block;
                                            "
                                            >
                                              <button
                                                draggable="false"
                                                aria-label="Dữ liệu Bản đồ"
                                                title="Dữ liệu Bản đồ"
                                                type="button"
                                                //style="
                                                background: none;
                                                display: none;
                                                border: 0px;
                                                margin: 0px;
                                                padding: 0px;
                                                text-transform: none;
                                                appearance: none;
                                                position: relative;
                                                cursor: pointer;
                                                user-select: none;
                                                color: rgb(0, 0, 0);
                                                font-family: inherit;
                                                line-height: inherit;
                                              "
                                              >
                                                Dữ liệu Bản đồ
                                              </button>
                                              <span>Dữ liệu bản đồ ©2022</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="gmnoprint gm-style-cc"
                                          draggable="false"
                                          //style="
                                          z-index: 1000001;
                                          user-select: none;
                                          height: 14px;
                                          line-height: 14px;
                                          position: absolute;
                                          right: 0px;
                                          bottom: 0px;
                                        "
                                        >
                                          <div
                                            //style="
                                            opacity: 0.7;
                                            width: 100%;
                                            height: 100%;
                                            position: absolute;
                                          "
                                          >
                                            <div //style="width: 1px"></div>
                                            <div
                                              //style="
                                              background-color: rgb(
                                                245,
                                                245,
                                                245
                                              );
                                              width: auto;
                                              height: 100%;
                                              margin-left: 1px;
                                            "
                                            ></div>
                                          </div>
                                          <div
                                            //style="
                                            position: relative;
                                            padding-right: 6px;
                                            padding-left: 6px;
                                            box-sizing: border-box;
                                            font-family: Roboto, Arial,
                                              sans-serif;
                                            font-size: 10px;
                                            color: rgb(0, 0, 0);
                                            white-space: nowrap;
                                            direction: ltr;
                                            text-align: right;
                                            vertical-align: middle;
                                            display: inline-block;
                                          "
                                          >
                                            <a
                                              href="https://www.google.com/intl/vi-VN_US/help/terms_maps.html"
                                              target="_blank"
                                              rel="noopener"
                                              //style="
                                              text-decoration: none;
                                              cursor: pointer;
                                              color: rgb(0, 0, 0);
                                            "
                                            >
                                              Điều khoản sử dụng
                                            </a>
                                          </div>
                                        </div>
                                        <div
                                          class="gmnoscreen"
                                          //style="
                                          position: absolute;
                                          right: 0px;
                                          bottom: 0px;
                                        "
                                        >
                                          <div
                                            //style="
                                            font-family: Roboto, Arial,
                                              sans-serif;
                                            font-size: 11px;
                                            color: rgb(0, 0, 0);
                                            direction: ltr;
                                            text-align: right;
                                            background-color: rgb(
                                              245,
                                              245,
                                              245
                                            );
                                          "
                                          >
                                            Dữ liệu bản đồ ©2022
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <ul class="css-1n4xsu1 --simple">
                                  <li>
                                    <span>This section must be filled.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="c-block" //style="margin-top: 16px">
                              <label class="c-label c-label--theme-tera css-cn0vwd">
                                <span>Street Address</span>
                                <span class="c-label__required">*</span>
                              </label>
                              <div class="c-input-group c-input-group--theme-tera css-15ssrb5">
                                <div class="c-input-group__inner">
                                  <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q c-textarea">
                                    <div class="__inner">
                                      <div class="__padder --enter-active">
                                        <textarea
                                          name="generalInformation,propertyDetails,propertyAddress,streetAddress"
                                          touched="true"
                                          type="text"
                                          class="-control css-cxm1q7"
                                          rows="3"
                                          //style="resize: vertical"
                                        ></textarea>
                                      </div>
                                      <span>
                                        <div class="css-ta0nkb -error-icon">
                                          <div
                                            id="tooltip-331"
                                            class="__inner c-tooltip---target c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
                                          >
                                            <svg
                                              class="c-icon css-36kz25"
                                              viewBox="0 0 24 24"
                                              preserveAspectRatio="xMidYMid meet"
                                              //style="
                                              height: 20.02px;
                                              width: 20.02px;
                                            "
                                            >
                                              <g id="info-circle-outline">
                                                <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="c-block" //style="margin-top: 16px">
                              <label class="c-label c-label--theme-tera css-cn0vwd">
                                <span>Postal Code</span>
                                <span class="c-label__required">*</span>
                              </label>
                              <div class="c-input-group c-input-group--theme-tera css-8275y3">
                                <div class="c-input-group__inner">
                                  <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q">
                                    <div class="__inner">
                                      <div class="__padder">
                                        <input
                                          name="generalInformation,propertyDetails,propertyAddress,postalCode"
                                          touched="true"
                                          type="text"
                                          class="css-zcectl -control"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ul class="css-1n4xsu1 --simple">
                                  <li>
                                    <span>This section must be filled.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="c-block" //style="margin-top: 16px">
                              <label class="c-label c-label--theme-tera css-cn0vwd">
                                <span>Country</span>
                                <span class="c-label__required">*</span>
                              </label>
                              <div
                                class="c-select c-select--theme-tera -control-container --is-error css-yngrtg css-fb668q"
                                //style="width: 280px"
                              >
                                <div class="select is-error">
                                  <input
                                    type="hidden"
                                    name="generalInformation,propertyDetails,propertyAddress,country"
                                    value=""
                                  />
                                  <div class="select-control">
                                    <div class="select-placeholder">
                                      Select...
                                    </div>
                                    <div
                                      class="select-input"
                                      tabindex="0"
                                      //style="display: inline-block"
                                    >
                                      &nbsp;
                                    </div>
                                    <span class="select-arrow-zone">
                                      <span class="select-arrow"></span>
                                    </span>
                                  </div>
                                </div>
                                <ul class="css-1n4xsu1 --simple">
                                  <li>
                                    <span>This section must be filled.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div
                            class="c-column css-1skutvr"
                            //style="margin-top: 8px"
                          >
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>Phone Number</span>
                            </label>
                          </div>
                          <div class="c-column css-1skutvr">
                            <div class="c-row css-7nqw1l">
                              <div
                                class="c-column css-bv1y1v"
                                //style="padding-left: 16px"
                              >
                                <div class="c-input c-input--theme-tera -control-container css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder">
                                      <input
                                        name="generalInformation,propertyDetails,phoneNumber"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div
                            class="c-column css-1skutvr"
                            //style="margin-top: 8px"
                          >
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>Number of Rooms</span>
                              <span class="c-label__required">*</span>
                            </label>
                          </div>
                          <div class="c-column css-1skutvr">
                            <div
                              class="c-input-group c-input-group--theme-tera css-8275y3"
                              //style="display: inline-block"
                            >
                              <div class="c-input-group__inner">
                                <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder">
                                      <input
                                        name="generalInformation,propertyDetails,numberOfRooms"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="c-input-group-addon css-1d5tgr9">
                                  <span>rooms</span>
                                </div>
                              </div>
                              <ul class="css-1n4xsu1 --simple">
                                <li>
                                  <span>This section must be filled.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          class="c-line css-1bw7h3e"
                          //style="margin-top: 0px"
                        ></div>
                        <div class="c-row css-7nqw1l">
                          <div class="c-column css-1skutvr">
                            <label class="c-label c-label--theme-tera css-cn0vwd">
                              <span>
                                Does This Property Use Channel Manager System?
                              </span>
                              <svg
                                id="channelManager"
                                class="c-icon css-36kz25"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g id="help-round-outline">
                                  <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                                </g>
                              </svg>
                            </label>
                          </div>
                          <div
                            class="c-column css-g7l5sb"
                            //style="margin-top: 8px"
                          >
                            <div
                              touched="true"
                              value="NO_CM"
                              class="c-radio-group c-radio-group--theme-tera -control-container css-11huf6m css-fb668q"
                            >
                              <div class="c-radio c-radio--theme-tera c-radio--is-inline css-v3y73k">
                                <input
                                  name="generalInformation,propertyDetails,channelManagerBoolean"
                                  type="radio"
                                  value="YES_CM"
                                  id="radio-364"
                                />
                                <label class="" for="radio-364">
                                  <span>Yes</span>
                                </label>
                              </div>
                              <div
                                class="c-radio c-radio--theme-tera c-radio--is-inline css-v3y73k"
                                //style="margin-left: 16px"
                              >
                                <input
                                  name="generalInformation,propertyDetails,channelManagerBoolean"
                                  type="radio"
                                  value="NO_CM"
                                  checked=""
                                  id="radio-365"
                                />
                                <label class="" for="radio-365">
                                  <span>No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="c-box c-box--theme-tera css-so7arl"
                      //style="margin-bottom: 30px"
                    >
                      <div class="c-box-section c-box-section--header c-box-section--clearfix css-1mezapo">
                        <span>Property Contacts</span>
                      </div>
                      <div class="c-box-section c-box-section--clearfix css-1mezapo">
                        <span>
                          <div
                            class="c-box c-box--theme-tera css-so7arl css-1ho9abl"
                            //style="margin: 15px 15px 30px 0px"
                          >
                            <div class="c-box-section c-box-section--header c-box-section--clearfix css-7y939d">
                              <div class="c-flexbox css-69i1ev">
                                <div class="c-block">
                                  <span class="c-text css-1d279ga">
                                    <span>Main Contact</span>
                                  </span>
                                </div>
                                <div class="c-block">
                                  <div class="c-dropdown c-dropdown--theme-tera c-dropdown--size-sm css-1bp5s5a">
                                    <button
                                      aria-haspopup="true"
                                      data-toggle="dropdown"
                                      aria-expanded="false"
                                      type="button"
                                      class="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-dropdown-toggle css-y6hotu"
                                    >
                                      <span>
                                        <svg
                                          class="c-icon css-36kz25"
                                          viewBox="0 0 24 24"
                                          preserveAspectRatio="xMidYMid meet"
                                        >
                                          <g id="settings">
                                            <path
                                              d="M0 0h24v24H0z"
                                              fill="none"
                                            ></path>
                                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                                          </g>
                                        </svg>
                                        <span>Action</span>
                                      </span>
                                    </button>
                                    <div
                                      tabindex="-1"
                                      role="menu"
                                      class="c-dropdown-menu c-dropdown-menu--scale c-dropdown-menu--show-arrow c-dropdown-menu--right css-nfadit"
                                    >
                                      <a
                                        class="c-dropdown-item c-dropdown-item--is-regular css-18ji0g8"
                                        tabindex="0"
                                        //style="padding: 8px"
                                      >
                                        <span>Duplicate This Contact</span>
                                      </a>
                                      <a
                                        class="c-dropdown-item c-dropdown-item--is-regular css-18ji0g8"
                                        tabindex="0"
                                        //style="padding: 8px"
                                      >
                                        <span>Clear All Fields</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="c-box-section c-box-section--clearfix css-1ad1cse">
                              <div class="c-block">
                                <label class="c-label c-label--theme-tera css-cn0vwd">
                                  <span>Full Name</span>
                                  <span class="c-label__required">*</span>
                                </label>
                                <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder --enter-active">
                                      <input
                                        name="generalInformation,repeatablePropertyContactsForm,0,fullName"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                    <span>
                                      <div class="css-ta0nkb -error-icon">
                                        <div
                                          id="tooltip-334"
                                          class="__inner c-tooltip---target c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
                                        >
                                          <svg
                                            class="c-icon css-36kz25"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            //style="
                                            height: 20.02px;
                                            width: 20.02px;
                                          "
                                          >
                                            <g id="info-circle-outline">
                                              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="c-block">
                                <label class="c-label c-label--theme-tera css-cn0vwd">
                                  <span>E-mail Address</span>
                                  <span class="c-label__required">*</span>
                                </label>
                                <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder --enter-active">
                                      <input
                                        name="generalInformation,repeatablePropertyContactsForm,0,email"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                    <span>
                                      <div class="css-ta0nkb -error-icon">
                                        <div
                                          id="tooltip-336"
                                          class="__inner c-tooltip---target c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
                                        >
                                          <svg
                                            class="c-icon css-36kz25"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            //style="
                                            height: 20.02px;
                                            width: 20.02px;
                                          "
                                          >
                                            <g id="info-circle-outline">
                                              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="c-block">
                                <label class="c-label c-label--theme-tera css-cn0vwd">
                                  <span>Mobile Number</span>
                                  <span class="c-label__required">*</span>
                                </label>
                                <div class="c-row css-7nqw1l">
                                  <div
                                    class="c-column css-bv1y1v"
                                    //style="padding-left: 16px"
                                  >
                                    <div class="c-input c-input--theme-tera -control-container --is-error css-fb668q">
                                      <div class="__inner">
                                        <div class="__padder --enter-active">
                                          <input
                                            name="generalInformation,repeatablePropertyContactsForm,0,mobileNumber"
                                            touched="true"
                                            type="text"
                                            class="css-zcectl -control"
                                            value=""
                                          />
                                        </div>
                                        <span>
                                          <div class="css-ta0nkb -error-icon">
                                            <div
                                              id="tooltip-338"
                                              class="__inner c-tooltip---target c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
                                            >
                                              <svg
                                                class="c-icon css-36kz25"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                //style="
                                                height: 20.02px;
                                                width: 20.02px;
                                              "
                                              >
                                                <g id="info-circle-outline">
                                                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="c-block">
                                <label class="c-label c-label--theme-tera css-cn0vwd">
                                  <span>Office Phone Number</span>
                                </label>
                                <div class="c-row css-7nqw1l">
                                  <div
                                    class="c-column css-bv1y1v"
                                    //style="padding-left: 16px"
                                  >
                                    <div class="c-input c-input--theme-tera -control-container css-fb668q">
                                      <div class="__inner">
                                        <div class="__padder">
                                          <input
                                            name="generalInformation,repeatablePropertyContactsForm,0,officePhoneNumber"
                                            touched="true"
                                            type="text"
                                            class="css-zcectl -control"
                                            value=""
                                          />
                                        </div>
                                        <span></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="c-block">
                                <label class="c-label c-label--theme-tera css-cn0vwd">
                                  <span>Extension</span>
                                </label>
                                <div class="c-input c-input--theme-tera -control-container css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder">
                                      <input
                                        name="generalInformation,repeatablePropertyContactsForm,0,officePhoneExt"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div class="c-block">
                                <label class="c-label c-label--theme-tera css-cn0vwd">
                                  <span>Position</span>
                                </label>
                                <div class="c-input c-input--theme-tera -control-container css-fb668q">
                                  <div class="__inner">
                                    <div class="__padder">
                                      <input
                                        name="generalInformation,repeatablePropertyContactsForm,0,position"
                                        touched="true"
                                        type="text"
                                        class="css-zcectl -control"
                                        value=""
                                      />
                                    </div>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div class="c-block">
                                <div
                                  touched="true"
                                  value=""
                                  class="c-checkbox-group c-checkbox-group--theme-tera -control-container css-11huf6m css-fb668q"
                                >
                                  <div class="c-checkbox c-checkbox--theme-tera css-1x1rsp6">
                                    <input
                                      name="generalInformation,repeatablePropertyContactsForm,0,contactable24Hours"
                                      type="checkbox"
                                      value="CONTACTABLE_24_HOURS"
                                      id="checkbox-372"
                                    />
                                    <label class="" for="checkbox-372">
                                      <span>Contactable 24 Hours</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <div
                          class="c-box c-box--theme-tera css-so7arl css-1e81wu5"
                          //style="margin: 15px 0px 30px 15px"
                        >
                          <div
                            align="middle"
                            class="c-box-section c-box-section--clearfix css-e8eme2"
                          >
                            <div class="c-block" //style="margin-bottom: 30px">
                              <span class="c-text css-17tke9t">
                                <span>Add New Contact</span>
                              </span>
                            </div>
                            <div class="c-block">
                              <button
                                type="button"
                                class="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-lg c-btn--is-block c-btn--has-icon css-7mp1uz"
                              >
                                <svg
                                  class="c-icon css-36kz25"
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  //style="color: rgb(13, 127, 192)"
                                >
                                  <g id="today">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                                  </g>
                                </svg>
                                <span>
                                  <span class="c-text css-1hd2en8">
                                    <span>Reservation</span>
                                  </span>
                                </span>
                              </button>
                              <button
                                type="button"
                                class="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-lg c-btn--is-block c-btn--has-icon css-7mp1uz"
                              >
                                <svg
                                  class="c-icon css-36kz25"
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  //style="color: rgb(13, 127, 192)"
                                >
                                  <g id="poll">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
                                  </g>
                                </svg>
                                <span>
                                  <span class="c-text css-1hd2en8">
                                    <span>Accounting / Payment</span>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <div class="c-block" //style="margin-top: 30px">
                              <span class="c-text css-1d279ga">
                                <span>
                                  <p>
                                    Main Contact will be contacted for any
                                    inquiries regarding reservation, finance,
                                    and payment/accounting.
                                  </p>
                                  <br />
                                  <p>
                                    If those fields were managed by different
                                    person, kindly add new contacts.
                                  </p>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="c-block"
                  //style="margin-right: 0px; margin-bottom: 50px"
                >
                  <div class="c-flexbox css-1bvc4cc">
                    <button
                      type="button"
                      class="c-btn c-btn--theme-tera c-btn--variant-default c-btn--has-icon css-7mp1uz"
                      // //style="margin-left: 16px"
                    >
                      <span>
                        <span>Save and Continue to Next Section</span>
                      </span>
                      <svg
                        class="c-icon css-36kz25"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g id="chevron-right">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="c-flexbox css-gg4vpm"
                    // //style="margin-top: 16px"
                  >
                    <button
                      type="button"
                      class="c-btn c-btn--theme-tera c-btn--variant-link css-1erqkil"
                      // //style="padding: 0px"
                    >
                      <span>
                        <span>Need Help?</span>
                      </span>
                    </button>
                    <div class="c-block">
                      <span class="c-text css-1d279ga">
                        <span>or</span>
                      </span>
                      <button
                        id="saveAndContinueLater"
                        type="button"
                        class="c-btn c-btn--theme-tera c-btn--variant-link css-7mp1uz"
                        //style={stylepad}
                      >
                        <span>
                          <span>Save and Continue Later</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        nomodule=""
        src="./Traveloka - TERA_files/polyfills-a2c2a805eacfa1d8a41c.js.tải xuống"
      ></script>
      <script
        src="./Traveloka - TERA_files/main-d6c41c08ab5c15a40a99.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/webpack-31c9fb737e67a7545477.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/framework.a1365e81a308a916be60.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/c83fb5e11ece2c46ef4512232eada49ba8e3376d.6029f382b8a18886e990.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/8b9efdf6451e7e2d5b525bd5171ae27546f37033.a3f981fe0822415116d9.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/8686c9352608756d3f7d53394c89b2da80ff1dac.8aa8bfd23c09ae5fda24.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/21ff6270f10e500274c0632df24c5f505c2483c0.c6c42aeb934cdbd5ae38.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/b5c33124810f9b6cef54743a991142a744f17525.870e384122388b39aead.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/_app-85749f601e4e508fa584.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/4edaba1a.154dac273fec0f266ffc.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/2c386607.cf8f131d6c15745feaa5.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/30f23fc9e1107e6158acb16a782e9d32d3351760.015c4ed84ed3c0bad936.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/e91686639e5283e57fe6c6b8a3167818c352cd56.d54bd6b877421b2ab7de.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/bb39d50075d788097e0791c882f8ec95bad7fecb.1bfe081570f62a3927e8.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/aed25e9114573a36eef315ebc472b1eeade14866.0fd0c904197ca50cf4c2.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/395a4fbd92a4f543dbf43b86bec3e64262eb86ce.38ea6142bdc03e289cdb.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/eb5b7bf295f3755c44e1058e2f89ef10fc8de42e_CSS.25f3d356db032408664e.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/bee0bb15793970bdab0b3a55309144517d7ae5b4.8012d7db45165aa70ce5.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/60d0e499e22b81ed300274cffbe7fa7cda414b13.b27388199eb25532c1bc.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/40dc3f64358a4054e7a98c9aa485b1ad477286fc.109100b10e81a97e1cb2.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/612d03a5a96b7072387dd695bb5211652dbe2d98.a8c67ae6c5b069865017.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/9f3661d84cc54b73c366ed6b96e3a5889e7d0f0c.465ea65f954a47d4a7b1.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/styles.065f6191b4ce18702b2e.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/registrationDetail-02a2519c43f10d4be985.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/_buildManifest.js.tải xuống"
        async=""
      ></script>
      <script
        src="./Traveloka - TERA_files/_ssgManifest.js.tải xuống"
        async=""
      ></script>
      <div id="modal-container-1">
        <div></div>
      </div>
      <div id="notification-container-2">
        <div></div>
      </div>
      <div id="tether-4"></div>
      <div
        class="pac-container pac-logo"
        //style="display: none; width: 0px; position: absolute; left: 0px; top: 0px"
      ></div>
      <div id="tether-332">
        <div
          class="c-tooltip c-tooltip--theme-tera c-tooltip--bottom-right css-64my9n c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
          //style="top: 1532.17px; position: absolute; left: 1009.62px"
        >
          <div class="c-tooltip__inner">
            <ul class="css-1n4xsu1 -error-messages --tooltip">
              <li>
                <span>This section must be filled.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tether-333"></div>
      <div id="tether-335">
        <div
          class="c-tooltip c-tooltip--theme-tera c-tooltip--bottom-right css-64my9n c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
          //style="top: 2291.41px; position: absolute; left: 593.625px"
        >
          <div class="c-tooltip__inner">
            <ul class="css-1n4xsu1 -error-messages --tooltip">
              <li>
                <span>This section must be filled.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tether-337">
        <div
          class="c-tooltip c-tooltip--theme-tera c-tooltip--bottom-right css-64my9n c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
          //style="top: 2371.44px; position: absolute; left: 579.625px"
        >
          <div class="c-tooltip__inner">
            <ul class="css-1n4xsu1 -error-messages --tooltip --is-list">
              <li>
                <span>This section must be filled.</span>
              </li>
              <li>
                <span>Invalid email.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tether-339">
        <div
          class="c-tooltip c-tooltip--theme-tera c-tooltip--bottom-right css-64my9n c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
          //style="top: 2451.47px; position: absolute; left: 579.625px"
        >
          <div class="c-tooltip__inner">
            <ul class="css-1n4xsu1 -error-messages --tooltip --is-list">
              <li>
                <span>This section must be filled.</span>
              </li>
              <li>
                <span>requiredWithPhonePrefix</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="pac-container pac-logo"
        //style="display: none;width: 298px;position: absolute;left: 764px;top: 1386px;"
      ></div>
      <div
        data-tether-id="2"
        //style="top: 0px; left: 0px; position: absolute"
      ></div>
    </div>
  );
}

export default App;
