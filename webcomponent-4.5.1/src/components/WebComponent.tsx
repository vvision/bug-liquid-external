import { LdButton, LdTypo } from "@emdgroup-liquid/liquid/dist/react";

// const managedProperties: any[] = [
//     { name: "text", type: "text" },
// ];

const WebComponent = () => {

    return (
        <>
            <LdTypo variant="b4">This is a component with Liquid 4.5.1 and:</LdTypo>
            <LdButton>Just a simple button</LdButton>
        </>
    );
  };


WebComponent.tagName = 'demo-webcomponent-4.5.1';
WebComponent.version = '1.0.0';
// WebComponent.observedAttributes = managedProperties.map((p) => p.name);
export default WebComponent;