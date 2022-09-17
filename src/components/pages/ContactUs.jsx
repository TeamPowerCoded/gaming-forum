import React from "react";
import Iframe from "react-iframe";

function ContactUs() {
  return (
    <div>
      <Iframe
        id="JotFormIFrame-222574376156966"
        title="Lime Theme Contact Us Form"
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src={`https://form.jotform.com/222574376156966`}
        frameBorder="0"
        style={{
          width: "100%",
          heigth: "800px",
          border: "none",
        }}
        scrolling="no"
      ></Iframe>
    </div>
  );
}

export default ContactUs;
