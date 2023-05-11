import register from "preact-custom-element";
import WebComponent from "./components/WebComponent";

register(
    WebComponent /* component */,
    undefined/* tag name*/,
    undefined/* observed properties*/,
    { shadow: true } /* render in a shadow dom to avoid style conflict */
);
