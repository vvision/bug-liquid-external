import { render } from "preact";
import WebComponent from "./src/components/WebComponent";

// Render component directly as a Preact application.
// Note: currently not used as is, but with a web component custom tag.
render(
  <div style={{
    width: "800px"
  }}>
    <WebComponent/>
  </div>,
  document.getElementById('app')
);