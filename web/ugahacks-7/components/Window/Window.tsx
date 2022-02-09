import React, { ReactElement } from "react";
import Draggable from "react-draggable";
import "98.css";
import styles from "../../styles/Window.module.css";
import Sponsors from "../../components/Sponsors";
import SponsorLogo from "../../components/Sponsors";

interface WindowProps {
  windowTitle: string;
  width?: string;
  height?: string;
  windowType: "browser" | "chat" | "image";
  showTopBarButtons: boolean;
  windowHeading?: string;
  windowBodyText?: string;
  position?: string;
  dataList?: [{ id: number; sender: string; message: string }];
  sponsorList?: [{ id: number; image: string; alt: string}];

}

const generateWindowStructure = (
  type: string,
  windowTitle: string,
  heading = "",
  bodyText = "",
  dataList?: [{ id: number; sender: string; message: string }],
  sponsorList?: [{ id: number; image: string; alt: string}],
): ReactElement => {
  switch (type) {
    case "browser":
    default:
      return (
        <div className="layer">
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
        </div>
      );
    case "chat":
      return (
        <div className="layer">
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
        </div>
      );
    case "sponsors":
      return (
        <div className="layer">
          <ul className="tree-view">
            {sponsorList &&
              sponsorList.map(
                (data: { id: number; image: string; alt: string }) => (
                  <li key={data.id}>
                    <span>
                      <SponsorLogo 
                       
                      />
                    </span>
                  </li>
                )
              )}
          </ul>
        </div> // Add similar structure to chat layout with mapping over an obj with image data - See Sponsors section on Hacks 6
      )
  }
};

const Window = ({
  windowTitle,
  width = "50vh",
  height = "50vh",
  windowType = "browser",
  showTopBarButtons,
  windowHeading,
  windowBodyText,
  dataList,
  sponsorList,
}: WindowProps): ReactElement => {
  return (
    // Add check for mobile/pc and only use draggable on pc
    <Draggable handle=".title-bar">
      <div className="window" style={{ width: width, height: height, position: "absolute", top: "20em", left: "55em" }}>
        <div className={`title-bar ${styles.blueBanner}`}>
          <div className="title-bar-text">{windowTitle}</div>
          {showTopBarButtons && (
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          )}
        </div>
        <div className="window-body">
          {generateWindowStructure(
            windowType,
            windowTitle,
            windowHeading,
            windowBodyText,
            dataList,
            sponsorList,
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
