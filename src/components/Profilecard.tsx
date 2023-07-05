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
    <div className={styles.whole}>
      <img className={styles.imageIcon1} alt="" src={imgsrc} />
      <div className={styles.text5}>
      <b className={styles.linkedinAuth}>{name}</b>
        <div className={styles.authenticateWithLinkedinContainer}>
          <p className={styles.authenticateWithLinkedin}>
            {`Authenticate With ` + description + ` to `}
          </p>
          <p className={styles.authenticateWithLinkedin}>earn badge</p>
        </div>
        
      </div>
      
    </div>
  );
};
export default Profilecard;
