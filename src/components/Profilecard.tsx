import styles from "../../styles/Profilecard.module.css";
import React from "react";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
}
const Profilecard: React.FC<ChildComponentProps> = (props) => {
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
                <b className={styles.text6}>UNLINK</b>
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
        <div className={styles.authenticateWithLinkedinContainer}>
          <p className={styles.authenticateWithLinkedin}>
            {`Authenticate With ` + description + ` to `}
          </p>
          <p className={styles.authenticateWithLinkedin}>earn badge</p>
        </div>
        <b className={styles.linkedinAuth}>{name}</b>
      </div>
      <img className={styles.imageIcon1} alt="" src={imgsrc} />
    </div>
  );
};
export default Profilecard;
