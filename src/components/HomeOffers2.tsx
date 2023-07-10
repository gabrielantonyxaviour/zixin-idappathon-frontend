import { FunctionComponent} from "react";
import styles from "../../styles/HomeOffers2.module.css";
import Sidebar from "./Sidebar";;
import React from "react";
import Topbar from "./Topbar";
import Myshijis from "./Myshijis";
const HomeOffers2: FunctionComponent = () => {
  return (
    <>
    <div className={styles.whole}>
    <Myshijis/>
    <div>
    <div className={styles.tokenview}>
          <div className={styles.tabs}>
            <div className={styles.teams}>
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
            <a className={styles.overview1} href="/dashboard">
              <div className={styles.widthStructure}>
                <div className={styles.heightStructure}>
                  <div className={styles.buttonBody}>
                    <img className={styles.icon} alt="" src="/icon7.svg" />
                    <b className={styles.text4}>Zìxìn</b>
                  </div>
                </div>
              </div>
            </a>
          </div>
      </div>
    </div>
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
      <Sidebar value={0} />
    </div>
    </div>
    </>
  );
};

export default HomeOffers2;
