import React, { useEffect } from "react";
import styles from "../../styles/zixins.module.css";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
  click: any;
  accesstoken:string;
}
const Zixins: React.FC<ChildComponentProps> = (props) => {
  const { name, imgsrc, description, click,accesstoken } = props;
  let button='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-32 opacity-50 cursor-not-allowed'
  accesstoken =='not received' || accesstoken ==null || accesstoken == undefined ? button='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-32 opacity-50 cursor-not-allowed': button='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-32'
  return (
    <div>
      <img
        className={styles.backgroundIcon}
        alt=""
        src={imgsrc}
        onClick={click}
      />
      <img className={styles.imageIcon} alt="" src="/image.svg" />
      <div className={styles.text2}>
        <img
          className={styles.ioniconaarrowforward}
          alt=""
          src="/ioniconaarrowforward.svg"
        />
        <div className={styles.authenticateWithTwitterContainer}>
          <p className={styles.authenticateWithTwitter}>
            {`Authenticate With ` + name + ` to `}
          </p>
          <p className={styles.authenticateWithTwitter}>earn badge</p>
        </div>
        <b className={styles.twitterAuthBadge}>{description}</b>
        <button className={button} >
         Mint
        </button>
      </div>
    </div>
  );
};
export default Zixins;
