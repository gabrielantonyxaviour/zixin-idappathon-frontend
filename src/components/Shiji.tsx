import React, { useEffect, useState } from "react";
import { useContractWrite } from "wagmi";
import styles from "../../styles/shiji.module.css";
import { SHIJI_POLYGON_ABI, SHIJI_POLYGON_ADDRESS } from "../utils/constants";
import getSecrets from "../utils/getEncryptedSecrets";
import { ethers } from "ethers";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
  shijiId: number;
  accessToken: string;
}
const Shiji: React.FC<ChildComponentProps> = (props) => {
  const { name, imgsrc, description, shijiId, accessToken } = props;
  const [encryptedSecrets, setEncryptedSecrets] = useState("");
  const { write: claimShiji } = useContractWrite({
    address: SHIJI_POLYGON_ADDRESS,
    abi: SHIJI_POLYGON_ABI,
    functionName: "claimShiji",
    args: [shijiId, [], encryptedSecrets, 1901, 300000],
    maxPriorityFeePerGas: ethers.toBigInt(2900000000),
    maxFeePerGas: ethers.toBigInt(3000000000),
    gas: ethers.toBigInt(3000000000),
  });
  useEffect(() => {});
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
        <button
          className="text-white bg-blue-700 p-2 mx-2 mt-32 rounded-xl "
          onClick={() => {
            console.log(accessToken);
            if (
              accessToken != "not received" &&
              accessToken != null &&
              accessToken != undefined &&
              accessToken != ""
            ) {
              getSecrets(accessToken).then((secrets: string) => {
                setEncryptedSecrets(secrets);
                claimShiji();
              });
            }
          }}
        >
          Claim now
        </button>
      </div>
    </div>
  );
};
export default Shiji;
