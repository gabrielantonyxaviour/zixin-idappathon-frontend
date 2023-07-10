import React, { useState } from "react";
import { FunctionComponent } from "react";
import styles from "../../styles/Mynfts.module.css";
import Profilecard from "./Profilecard";

const Myshijis: FunctionComponent = () => {
  const [profiles, setProfiles] = useState([
    {
      name: "Linkedin Auth",
      description: "linkedin",
      imgsrc: "/image5.svg",
    },
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
    {
        name: "Github Auth",
        description: "Github",
        imgsrc: "/image3.svg",
      },
      {
        name: "Linkedin Auth",
        description: "linkedin",
        imgsrc: "/image5.svg",
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myshijis;
