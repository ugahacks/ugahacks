import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/Team.module.css";
import Image from "next/image";
import bani from "../../public/pfp/BanibeEbegbodi.png";
//sponsorteam
import siddhi from "../../public/pfp/SiddhiChitgopkar.jpg";
import jiya from "../../public/pfp/JiyaPatel.jpeg";
import matthewC from "../../public/pfp/MatthewChambers.jpeg";
import raegan from "../../public/pfp/RaeganGirdley.jpeg";
import matthewJ from "../../public/pfp/MatthewJue.jpeg";
import samee from "../../public/pfp/SameeLalani.jpeg";
//marketingteam
import gargee from "../../public/pfp/GargeeJamadagni.png";
import siri from "../../public/pfp/SiriAlla.jpeg";
import ryan from "../../public/pfp/RyanMajd.jpeg";
import sophia from "../../public/pfp/SophiaRhoads.jpg";
import hailey from "../../public/pfp/HaileyHubbard.jpg";
import siya from "../../public/pfp/SiyaSharma.jpg";
import kaytie from "../../public/pfp/KaytieLin.jpg";
import sarah from "../../public/pfp/SarahOrji.jpg";
//logisticteam
import helium from "../../public/pfp/HeliumYang.jpg";
import khushi from "../../public/pfp/KhushiBhatamrekar.png";
import ethan from "../../public/pfp/EthanOgle.jpg";
import catherine from "../../public/pfp/CatherineChu.jpg";
import batu from "../../public/pfp/BatuOzdener.jpg"
import kevin from "../../public/pfp/KevinDo.jpg";
import angel from "../../public/pfp/AngelHoang.jpeg"
import hemant from "../../public/pfp/HemantGautam.jpeg"
import kellen from "../../public/pfp/KellenBrown.png"
import codey from "../../public/pfp/CodeyBorrelli.jpg"
import elaine from "../../public/pfp/ElaineChow.png"
//techteam
import shawn from "../../public/pfp/ShawnPradeep.jpeg";
import vansh from "../../public/pfp/VanshArora.jpg"
import kasra from "../../public/pfp/KasraGhaffari.jpeg"
import nikita from "../../public/pfp/NikitaJha.jpg"
import max from "../../public/pfp/MaxPelot.jpg"
import hannah from "../../public/pfp/HannieKwak.jpeg"
import dhruv from "../../public/pfp/DhruvPatel.jpeg"
import alex from "../../public/pfp/AlexTeal.jpg"
function Team() {
  return (
    <div className="main">
      <Navbar />
      <div className={styles.ParentContainer}>
        <div className={styles.leadContainer}>
          {/* bani lead director here */}
          <Image className={styles.directorpfp} src={bani} alt="Banibe" />
          <h3 className={styles.heading}>Banibe Ebegbodi</h3>
          <h4 className={styles.heading}>Lead Director</h4>
        </div>
        <div className={styles.directorContainer}>
          <div className={styles.sponsorContainer}>
            {/* sponsors and director here */}
            <div className={styles.directorWrapper}>
              <Image className={styles.directorpfp} src={siddhi} alt="siddhi" />
              <h4 className={styles.heading}>Siddhi Chitgopkar</h4>
              <h5 className={styles.heading}>Sponsorship Director</h5>
            </div>
            <div className={styles.pfpWrapper}>
              <Image className={styles.pfp} src={jiya} alt="jiya" />
              <p className={styles.name}>Jiya Patel</p>
            </div>
            <div className={styles.pfpWrapper}>
              <Image className={styles.pfp} src={matthewC} alt="matthewC" />
              <p className={styles.name}>Matthew Chambers</p>
            </div>
            <div className={styles.pfpWrapper}>
              <Image className={styles.pfp} src={raegan} alt="raegan" />
              <p className={styles.name}>Raegan Girdley</p>
            </div>
            <div className={styles.pfpWrapper}>
              <Image className={styles.pfp} src={matthewJ} alt="matthewJ" />
              <p className={styles.name}>Matthew Jue</p>
            </div>
            <div className={styles.pfpWrapper}>
              <Image className={styles.pfp} src={samee} alt="samee" />
              <p className={styles.name}>Samee Lalani</p>
            </div>
          </div>

          {/* marketing and director here */}
          <div className={styles.marketingContainer}>
            <div className={styles.directorWrapper}>
              <Image className={styles.directorpfp} src={gargee} alt="gargee" />
              <h4 className={styles.heading}>Gargee Jamadagni</h4>
              <h5 className={styles.heading}> Marketing Director</h5>
            </div>
            <div className={styles.column}>
              <div className={styles.column1}>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={siri} alt="siri" />
                  <p className={styles.name}>Siri Alla</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={ryan} alt="ryan" />
                  <p className={styles.name}>Ryan Majd</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={sophia} alt="sophia" />
                  <p className={styles.name}>Sophia Rhoads</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={hailey} alt="hailey" />
                  <p className={styles.name}>Hailey Hubbard</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={siya} alt="siya" />
                  <p className={styles.name}>Siya Sharma</p>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={kaytie} alt="kaytie" />
                  <p className={styles.name}>Kaytie Lin</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={sarah} alt="sarah" />
                  <p className={styles.name}>Sarah Orji</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logisticsContainer}>
            {/* logistics and director here */}
            <div className={styles.directorWrapper}>
              <Image className={styles.directorpfp} src={helium} alt="helium" />
              <h4 className={styles.heading}>Helium Yang</h4>
              <h5 className={styles.heading}>Logistics Director</h5>
            </div>
            <div className={styles.column}>
              <div className={styles.column1}>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={khushi} alt="khushi" />
                  <p className={styles.name}>Khushi Bhatamrekar </p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image
                    className={styles.pfp}
                    src={catherine}
                    alt="catherine"
                  />
                  <p className={styles.name}>Catherine Chu</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={ethan} alt="ethan" />
                  <p className={styles.name}> Ethan Ogle</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={batu} alt="batu" />
                  <p className={styles.name}>Batu Ozdener</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={kevin} alt="kevin" />
                  <p className={styles.name}>Kevin Do</p>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={angel} alt="angel" />
                  <p className={styles.name}>Angel Hoang</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={hemant} alt="hemant" />
                  <p className={styles.name}>Hemant Gautam</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={kellen} alt="kellen" />
                  <p className={styles.name}>Kellen Brown</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={codey} alt="codey" />
                  <p className={styles.name}>Codey Borrelli</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={elaine} alt="elaine" />
                  <p className={styles.name}>Elaine Chow</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.techContainer}>
            {/* tech and director here */}
            <div className={styles.directorWrapper}>
              <Image className={styles.directorpfp} src={shawn} alt="shawn" />
              <h4 className={styles.heading}>Shawn Pradeep</h4>
              <h5 className={styles.heading}>Tech Director</h5>
            </div>
            <div className={styles.column}>
              <div className={styles.column1}>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={nikita} alt="nikita" />
                  <p className={styles.name}>Nikita Jha</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={vansh} alt="vansh" />
                  <p className={styles.name}>Vansh Arora</p></div> 
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={kasra} alt="kasra" />
                  <p className={styles.name}>Kasra Ghaffari</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={max} alt="max" />
                  <p className={styles.name}>Max Pelot</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={hannah} alt="hannah" />
                <p className={styles.name}>Hannah Kwak</p>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={dhruv} alt="dhruv" />
                   <p className={styles.name}>Dhruv Patel</p>
                </div>
                <div className={styles.pfpWrapper}>
                  <Image className={styles.pfp} src={alex} alt="alex" />
                   <p className={styles.name}>Alex Teal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
