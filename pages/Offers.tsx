import { FunctionComponent } from "react";
import styles from "../styles/Offers.module.css";
import Sidebar from "../src/components/Sidebar";
import React from "react";
import Shiji from "../src/components/Shiji";
const Offers: FunctionComponent = () => {
  return (
    <>
    
    <div className={styles.offers}>
      
      <div className={styles.offersChild} />
      <div className={styles.text}>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges}>
              <span>{` `}</span>
              <span className={styles.badges1}>/ Badges</span>
            </span>
          </div>
        </div>
        <div className={styles.badges2}>Badges</div>
      </div>
      <div className={styles.text1}>
        <b className={styles.availableShj}>Available Shíjì</b>
        <div className={styles.breadcrumbitemprevious1}>
          <div className={styles.breadcrumb1}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges}>
              <span>{` `}</span>
              <span className={styles.badges1}>/ Badges</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.firstCard}>
        <Shiji
          name={"Github Mr.Popular"}
          imgsrc={"/background10.svg"}
          description={"Get 500 stars in Github"}
        />
      </div>
      <div className={styles.firstCard1}>
        <Shiji
          name={"Github TryHard"}
          imgsrc={"/background11.svg"}
          description={"Make 500 commit in github"}
        />
      </div>
      <Sidebar value={2} />
    </div>
    </>
  );
};

export default Offers;
