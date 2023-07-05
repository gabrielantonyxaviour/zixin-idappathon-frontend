import { FunctionComponent, useCallback } from "react";
import styles from "../../styles/HomeOffers1.module.css";
import Sidebar from "./Sidebar";
import Profilecard from "./Profilecard";
import React from "react";
import Topbar from "./Topbar";
import { useNetwork } from "wagmi";
import { useChainModal } from "@rainbow-me/rainbowkit";
const HomeOffers1: FunctionComponent = () => {
  const { openChainModal } = useChainModal();
  const { chain} = useNetwork()
  return (
    <div className={styles.homeoffers1}>
      <div className={styles.homeoffers1Child} />
      <div className={styles.text}>
        <div className={styles.profile}>Profile</div>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.profile1}>
              <span>{` `}</span>
              <span className={styles.profile2}>/ Profile</span>
            </span>
          </div>
        </div>
      </div>
      <Topbar />
      <div className={styles.tokenview}>
        <div className={styles.background}>
          <div className={styles.tabs}>
            <div className={styles.teams} onClick={() => {}}>
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <img className={styles.icon} alt="" src="/icon11.svg" />
                    <b className={styles.text3}>Shíjì</b>
                  </div>
                </div>
                <div className={styles.minwidth}>
                  <div className={styles.content} />
                </div>
              </div>
            </div>
            <div className={styles.overview1}>
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <img className={styles.icon} alt="" src="/icon7.svg" />
                    <b className={styles.text4}>Zìxìn</b>
                  </div>
                </div>
                <div className={styles.minwidth}>
                  <div className={styles.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card3}>
            <Profilecard
              name="Linkedin Auth"
              description="linkedin"
              imgsrc="/image5.svg"
            />
          </div>
          <div className={styles.card2}>
            <Profilecard
              name="Github Auth"
              description="Github"
              imgsrc="/image3.svg"
            />
          </div>
          <div className={styles.card1}>
            <Profilecard
              name="Google Auth"
              description="Google"
              imgsrc="/image6@2x.png"
            />
          </div>
        </div>
      </div>
      <Sidebar value={0} />
    </div>
  );
};

export default HomeOffers1;
