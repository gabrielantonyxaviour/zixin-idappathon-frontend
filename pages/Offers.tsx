import { FunctionComponent, useEffect, useState } from "react";
import styles from "../styles/Offers.module.css";
import Sidebar from "../src/components/Sidebar";
import React from "react";
import Shiji from "../src/components/Shiji";
const Offers: FunctionComponent = () => {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/auth/github/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setAccessToken(data.accessToken);
          console.log("Github Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
            accessToken={accessToken}
            description={"Get 10 followers in Github"}
            shijiId={0}
          />
        </div>
        <div className={styles.firstCard1}>
          <Shiji
            name={"Github TryHard"}
            imgsrc={"/background11.svg"}
            description={"Make 500 commit in github"}
            accessToken={accessToken}
            shijiId={1}
          />
        </div>
        <Sidebar value={2} />
      </div>
    </>
  );
};

export default Offers;
