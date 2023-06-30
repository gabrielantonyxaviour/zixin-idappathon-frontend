import React from "react";
import styles from "./Profilecard1.module.css";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
}
const Profilecard1: React.FC<ChildComponentProps> = (props) => {
  const { name, imgsrc, description } = props;
  return (
    <div>
      <div className={styles.text5}>
        <div className={styles.buttonbase}>
          <div className={styles.widthStructure}>
            <div className={styles.heightStructure}>
              <div className={styles.buttonBody3}>
                <div className={styles.icon4}>
                  <div className={styles.div}></div>
                </div>
                <b className={styles.text6}>Learn More</b>
                <div className={styles.icon4}>
                  <div className={styles.div}></div>
                </div>
              </div>
            </div>
            <div className={styles.minwidth}>
              <div className={styles.content3} />
            </div>
          </div>
        </div>
        <div className={styles.get500Stars}>{description}</div>
        <b className={styles.githubMrpopular}>{name}</b>
      </div>
      <img className={styles.imageIcon1} alt="" src={imgsrc} />
    </div>
  );
};
export default Profilecard1;
