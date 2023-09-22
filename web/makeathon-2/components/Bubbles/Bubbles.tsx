"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import styles from "../../styles/Bubbles.module.css";
import config from "./particles.json";

const BubblesAnimation = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return <Particles className={styles.body} init={init} options={config} />;
};

export default BubblesAnimation;
