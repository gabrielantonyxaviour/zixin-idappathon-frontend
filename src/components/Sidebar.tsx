import React, { useEffect} from "react";
import styles from "../../styles/Sidebar.module.css";
const Sidebar = (props: { value: number; }) => {
  
  useEffect(() => {
    if(props.value == 0 ){
      document.getElementById("profile").style.display = "block"
      document.getElementById("badges").style.display = "none"
      document.getElementById("offers").style.display = "none"
    }
    else if(props.value ==1){
      document.getElementById("badges").style.display = "block"
      document.getElementById("profile").style.display = "none"
      document.getElementById("offers").style.display = "none"
    }
    else if(props.value ==2){
      document.getElementById("badges").style.display = "none"
      document.getElementById("profile").style.display = "none"
      document.getElementById("offers").style.display = "block"
    }
  }, [])
  

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarChild} />
      <div className={styles.needHelp}>
        <div className={styles.backgroundParent}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background12@2x.png"
          />
          <div className={styles.buttonbase}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody}>
                  <div className={styles.icon}>
                    <div className={styles.div}></div>
                  </div>
                  <b className={styles.text}>DOCUMENTATION</b>
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
          <div className={styles.text1}>
            <div className={styles.pleaseCheckOur}>Please check our docs</div>
            <b className={styles.needHelp1}>Need help?</b>
          </div>
          <div className={styles.icon2}>
            <div className={styles.iconChild} />
            <img
              className={styles.ioniconhhelpcircle}
              alt=""
              src="/ioniconhhelpcircle.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menu}>
      
        <a
          className={styles.signUp}
          href="/badges"
        >
          <div id='badges' className={styles.badgeselect} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/vector2.png"
          />
          <div className={styles.badges}>Badges</div>
        </a>
        
        <a
          className={styles.signIn}
          href={"/offers"}
        >
          <div id='offers' className={styles.offerselect} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/vector.png"
          />
          <div className={styles.offers1}>Offers</div>
        </a>
        <a
          className={styles.profile}
          href="/dashboard"
        >
          <div id='profile' className={styles.profileChild} />
          <img
            className={styles.ioniconppersondefault}
            alt=""
            src="/vector3.png"
          />
          <div id="profile" className={styles.profile1}>Profile</div>
        </a>
      </div>
      <div className={styles.logo}>
        <div className={styles.routerHackathon}>Router Hackathon</div>
      </div>
      <img className={styles.sidebarItem} alt="" src="/vector-62.svg" />
    </div>
  );
};
export default Sidebar;
