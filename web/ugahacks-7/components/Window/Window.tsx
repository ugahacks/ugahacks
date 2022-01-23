import React, { ReactElement } from "react";
import Draggable from "react-draggable";
import "98.css";
import styles from "../../styles/Window.module.css";

interface WindowProps {
  windowTitle: string;
  width?: string;
  height?: string;
  windowType: "browser" | "chat" | "image";
  showTopBarButtons: boolean;
  windowHeading?: string;
  windowBodyText?: string;
}

const generateWindowStructure = (
  type: string,
  windowTitle: string,
  heading = "",
  bodyText = "",
  dataList?: [{ id: number; sender: string; message: string }]
): ReactElement => {
  switch (type) {
    case "browser":
    default:
      return (
        <>
          <ul className="tree-view">
            <li className={styles.url}>https://7.ugahacks.com/{windowTitle}</li>
          </ul>
          <ul className="tree-view">
            <li>
              <h3>{heading}</h3>
            </li>
            <li>
              <p className={styles.bodyText}>{bodyText}</p>
            </li>
          </ul>
        </>
      );
    case "chat":
      return (
        <>
          <ul className="tree-view">
            {dataList &&
              dataList.map(
                (data: { id: number; sender: string; message: string }) => (
                  <li key={data.id}>
                    <span>{data.sender}</span>: {data.message}
                  </li>
                )
              )}
          </ul>
          <div className="field-row-stacked">
            <textarea></textarea>
          </div>
          <button>Send Message</button>
        </>
      );
    case "image":
      return <p></p>; // Add similar structure to chat layout with mapping over an obj with image data - See Sponsors section on Hacks 6
  }
};

const Window = ({
  windowTitle,
  width,
  height,
  windowType = "browser",
  showTopBarButtons,
  windowHeading,
  windowBodyText,
}: WindowProps): ReactElement => {
  return (
    // Add check for mobile/pc and only use draggable on pc
    <Draggable handle=".title-bar">
      <div className="window" style={{ width: width, height: height }}>
        <div className={`title-bar ${styles.blueBanner}`}>
          <div className="title-bar-text" style={{ fontSize: "1.75em" }}>
            {windowTitle}
          </div>
          {showTopBarButtons && (
            <div className="title-bar-controls">
              <button aria-label="Minimize" style={{ padding: "1em", backgroundSize: "1em", backgroundPosition: "50% 80%" }} />
              <button aria-label="Maximize" style={{ padding: "1em", backgroundSize: "1.3em" }} />
              <button aria-label="Close" style={{ padding: "1em", backgroundSize: "1.3em" }} />
            </div>
          )}
        </div>
        <div className="window-body">
          {generateWindowStructure(
            windowType,
            windowTitle,
            windowHeading,
            windowBodyText
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
