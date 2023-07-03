import React, { useState } from "react";
import { FunctionComponent } from "react";
import styles from "../../styles/Mynfts.module.css";
import Profilecard from "./Profilecard";

const Myshijis: FunctionComponent = () => {
  const [profiles, setProfiles] = useState([
    {
      name: "Github Mr.Popular",
      description: "shiji",
      imgsrc: "/image3.svg",
    },
  ]);

  const addProfile = () => {
    const newProfile = {
      name: "New Profile",
      description: "New Description",
      imgsrc: "/placeholder-image.png",
    };
    setProfiles([...profiles, newProfile]);
  };

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
                isZixin={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myshijis;
