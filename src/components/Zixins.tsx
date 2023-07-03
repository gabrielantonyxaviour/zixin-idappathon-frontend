import React, { useEffect, useState } from "react";
import { useContractWrite } from "wagmi";
import styles from "../../styles/zixins.module.css";
import { ZIXIN_POLYGON_ABI, ZIXIN_POLYGON_ADDRESS } from "../utils/constants";
import getSecrets from "../utils/getEncryptedSecrets";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  zixinId: number;
  description: string;
  click: any;
  accesstoken: string;
}
const Zixins: React.FC<ChildComponentProps> = (props) => {
  const { name, zixinId, imgsrc, description, click, accesstoken } = props;
  const [encryptedSecrets, setEncryptedSecrets] = useState("");
  const { write: claimZixin } = useContractWrite({
    address: ZIXIN_POLYGON_ADDRESS,
    abi: ZIXIN_POLYGON_ABI,
    functionName: "claimZixin",
    args: [zixinId, [], encryptedSecrets, 1900, 300000],
  });
  let button =
    "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-32 opacity-50 cursor-not-allowed";
  accesstoken == "not received" ||
  accesstoken == null ||
  accesstoken == undefined
    ? (button =
        "bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded  mt-32 opacity-50 cursor-not-allowed")
    : (button =
        "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-32");
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
        <button
          className={button}
          onClick={() => {
            if (
              accesstoken != "not received" &&
              accesstoken != null &&
              accesstoken != undefined &&
              accesstoken != ""
            ) {
              console.log(accesstoken);
              getSecrets(accesstoken).then((secrets) => {
                setEncryptedSecrets(secrets);
                console.log("ENCRYPTED SECRETS: " + encryptedSecrets);
                console.log("ZiXIN ID: " + zixinId);
                claimZixin();
                // console.log("ALL GOOD: " + encryptedSecrets);
              });
            }
          }}
        >
          {" "}
          {accesstoken == "not received" ||
          accesstoken == null ||
          accesstoken == undefined
            ? "Not Connected"
            : "Mint"}
        </button>
      </div>
    </div>
  );
};
export default Zixins;
