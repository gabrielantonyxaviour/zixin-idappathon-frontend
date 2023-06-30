import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useAccount } from "wagmi";
import React from "react";

const Login: FunctionComponent = () => {
  const { isConnected } = useAccount();

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      <div className={styles.walletLogin}>
        <div className={styles.item}>
          <div className={styles.walletconnect}>Walletconnect</div>
          <img
            className={styles.walletconnectWcIcon}
            alt=""
            src="/walletconnect-wc.svg"
          />
        </div>
        <div className={styles.item1}>
          <div className={styles.coinbase}>Coinbase</div>
          <img
            className={styles.walletconnectWcIcon}
            alt=""
            src="/coinbase-wc.svg"
          />
        </div>
        <div className={styles.metamask} onClick={() => {}}>
          <div className={styles.metamask1}>Metamask</div>
          <img
            className={styles.walletconnectWcIcon}
            alt=""
            src="/metamask-wc.svg"
          />
        </div>
        <div className={styles.connectAWallet}>Connect a wallet</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.buttonbase}>
          <div className={styles.widthStructure}>
            <div className={styles.heightStructure}>
              <div className={styles.buttonBody}>
                <div className={styles.icon}>
                  <div className={styles.div}></div>
                </div>
                <b className={styles.text}>Learn More</b>
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
        <div className={styles.pages}>
          <div className={styles.signIn}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody1}>
                  <img className={styles.icon2} alt="" src="/icon1.svg" />
                  <b className={styles.text1}>SIGN IN</b>
                </div>
              </div>
              <div className={styles.minwidth}>
                <div className={styles.content} />
              </div>
            </div>
          </div>
          <div className={styles.signUp}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody1}>
                  <img className={styles.icon2} alt="" src="/icon2.svg" />
                  <b className={styles.text1}>SIGN UP</b>
                </div>
              </div>
              <div className={styles.minwidth}>
                <div className={styles.content} />
              </div>
            </div>
          </div>
          <div className={styles.dashboard}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody1}>
                  <img className={styles.icon2} alt="" src="/icon3.svg" />
                  <b className={styles.text1}>ABOUT</b>
                </div>
              </div>
              <div className={styles.minwidth}>
                <div className={styles.content} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.routerHackathon}>Zixin</div>
      </div>
    </div>
  );
};

export default Login;
