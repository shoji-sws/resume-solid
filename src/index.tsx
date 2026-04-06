/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import "./index.css";
import App from "./App";

const PrintResume = lazy(() => import("./components/PrintResume"));

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

render(
  () => (
    <Router base={import.meta.env.BASE_URL}>
      <Route path="/" component={App} />
      <Route path="/print" component={PrintResume} />
    </Router>
  ),
  root
);
