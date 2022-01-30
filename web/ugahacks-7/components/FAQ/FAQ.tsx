import React, { ReactElement } from "react";
import Window from "../Window";
import styles from "../../styles/FAQ.module.css";

export { faqQuestions };

const FAQ = (): ReactElement => {
    const faq = "<h1>Hello</h1>"
    return(
        <Window
            windowTitle="FAQ"
            windowType="chat-faq"
            windowBodyText={faq}
            windowHeading="Frequently Asked Questions"
            showTopBarButtons
            width="75vh"
            height="auto"
        />
    );
};

function faqQuestions(): ReactElement {
    return (
      <>
        <div className="chat">
          <div className="field-row-stacked">
            <textarea className={styles.chatBody}>

            </textarea>
          </div>
        </div>
      </>
    );
};

export default FAQ;