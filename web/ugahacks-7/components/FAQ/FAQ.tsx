import React, { ReactElement } from "react";
import Window from "../Window";

const FAQ = (): ReactElement => {
    const faq = "FAQ: What is a hackathon?"
    return(
        <Window
            windowTitle="FAQ"
            windowType="chat"
            windowBodyText={faq}
            windowHeading="Frequently Asked Questions"
            showTopBarButtons
            width="75vh"
            height="auto"
        />
    );
};

export default FAQ;