import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import styles from "../../styles/Mynfts.module.css";
import Profilecard from "./Profilecard";

const Myzixins: FunctionComponent = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProfiles([
        ...profiles,
        {
          name: "Github Auth",
          description: "Github",
          imgsrc: "/image3.svg",
        },
        {
          name: "Google Auth",
          description: "Google",
          imgsrc: "/image6@2x.png",
        },
      ]);
    }, 1000);
  }, []);
  return (
    <div className={styles.whole}>
      <div className={styles.back}>
        <div className={styles.cards}>
          {profiles.map((profile, index) => (
            <div key={index} className={styles.zixins}>
              <Profilecard
                name={profile.name}
                description={profile.description}
                imgsrc={profile.imgsrc}
                isZixin={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myzixins;
