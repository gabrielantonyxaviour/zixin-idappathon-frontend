import { FunctionComponent, useEffect } from "react";
import styles from "../styles/Badges.module.css";
import Sidebar from "../src/components/Sidebar";
import Zixins from "../src/components/Zixins";
import React from "react";
import { access } from "fs";
const Badges: FunctionComponent = () => {
  const [googleAccessToken, setGoogleAccessToken] =
    React.useState("not received");
  const [githubAccessToken, setGithubAccessToken] =
    React.useState("not received");
  const [facebookAccessToken, setFacebookAccessToken] =
    React.useState("not received");
  const [linkedinAccessToken, setLinkedinAccessToken] =
    React.useState("not received");
  useEffect(() => {
    fetch("http://localhost:5000/auth/google/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setGoogleAccessToken(data.accessToken);
          console.log("Google Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/auth/github/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setGithubAccessToken(data.accessToken);
          console.log("Github Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/auth/facebook/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setFacebookAccessToken(data.accessToken);
          console.log("Facebook Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/auth/google/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setGoogleAccessToken(data.accessToken);
          console.log("Google Access Token:", data.accessToken);
        }
        console.log("DBJVSUBIBHVEDHIUH");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/auth/linkedin/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setLinkedinAccessToken(data.accessToken);
          console.log("Linkedin Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
    fetch("http://localhost:5000/auth/google/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setGoogleAccessToken(data.accessToken);
          console.log("Google Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
    fetch("http://localhost:5000/auth/github/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setGithubAccessToken(data.accessToken);
          console.log("Github Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const linkedin = () => {
    window.open("http://localhost:5000/auth/linkedin", "_self");
    fetch("http://localhost:5000/auth/linkedin/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setLinkedinAccessToken(data.accessToken);
          console.log("linkedin Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook  ", "_self");
    fetch("http://localhost:5000/auth/facebook/accesstoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          console.log("Received data:", data);
          setFacebookAccessToken(data.accessToken);
          console.log("Facebook Access Token:", data.accessToken);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
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
              <span className={styles.badges2}>/ Zixins</span>
            </span>
          </div>
        </div>
        <div className={styles.badges3}>Zixins</div>
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
              <span className={styles.badges2}>/ Zixins</span>
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
          accesstoken={linkedinAccessToken}
        />
      </div>
      <div className={styles.firstCard}>
        <Zixins
          name="Google"
          description="Google Auth Badge"
          imgsrc="/background3@2x.png"
          click={google}
          accesstoken={googleAccessToken}
        />
      </div>
      <div className={styles.firstCard4}>
        <Zixins
          name="Github"
          description="Github Auth Badge"
          imgsrc="/background4.svg"
          click={github}
          accesstoken={githubAccessToken}
        />
      </div>
      <div className={styles.firstCard5}>
        <Zixins
          name="Facebook"
          description="Facebook Auth Badge"
          imgsrc="/background5.svg"
          click={facebook}
          accesstoken={facebookAccessToken}
        />
      </div>
      <Sidebar value={1} />
    </div>
  );
};

export default Badges;
