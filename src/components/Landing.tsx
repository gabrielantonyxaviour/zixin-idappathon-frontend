import { FunctionComponent, useCallback, useEffect } from "react";
import React from "react";
import styles from "../../styles/Landing.module.css";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
const Landing: FunctionComponent = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    if (isConnected) {
      window.location.href = "/dashboard";
    }
    1;
  }, [isConnected]);
  return (
    <div className={styles.landing}>
      <div className={styles.landingChild} />
      <div className={styles.text}>
        <div className={styles.inspiredByThe}>INSPIRED BY THE FUTURE:</div>
        <b className={styles.theZxnAContainer}>
          <p className={styles.theZxn}>The ‘Zìxìn’</p>
          <p className={styles.aCrossChainAuthenticator}>
            A Cross-chain Authenticator
          </p>
        </b>
      </div>
      <div className={styles.buttonbase} onClick={openConnectModal}>
        <div className={styles.widthStructure}>
          <div className={styles.heightStructure}>
          <div className={styles.buttonBody}>
              <div className={styles.icon}>
                <div className={styles.div}></div>
              </div>
              <b className={styles.text1}>Connect Wallet</b>
              <div className={styles.icon}>
                <div className={styles.div}></div>
              </div>
            </div>
          </div>
          <div className={styles.minwidth}>
            <div className={styles.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
