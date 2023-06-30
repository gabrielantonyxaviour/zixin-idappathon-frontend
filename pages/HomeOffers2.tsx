import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeOffers2.module.css";
import Sidebar from "../src/components/Sidebar";
import Profilecard1 from "../src/components/Profilecard1";
import React from "react";
import Topbar from "../src/components/Topbar";
const HomeOffers2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOverviewContainer1Click = useCallback(() => {
    navigate("/homeoffers1");
  }, [navigate]);

  return (
    <div className={styles.homeoffers2}>
      <div className={styles.homeoffers2Child} />
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
      <div className={styles.card}>
        <img
          className={styles.backgroundIcon1}
          alt=""
          src="/background8@2x.png"
        />
        <div className={styles.text2}>
          <img
            className={styles.ioniconaarrowforward}
            alt=""
            src="/ioniconaarrowforward2.svg"
          />
          <b className={styles.welcomeBack}>Welcome back!</b>
          <div className={styles.niceToSee}>Nice to see you, Mark Johnson!</div>
        </div>
      </div>
      <div className={styles.chainselect}>
        <img
          className={styles.backgroundIcon2}
          alt=""
          src="/background9@2x.png"
        />
        <b className={styles.ethereum}>Ethereum</b>
      </div>
      <div className={styles.tokenview}>
        <div className={styles.background}>
          <div className={styles.tabs}>
            <div className={styles.teams}>
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <img className={styles.icon} alt="" src="/icon6.svg" />
                    <b className={styles.text3}>Shíjì</b>
                  </div>
                </div>
                <div className={styles.minwidth}>
                  <div className={styles.content} />
                </div>
              </div>
            </div>
            <div
              className={styles.overview1}
              onClick={onOverviewContainer1Click}
            >
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
          <div className={styles.card2}>
            <Profilecard1
              name="Github Mr.Popular"
              description="Get 500 stars in Github"
              imgsrc="/image3.svg"
            />
          </div>
          <div className={styles.card1}>
            <Profilecard1
              name="Github TryHard"
              description="Make 500 commit in github"
              imgsrc="/image3.svg"
            />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default HomeOffers2;
