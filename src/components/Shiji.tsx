import React from "react";
import styles from "./shiji.module.css";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
}
const Shiji: React.FC<ChildComponentProps> = (props) => {
  const { name, imgsrc, description } = props;
  return (
    <div>
      <img className={styles.backgroundIcon} alt="" src={imgsrc} />
      <img className={styles.imageIcon} alt="" src="/image.svg" />
      <div className={styles.text2}>
        <img
          className={styles.ioniconaarrowforward}
          alt=""
          src="/ioniconaarrowforward1.svg"
        />
        <div className={styles.get500Stars}>{description}</div>
        <b className={styles.githubMrpopular}>{name}</b>
      </div>
    </div>
  );
};
export default Shiji;
