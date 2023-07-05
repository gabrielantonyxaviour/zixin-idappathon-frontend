import styles from "../../styles/Topbar.module.css";
import React, { useEffect } from "react";
import { useAccount, useNetwork} from "wagmi";
import {useAccountModal, useChainModal } from "@rainbow-me/rainbowkit";

import { useBalance } from 'wagmi'

const Topbar = () => {
  const { openChainModal } = useChainModal();
  const { chain} = useNetwork()
  const { address,isDisconnected } = useAccount();
  const { openAccountModal } = useAccountModal();  
  useEffect(() => {
    if (isDisconnected) {
      window.location.href = "/"
    }
  }, [isDisconnected]);
  const { data} = useBalance({
    address: address,
  })
  return (
    <>
    
    <div className={styles.totalpos}>
    <div className={styles.back}></div>
    <div className={styles.chainselect} onClick={openChainModal}>
    <img
      className={styles.backgroundIcon2}
      alt=""
      src="/background9@2x.png"
    />
    <b className={styles.ethereum}>{chain!= undefined ? chain.name:'loading'}</b>
  </div>
    <div className={styles.profileElements}>
      
      <div className={styles.projects} onClick={openAccountModal}>
        <div className={styles.buttonBody}>
                  <img src="/settings.png" />
        </div>
      </div>
      <div className={styles.avatar}>
        <div className={styles.name}>
          <div className={styles.x2f59dbbcb3b393d86dbd539105e22}>{address}</div>
          <div className={styles.balancestyle}>Balance : {data?.formatted} {data?.symbol}</div>
          <b className={styles.DisDisconnectedWallet}>Wallet</b>
        </div>
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Topbar;
