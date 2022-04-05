import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import View1 from "./component/View1.tsx";
// import View2 from "./component/View2.tsx";
import View3 from "./component/View3.tsx";
import Room from "./component/Room.tsx";
import RoomFaclity from "./component/RoomFaclity.tsx";
import Photo from "./component/Photo.tsx";
import Payment from "./component/Payment.tsx";
import Review from "./component/Review.tsx";
import Agreement from "./component/Agreement.tsx";
import Contract2 from "./component/Contract2.tsx";
import UnderReview from "./component/UnderReview.tsx";
// import Head from "./Head.tsx";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import "./css.css";
// import "./eb5b7bf295f3755c44e1058e2f89ef10fc8de42e_CSS.5d1f4937.css";
// import "./styles.e28b25ac.chunk.css";

ReactDOM.render(
  <React.StrictMode>
    <View1 />
  </React.StrictMode>,
  document.getElementById("root")
);

<>
  <script
    src="https://unpkg.com/react/umd/react.production.min.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin
  ></script>
</>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
