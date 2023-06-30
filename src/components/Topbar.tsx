import styles from "../../styles/Topbar.module.css";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Topbar = () => {
  const { isDisconnected } = useAccount();
  const { address } = useAccount();
  useEffect(() => {
    if (isDisconnected) {
      // close();
    }
  }, [isDisconnected]);
  return (
    <div className={styles.profileElements}>
      <img className={styles.backgroundIcon} alt="" src="/background7@2x.png" />
      <div className={styles.projects}>
        <ConnectButton />
      </div>
      <div className={styles.avatar}>
        <div className={styles.name}>
          <div className={styles.x2f59dbbcb3b393d86dbd539105e22}>{address}</div>
          <b className={styles.DisDisconnectedWallet}>Wallet</b>
        </div>
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
        <img className={styles.icon1} alt="" src="/icon10.svg" />
      </div>
    </div>
  );
};

export default Topbar;
