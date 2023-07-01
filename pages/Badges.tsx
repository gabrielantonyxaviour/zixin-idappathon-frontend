import { FunctionComponent } from "react";
import styles from "../styles/Badges.module.css";
import Sidebar from "../src/components/Sidebar";
import Zixins from "../src/components/Zixins";
import React from "react";
import { access } from "fs";
const Badges: FunctionComponent = () => {
  let googleaccesstoken:string='not received';
  let githubaccesstoken:string='not received';
  let facebookaccesstoken:string='not received';
  let linkedinaccesstoken:string='not received';
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
    fetch('http://localhost:5000/auth/google/accesstoken')
  .then(response => response.json())
  .then(data => {
    console.log('Received data:', data);
    googleaccesstoken = data.accessToken;
    console.log('Google Access Token:', googleaccesstoken);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
    fetch('http://localhost:5000/auth/github/accesstoken')
    .then(response => response.json())
    .then(data => {
      console.log('Received data:', data);
      githubaccesstoken = data.accessToken;
      console.log('Github Access Token:', githubaccesstoken);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  const linkedin = () => {
    window.open("http://localhost:5000/auth/linkedin", "_self");
    fetch('http://localhost:5000/auth/linkedin/accesstoken')
    .then(response => response.json())
    .then(data => {
      console.log('Received data:', data);
      linkedinaccesstoken = data.accessToken;
      console.log('linkedin Access Token:', linkedinaccesstoken);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook  ", "_self");
    fetch('http://localhost:5000/auth/facebook/accesstoken')
    .then(response => response.json())
    .then(data => {
      console.log('Received data:', data);
      facebookaccesstoken = data.accessToken;
      console.log('Facebook Access Token:', facebookaccesstoken);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  return (
    <div className={styles.badges}>
      <div className={styles.badgesChild} />
      <div className={styles.text}>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges1}>
              <span>{` `}</span>
              <span className={styles.badges2}>/ Badges</span>
            </span>
          </div>
        </div>
        <div className={styles.badges3}>Badges</div>
      </div>
      <div className={styles.text1}>
        <b className={styles.availableZxns}>Available Zìxìns</b>
        <div className={styles.breadcrumbitemprevious1}>
          <div className={styles.breadcrumb1}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges1}>
              <span>{` `}</span>
              <span className={styles.badges2}>/ Badges</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.firstCard2}>
        <Zixins
          name="linkedin"
          description="Linkedin Auth Badge"
          imgsrc="/background2.svg"
          click={linkedin}
        />
      </div>
      <div className={styles.firstCard}>
        <Zixins
          name="Google"
          description="Google Auth Badge"
          imgsrc="/background3@2x.png"
          click={google }
        />
      </div>
      <div className={styles.firstCard4}>
        <Zixins
          name="Github"
          description="Github Auth Badge"
          imgsrc="/background4.svg"
          click={github}
        />
      </div>
      <div className={styles.firstCard5}>
        <Zixins
          name="Facebook"
          description="Facebook Auth Badge"
          imgsrc="/background5.svg"
          click={facebook}
        />
      </div>
      <Sidebar value={1} />
    </div>
  );
};

export default Badges;
