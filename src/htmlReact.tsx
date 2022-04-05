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

const ReactDOMServer = require("react-dom/server");
const HtmlToReactParser = require("html-to-react").Parser;

const htmlInput =
  '</div></div><div class="c-column css-15e6iv3"><span class="c-text css-1d279ga"> baztung@gmail.com</span></div><div align="right" style="padding-right:15px" class="c-column css-bv1y1v marginLeftAvatarTitle"><h4 style="margin-bottom:5px" class="c-text css-dxtu4k">NULL</h4><span class="c-text css-1d279ga">undefined | <!-- --> undefined</span></div></div></div></div></div><div class="hnet-headerMarginBottom"></div></div></div><div class="_1gAb6isH7eIxnbcZi_Go9x"><div class="c-container css-993e3p"><div class="c-block css-1i82ydo css-1r3jf81"><div class="c-flexbox css-1omlsru"><div align="center" class="c-block css-mgngcc"><div style="margin-bottom:24px" class="c-loader c-loader--dotted c-loader--color-blue c-loader--size-md css-1fd6rce"><div class="c-loader__dot"></div><div class="c-loader__dot"></div>';

const htmlToReactParser = new HtmlToReactParser();
const reactElement = htmlToReactParser.parse(htmlInput);
const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

// assert.equal(reactHtml, htmlInput); // true
